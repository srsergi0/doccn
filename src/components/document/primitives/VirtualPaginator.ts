import type { PageBudget, VirtualPage, NodeSlice } from './paginator.types';
import { TextSplitter } from './TextSplitter';
import { TableSplitter } from './TableSplitter';
import { FootnoteManager } from './FootnoteManager';
import { FloatManager } from './FloatManager';

export interface PaginatorOptions {
  pageBudget: PageBudget;
  onLayoutComplete?: (pages: VirtualPage[]) => void;
  debounceMs?: number;
}

export class VirtualPaginator {
  private sourceContainer: HTMLElement;
  private options: PaginatorOptions;
  private resizeObserver: ResizeObserver;
  private debounceTimer: number | null = null;
  private footnoteManager: FootnoteManager = new FootnoteManager();
  private floatManager: FloatManager = new FloatManager();

  constructor(sourceContainer: HTMLElement, options: PaginatorOptions) {
    this.sourceContainer = sourceContainer;
    this.options = options;

    this.resizeObserver = new ResizeObserver(() => {
      this.scheduleRecomputation();
    });

    this.initObserver();
    this.computeLayout();
  }

  private initObserver(): void {
    this.resizeObserver.observe(this.sourceContainer);
    Array.from(this.sourceContainer.children).forEach((child) => {
      this.resizeObserver.observe(child);
    });
  }

  public updateBudget(newBudget: PageBudget): void {
    this.options.pageBudget = newBudget;
    this.computeLayout();
  }

  private scheduleRecomputation(): void {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = window.setTimeout(() => {
      this.computeLayout();
    }, this.options.debounceMs ?? 16);
  }

  /**
   * Main non-destructive layout calculation
   */
  public computeLayout(): VirtualPage[] {
    const rawChildren = Array.from(this.sourceContainer.children) as HTMLElement[];
    const budget = this.options.pageBudget;
    
    this.footnoteManager.clear();
    this.floatManager.clear();

    const pages: VirtualPage[] = [this.createNewPage(0)];
    let currentPageIndex = 0;

    const queue: HTMLElement[] = [...rawChildren];
    let elementIndex = 0;

    while (queue.length > 0) {
      const element = queue.shift()!;
      elementIndex++;

      const slice = this.measureElement(element, elementIndex);
      let currentPage = pages[currentPageIndex];

      // 1. Forced page break BEFORE
      if (slice.forcedBreakBefore && currentPage.items.length > 0) {
        currentPageIndex++;
        currentPage = this.createNewPage(currentPageIndex);
        pages.push(currentPage);
      }

      // Check footnotes inside element
      const footnoteEls = element.querySelectorAll('[data-footnote-content]');
      footnoteEls.forEach((fnEl) => {
        const content = fnEl.getAttribute('data-footnote-content') || fnEl.innerHTML;
        this.footnoteManager.tryAddFootnote(
          currentPageIndex,
          content,
          currentPage.currentHeight,
          budget.maxHeight
        );
      });

      const currentNotesHeight = this.footnoteManager.getFootnotesHeight(currentPageIndex);
      const effectiveMaxHeight = budget.maxHeight - currentNotesHeight;

      const fitsDirectly = currentPage.currentHeight + slice.height <= effectiveMaxHeight;

      if (fitsDirectly) {
        // Case A: Fits completely
        this.addItemToPage(currentPage, slice);
      } else if (slice.isAvoidBreak) {
        // Case B: break-inside: avoid -> move whole block to next page
        currentPageIndex++;
        currentPage = this.createNewPage(currentPageIndex);
        pages.push(currentPage);
        this.addItemToPage(currentPage, slice);
      } else {
        const tagName = element.tagName.toLowerCase();
        const availableHeight = effectiveMaxHeight - currentPage.currentHeight;

        if (tagName === 'table') {
          // Case C1: Table splitting
          const tableResult = TableSplitter.split(element as HTMLTableElement, availableHeight);
          if (tableResult) {
            const fitsSlice = this.measureElement(tableResult.fits, elementIndex);
            this.addItemToPage(currentPage, fitsSlice);

            currentPageIndex++;
            currentPage = this.createNewPage(currentPageIndex);
            pages.push(currentPage);

            queue.unshift(tableResult.remainder);
          } else {
            currentPageIndex++;
            currentPage = this.createNewPage(currentPageIndex);
            pages.push(currentPage);
            this.addItemToPage(currentPage, slice);
          }
        } else if (tagName === 'p' || tagName === 'div' || tagName === 'article' || tagName === 'section') {
          // Case C2: Paragraph / Block text splitting
          const splitResult = TextSplitter.split(element, availableHeight);
          if (splitResult && splitResult.fits.textContent?.trim().length) {
            const fitsSlice = this.measureElement(splitResult.fits, elementIndex);
            this.addItemToPage(currentPage, fitsSlice);

            currentPageIndex++;
            currentPage = this.createNewPage(currentPageIndex);
            pages.push(currentPage);

            queue.unshift(splitResult.remainder);
          } else {
            currentPageIndex++;
            currentPage = this.createNewPage(currentPageIndex);
            pages.push(currentPage);
            this.addItemToPage(currentPage, slice);
          }
        } else {
          // Case C3: Fallback move to next page
          currentPageIndex++;
          currentPage = this.createNewPage(currentPageIndex);
          pages.push(currentPage);
          this.addItemToPage(currentPage, slice);
        }
      }

      // 4. Forced page break AFTER
      if (slice.forcedBreakAfter && queue.length > 0) {
        currentPageIndex++;
        currentPage = this.createNewPage(currentPageIndex);
        pages.push(currentPage);
      }
    }

    // Attach footnotes to calculated pages
    pages.forEach((page, idx) => {
      page.footnotes = this.footnoteManager.getFootnotes(idx);
    });

    this.options.onLayoutComplete?.(pages);
    return pages;
  }

  private addItemToPage(page: VirtualPage, slice: NodeSlice): void {
    page.items.push(slice);
    page.currentHeight += slice.height;
    page.availableSpace = this.options.pageBudget.maxHeight - page.currentHeight;
  }

  private measureElement(el: HTMLElement, index: number): NodeSlice {
    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    const marginTop = parseFloat(style.marginTop) || 0;
    const marginBottom = parseFloat(style.marginBottom) || 0;

    const isAvoidBreak =
      style.breakInside === 'avoid' ||
      style.pageBreakInside === 'avoid' ||
      el.hasAttribute('data-avoid-break') ||
      el.classList.contains('break-inside-avoid');

    const forcedBreakBefore =
      style.breakBefore === 'page' ||
      style.pageBreakBefore === 'always' ||
      el.classList.contains('break-before-page');

    const forcedBreakAfter =
      style.breakAfter === 'page' ||
      style.pageBreakAfter === 'always' ||
      el.classList.contains('break-after-page');

    return {
      nodeId: el.id || `virtual-node-${index}-${Math.random().toString(36).substring(2, 7)}`,
      originalElement: el,
      height: (rect.height || 20) + marginTop + marginBottom,
      isAvoidBreak,
      forcedBreakBefore,
      forcedBreakAfter,
    };
  }

  private createNewPage(index: number): VirtualPage {
    return {
      pageIndex: index,
      items: [],
      currentHeight: 0,
      availableSpace: this.options.pageBudget.maxHeight,
      footnotes: [],
      topFloats: [],
      bottomFloats: [],
    };
  }

  public destroy(): void {
    this.resizeObserver.disconnect();
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
  }
}
