import React from 'react';

export type PageSizeName = 'A4' | 'Letter' | 'A5';
export type PageOrientation = 'portrait' | 'landscape';

export interface PageBudget {
  width: number;       // Printable width in pixels
  maxHeight: number;   // Printable net height in pixels (height - margins - header/footer)
}

export interface NodeSlice {
  nodeId: string;
  originalElement: HTMLElement;
  height: number;
  isAvoidBreak: boolean;
  forcedBreakBefore: boolean;
  forcedBreakAfter: boolean;
  isSplit?: boolean;
}

export interface VirtualPage {
  pageIndex: number;
  items: NodeSlice[];
  currentHeight: number;
  availableSpace: number;
  footnotes: FootnoteItem[];
  topFloats: HTMLElement[];
  bottomFloats: HTMLElement[];
}

export interface CrossRefEntry {
  id: string;
  type: 'figure' | 'table' | 'equation' | 'section' | 'theorem' | 'custom';
  index: number;
  formattedIndex: string;
  pageNumber: number;
}

export interface FootnoteItem {
  id: string;
  index: number;
  contentHtml: string;
  measuredHeight: number;
}

export interface PageMetadata {
  pageNumber: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  orientation: PageOrientation;
  size: PageSizeName;
}

export interface DocumentContextValue {
  registerCrossRef: (entry: Omit<CrossRefEntry, 'pageNumber' | 'index'>) => number;
  getCrossRef: (id: string) => CrossRefEntry | undefined;
  registerFootnote: (content: React.ReactNode) => { id: string; index: number };
  footnotes: Map<number, FootnoteItem[]>;
  currentPage: PageMetadata;
  isReadyForExport: boolean;
  pageSize: PageSizeName;
  orientation: PageOrientation;
  setPageSize: (size: PageSizeName) => void;
  setOrientation: (orientation: PageOrientation) => void;
}
