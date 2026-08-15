import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import type {
  DocumentContextValue,
  CrossRefEntry,
  FootnoteItem,
  PageMetadata,
  PageSizeName,
  PageOrientation
} from './paginator.types';

export const DocumentContext = createContext<DocumentContextValue | null>(null);

export const DocumentRoot: React.FC<{
  children: React.ReactNode;
  initialSize?: PageSizeName;
  initialOrientation?: PageOrientation;
}> = ({ children, initialSize = 'A4', initialOrientation = 'portrait' }) => {
  const [crossRefs, setCrossRefs] = useState<Map<string, CrossRefEntry>>(new Map());
  const [footnotes, setFootnotes] = useState<Map<number, FootnoteItem[]>>(new Map());
  const [pageSize, setPageSize] = useState<PageSizeName>(initialSize);
  const [orientation, setOrientation] = useState<PageOrientation>(initialOrientation);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Set pdf ready flag on body when mounted
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const value = useMemo<DocumentContextValue>(
    () => ({
      registerCrossRef: (entry) => {
        let index = crossRefs.size + 1;
        setCrossRefs((prev) => {
          if (prev.has(entry.id)) {
            return prev;
          }
          const next = new Map(prev);
          next.set(entry.id, { ...entry, pageNumber: 1, index });
          return next;
        });
        return crossRefs.get(entry.id)?.index || index;
      },
      getCrossRef: (id) => crossRefs.get(id),
      registerFootnote: (content) => {
        const id = `fn-${Math.random().toString(36).substring(2, 7)}`;
        const index = (footnotes.get(1)?.length ?? 0) + 1;
        return { id, index };
      },
      footnotes,
      currentPage: {
        pageNumber: 1,
        totalPages: 1,
        isFirst: true,
        isLast: true,
        orientation,
        size: pageSize,
      },
      isReadyForExport: isReady,
      pageSize,
      orientation,
      setPageSize,
      setOrientation,
    }),
    [crossRefs, footnotes, isReady, pageSize, orientation]
  );

  return (
    <DocumentContext.Provider value={value}>
      <div data-doc-root data-pdf-ready={isReady ? 'true' : 'false'}>
        {children}
      </div>
    </DocumentContext.Provider>
  );
};

export function usePage(): PageMetadata {
  const context = useContext(DocumentContext);
  if (!context) {
    return { pageNumber: 1, totalPages: 1, isFirst: true, isLast: true, orientation: 'portrait', size: 'A4' };
  }
  return context.currentPage;
}

export function useCrossRef(id: string, type: CrossRefEntry['type'] = 'custom', prefix = '') {
  const context = useContext(DocumentContext);
  const [entry, setEntry] = useState<CrossRefEntry | undefined>(() => context?.getCrossRef(id));

  useEffect(() => {
    if (!context || !id) return;
    const index = context.registerCrossRef({ id, type, formattedIndex: `${prefix}${id}` });
    setEntry(context.getCrossRef(id));
  }, [id, type, prefix, context]);

  return {
    refNumber: entry?.index ?? 1,
    pageNumber: entry?.pageNumber ?? 1,
    formatted: entry?.formattedIndex ?? `${prefix}1`,
    targetProps: { id, 'data-crossref-id': id }
  };
}

export function useFootnote(content: React.ReactNode) {
  const context = useContext(DocumentContext);
  const [footnoteData, setFootnoteData] = useState<{ id: string; index: number } | null>(null);

  useEffect(() => {
    if (!context) return;
    const data = context.registerFootnote(content);
    setFootnoteData(data);
  }, [context]);

  return {
    index: footnoteData?.index ?? 1,
    markerProps: {
      'data-footnote-call': footnoteData?.id,
      role: 'doc-noteref'
    }
  };
}

export const AvoidBreak: React.FC<{
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, as: Component = 'div', className = '', style = {} }) => (
  <Component
    style={{ breakInside: 'avoid', pageBreakInside: 'avoid', ...style }}
    className={`break-inside-avoid ${className}`}
    data-avoid-break="true"
  >
    {children}
  </Component>
);

export const PageBreak: React.FC<{
  position?: 'before' | 'after';
  className?: string;
}> = ({ position = 'before', className = '' }) => (
  <div
    style={{
      breakBefore: position === 'before' ? 'page' : 'auto',
      breakAfter: position === 'after' ? 'page' : 'auto',
    }}
    className={position === 'before' ? `break-before-page ${className}` : `break-after-page ${className}`}
    aria-hidden="true"
  />
);
