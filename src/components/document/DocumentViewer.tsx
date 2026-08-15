import React, { useContext, useMemo } from 'react';
import { useVirtualPagination } from './primitives/useVirtualPagination';
import { DocumentContext } from './primitives/primitives';
import { PageHeader, PageFooter } from './blocks/page-decorations';

export interface DocumentViewerProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  headerLeft?: React.ReactNode;
  headerCenter?: React.ReactNode;
  headerRight?: React.ReactNode;
  footerLeft?: React.ReactNode;
  footerRight?: React.ReactNode;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  children,
  columns = 1,
  headerLeft,
  headerCenter,
  headerRight,
  footerLeft,
  footerRight,
}) => {
  const docCtx = useContext(DocumentContext);
  const pageSize = docCtx?.pageSize || 'A4';
  const orientation = docCtx?.orientation || 'portrait';

  // Budget calculations in pixels (at ~96 DPI)
  const budget = useMemo(() => {
    let rawWidth = 794;  // A4 default
    let rawHeight = 1123;
    let padding = 75;    // 20mm margin

    if (pageSize === 'Letter') {
      rawWidth = 816;
      rawHeight = 1056;
      padding = 72;
    } else if (pageSize === 'A5') {
      rawWidth = 559;
      rawHeight = 794;
      padding = 56;
    }

    if (orientation === 'landscape') {
      const temp = rawWidth;
      rawWidth = rawHeight;
      rawHeight = temp;
    }

    const netWidth = rawWidth - padding * 2;
    const netHeight = rawHeight - padding * 2 - 60; // 60px reserved for header + footer

    return {
      sheetWidth: rawWidth,
      sheetHeight: rawHeight,
      padding,
      netWidth,
      maxHeight: netHeight,
    };
  }, [pageSize, orientation]);

  const { sourceRef, pages, computeTimeMs } = useVirtualPagination({
    width: budget.netWidth,
    maxHeight: budget.maxHeight,
  });

  const columnClass = useMemo(() => {
    if (columns === 2) return 'columns-2 gap-6';
    if (columns === 3) return 'columns-3 gap-4';
    return '';
  }, [columns]);

  return (
    <div className="w-full flex flex-col items-center gap-8 py-6 select-none-print">
      {/* Performance & Pagination Indicator Banner (Studio only) */}
      <div className="no-print flex items-center justify-between w-full max-w-[800px] px-4 py-2 bg-slate-800/80 backdrop-blur-md rounded-lg border border-slate-700 text-slate-300 text-xs shadow-lg">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Paginación Virtual Acoplada
          </span>
          <span>&bull;</span>
          <span>{pages.length} páginas generadas</span>
          <span>&bull;</span>
          <span className="font-mono text-slate-400">{computeTimeMs} ms</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700">{pageSize}</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 capitalize">{orientation}</span>
        </div>
      </div>

      {/* 1. Hidden React Source Container (Maintains non-destructive Virtual DOM) */}
      <div
        ref={sourceRef}
        aria-hidden="true"
        className="absolute -left-[9999px] top-0 opacity-0 pointer-events-none font-serif text-doc-base text-neutral-900"
        style={{ width: `${budget.netWidth}px` }}
      >
        {children}
      </div>

      {/* 2. Projected Physical Sheets */}
      {pages.map((page, idx) => (
        <div
          key={page.pageIndex}
          className="print-page bg-white text-neutral-900 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 rounded-sm border border-neutral-200"
          style={{
            width: `${budget.sheetWidth}px`,
            height: `${budget.sheetHeight}px`,
            padding: `${budget.padding}px`,
          }}
        >
          {/* Running Header */}
          <PageHeader
            left={headerLeft}
            center={headerCenter}
            right={headerRight}
          />

          {/* Body Content Assigned to this Page */}
          <main className={`flex-1 flex flex-col my-3 overflow-hidden ${columnClass}`}>
            {page.items.map((item) => (
              <div
                key={item.nodeId}
                className="w-full"
                dangerouslySetInnerHTML={{ __html: item.originalElement.outerHTML }}
              />
            ))}
          </main>

          {/* Footnotes Area */}
          {page.footnotes && page.footnotes.length > 0 && (
            <div className="my-2 border-t border-neutral-300 pt-1 text-doc-xs font-serif text-neutral-700">
              {page.footnotes.map((fn) => (
                <div key={fn.id} className="flex gap-1.5 leading-snug">
                  <sup className="font-bold text-blue-700">[{fn.index}]</sup>
                  <span dangerouslySetInnerHTML={{ __html: fn.contentHtml }} />
                </div>
              ))}
            </div>
          )}

          {/* Running Footer */}
          <PageFooter
            left={footerLeft}
            right={footerRight}
            center={() => `Página ${idx + 1} de ${pages.length}`}
          />
        </div>
      ))}
    </div>
  );
};
