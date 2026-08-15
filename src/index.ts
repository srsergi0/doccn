// ============================================================================
// doccn/ui — Universal Geometric Document System for React & Tailwind CSS
// ============================================================================

// 1. The 5 Universal Geometric Primitives
export {
  Sheet,
  Frame,
  Flow,
  Fold,
  Panel,
  Pin,
  ScaleToFit,
} from './components/document/primitives/geometric-primitives';

export type {
  SheetProps,
  FoldProps,
  PinProps,
  ScaleToFitProps,
} from './components/document/primitives/geometric-primitives';

// 2. Core Pagination Engine & Hooks
export {
  DocumentRoot,
  usePage,
  useCrossRef,
  useFootnote,
} from './components/document/primitives/primitives';

export { useVirtualPagination } from './components/document/primitives/useVirtualPagination';
export { VirtualPaginator } from './components/document/primitives/VirtualPaginator';
export { TextSplitter } from './components/document/primitives/TextSplitter';
export { TableSplitter } from './components/document/primitives/TableSplitter';
export { FootnoteManager } from './components/document/primitives/FootnoteManager';

// 3. Headless Unstyled Helpers
export { Watermark } from './components/document/blocks/universal-helpers';
