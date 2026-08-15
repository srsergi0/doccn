export type FloatPreference = 'here' | 'top' | 'bottom' | 'page';

export interface FloatElement {
  id: string;
  element: HTMLElement;
  height: number;
  preference: FloatPreference[];
}

export class FloatManager {
  private pendingFloats: FloatElement[] = [];

  public clear(): void {
    this.pendingFloats = [];
  }

  public registerFloat(el: HTMLElement, pref: FloatPreference[] = ['here', 'top', 'bottom']): FloatElement {
    const rect = el.getBoundingClientRect();
    const floatItem: FloatElement = {
      id: el.id || `float-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      element: el,
      height: rect.height || 100,
      preference: pref,
    };
    this.pendingFloats.push(floatItem);
    return floatItem;
  }

  public resolvePageFloats(
    availableHeight: number
  ): { topFloats: HTMLElement[]; bottomFloats: HTMLElement[]; consumedHeight: number } {
    const topFloats: HTMLElement[] = [];
    const bottomFloats: HTMLElement[] = [];
    let consumed = 0;

    const remainingFloats: FloatElement[] = [];

    for (const fl of this.pendingFloats) {
      if (consumed + fl.height > availableHeight) {
        remainingFloats.push(fl);
        continue;
      }

      if (fl.preference.includes('top')) {
        topFloats.push(fl.element);
        consumed += fl.height;
      } else if (fl.preference.includes('bottom')) {
        bottomFloats.push(fl.element);
        consumed += fl.height;
      } else {
        remainingFloats.push(fl);
      }
    }

    this.pendingFloats = remainingFloats;
    return { topFloats, bottomFloats, consumedHeight: consumed };
  }

  public hasPending(): boolean {
    return this.pendingFloats.length > 0;
  }
}
