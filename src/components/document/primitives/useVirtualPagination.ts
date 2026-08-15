import { useEffect, useRef, useState } from 'react';
import { VirtualPaginator } from './VirtualPaginator';
import type { VirtualPage, PageBudget } from './paginator.types';

export function useVirtualPagination(pageBudget: PageBudget) {
  const sourceRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<VirtualPage[]>([]);
  const [computeTimeMs, setComputeTimeMs] = useState<number>(0);
  const paginatorRef = useRef<VirtualPaginator | null>(null);

  useEffect(() => {
    if (!sourceRef.current) return;

    const startTime = performance.now();
    paginatorRef.current = new VirtualPaginator(sourceRef.current, {
      pageBudget,
      onLayoutComplete: (computedPages) => {
        setPages([...computedPages]);
        setComputeTimeMs(Math.round(performance.now() - startTime));
      },
    });

    return () => {
      paginatorRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (paginatorRef.current) {
      const startTime = performance.now();
      paginatorRef.current.updateBudget(pageBudget);
      setComputeTimeMs(Math.round(performance.now() - startTime));
    }
  }, [pageBudget.maxHeight, pageBudget.width]);

  return { sourceRef, pages, computeTimeMs };
}
