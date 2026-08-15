export interface SplitResult {
  fits: HTMLElement;
  remainder: HTMLElement;
}

export class TextSplitter {
  /**
   * Splitting paragraph element vertically using Range API & binary search
   */
  public static split(element: HTMLElement, availableHeight: number): SplitResult | null {
    if (availableHeight <= 0) return null;

    // Check minimum height for 2 lines (Orphans & Widows rule)
    const computedStyle = window.getComputedStyle(element);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 20;
    const minBlockHeight = lineHeight * 2;

    if (availableHeight < minBlockHeight) {
      return null;
    }

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
    const textNodes: Text[] = [];
    let currentNode: Node | null;

    while ((currentNode = walker.nextNode())) {
      textNodes.push(currentNode as Text);
    }

    if (textNodes.length === 0) return null;

    const range = document.createRange();
    const containerTop = element.getBoundingClientRect().top;
    
    let targetTextNode: Text | null = null;

    // 1. Locate text node where overflow occurs
    for (const textNode of textNodes) {
      range.selectNodeContents(textNode);
      const rect = range.getBoundingClientRect();
      const relativeBottom = rect.bottom - containerTop;

      if (relativeBottom > availableHeight) {
        targetTextNode = textNode;
        break;
      }
    }

    if (!targetTextNode) return null;

    // 2. Binary search at word level inside target text node
    const text = targetTextNode.textContent || '';
    const words = text.split(/(\s+)/); // Preserve spaces
    let low = 0;
    let high = words.length;
    let bestCharOffset = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const testText = words.slice(0, mid).join('');
      const charOffset = testText.length;

      try {
        range.setStart(element, 0);
        range.setEnd(targetTextNode, charOffset);

        const currentHeight = range.getBoundingClientRect().height;

        if (currentHeight <= availableHeight) {
          bestCharOffset = charOffset;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } catch {
        break;
      }
    }

    if (bestCharOffset === 0 && textNodes.indexOf(targetTextNode) === 0) {
      return null;
    }

    // 3. Extract two fragments preserving HTML structure
    try {
      range.setStart(element, 0);
      range.setEnd(targetTextNode, bestCharOffset);

      const fitsFragment = range.cloneContents();
      const fitsElement = element.cloneNode(false) as HTMLElement;
      fitsElement.appendChild(fitsFragment);
      fitsElement.setAttribute('data-split-part', 'first');

      range.setStart(targetTextNode, bestCharOffset);
      range.setEndAfter(element.lastChild || element);

      const remainderFragment = range.extractContents();
      const remainderElement = element.cloneNode(false) as HTMLElement;
      remainderElement.appendChild(remainderFragment);
      remainderElement.setAttribute('data-split-part', 'continuation');

      return { fits: fitsElement, remainder: remainderElement };
    } catch {
      return null;
    }
  }
}
