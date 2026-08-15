export interface TableSplitResult {
  fits: HTMLTableElement;
  remainder: HTMLTableElement;
}

export class TableSplitter {
  /**
   * Splits an HTML table into two fragments respecting thead and colgroup
   */
  public static split(
    table: HTMLTableElement,
    availableHeight: number
  ): TableSplitResult | null {
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody') || table;
    const rows = Array.from(tbody.querySelectorAll(':scope > tr')) as HTMLTableRowElement[];

    if (rows.length === 0) return null;

    // 1. Measure header height
    let theadHeight = 0;
    if (thead) {
      const theadRect = thead.getBoundingClientRect();
      theadHeight = theadRect.height;
    }

    const firstRowRect = rows[0].getBoundingClientRect();
    const firstRowHeight = firstRowRect.height || 30;

    // If available height cannot fit thead + first row
    if (availableHeight < theadHeight + firstRowHeight) {
      return null;
    }

    // 2. Accumulate rows fitting in current page
    let accumulatedHeight = theadHeight;
    let splitRowIndex = -1;

    for (let i = 0; i < rows.length; i++) {
      const rowHeight = rows[i].getBoundingClientRect().height || 30;
      
      if (accumulatedHeight + rowHeight <= availableHeight) {
        accumulatedHeight += rowHeight;
        splitRowIndex = i;
      } else {
        break;
      }
    }

    if (splitRowIndex === -1 || splitRowIndex === rows.length - 1) {
      return null;
    }

    // 3. Build fitsTable (Fragment 1)
    const fitsTable = this.cloneTableSkeleton(table);
    const fitsTbody = document.createElement('tbody');
    for (let i = 0; i <= splitRowIndex; i++) {
      fitsTbody.appendChild(rows[i].cloneNode(true));
    }
    fitsTable.appendChild(fitsTbody);
    fitsTable.setAttribute('data-table-part', 'first');

    // 4. Build remainderTable (Fragment 2 with duplicated thead)
    const remainderTable = this.cloneTableSkeleton(table);
    remainderTable.setAttribute('data-table-continuation', 'true');
    remainderTable.setAttribute('data-table-part', 'continuation');
    
    const remainderTbody = document.createElement('tbody');
    for (let i = splitRowIndex + 1; i < rows.length; i++) {
      remainderTbody.appendChild(rows[i].cloneNode(true));
    }
    remainderTable.appendChild(remainderTbody);

    return { fits: fitsTable, remainder: remainderTable };
  }

  private static cloneTableSkeleton(original: HTMLTableElement): HTMLTableElement {
    const clone = original.cloneNode(false) as HTMLTableElement;

    // Preserve colgroup for column width consistency
    const colgroups = original.querySelectorAll('colgroup');
    colgroups.forEach((col) => clone.appendChild(col.cloneNode(true)));

    // Preserve thead
    const thead = original.querySelector('thead');
    if (thead) {
      clone.appendChild(thead.cloneNode(true));
    }

    return clone;
  }
}
