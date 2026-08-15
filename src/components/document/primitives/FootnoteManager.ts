import type { FootnoteItem } from './paginator.types';

export class FootnoteManager {
  private footnotesByPage: Map<number, FootnoteItem[]> = new Map();
  private separatorHeight = 20;

  public clear(): void {
    this.footnotesByPage.clear();
  }

  public tryAddFootnote(
    pageIndex: number,
    footnoteHtml: string,
    currentBodyHeight: number,
    maxPageHeight: number
  ): { fits: boolean; footnoteHeight: number; item?: FootnoteItem } {
    const measuredHeight = this.measureFootnoteHtml(footnoteHtml);
    const existing = this.footnotesByPage.get(pageIndex) || [];
    const isFirstNote = existing.length === 0;

    const addedHeight = measuredHeight + (isFirstNote ? this.separatorHeight : 0);
    const currentNotesHeight = this.getFootnotesHeight(pageIndex);

    if (currentBodyHeight + currentNotesHeight + addedHeight <= maxPageHeight) {
      const item: FootnoteItem = {
        id: `fn-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        index: this.getTotalFootnotesCount() + 1,
        contentHtml: footnoteHtml,
        measuredHeight,
      };

      existing.push(item);
      this.footnotesByPage.set(pageIndex, existing);
      return { fits: true, footnoteHeight: addedHeight, item };
    }

    return { fits: false, footnoteHeight: 0 };
  }

  public getFootnotesHeight(pageIndex: number): number {
    const list = this.footnotesByPage.get(pageIndex) || [];
    if (list.length === 0) return 0;
    const itemsTotal = list.reduce((acc, fn) => acc + fn.measuredHeight, 0);
    return itemsTotal + this.separatorHeight;
  }

  public getFootnotes(pageIndex: number): FootnoteItem[] {
    return this.footnotesByPage.get(pageIndex) || [];
  }

  public rollbackLast(pageIndex: number): FootnoteItem | undefined {
    const list = this.footnotesByPage.get(pageIndex);
    if (!list || list.length === 0) return undefined;
    const removed = list.pop();
    this.footnotesByPage.set(pageIndex, list);
    return removed;
  }

  public getTotalFootnotesCount(): number {
    let count = 0;
    this.footnotesByPage.forEach((list) => {
      count += list.length;
    });
    return count;
  }

  private measureFootnoteHtml(html: string): number {
    const tempDiv = document.createElement('div');
    tempDiv.className = 'text-doc-xs text-neutral-700 font-serif leading-normal py-1';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.position = 'absolute';
    tempDiv.style.width = '100%';
    tempDiv.innerHTML = html;
    document.body.appendChild(tempDiv);
    const height = tempDiv.getBoundingClientRect().height || 18;
    document.body.removeChild(tempDiv);
    return height;
  }
}
