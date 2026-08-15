import React, { useRef, useEffect, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { PageSizeName, PageOrientation } from './paginator.types';

// ==========================================
// 1. <Sheet>: The Physical Universal Canvas
// ==========================================
export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: PageSizeName | 'BusinessCard' | 'Custom';
  width?: string;
  height?: string;
  orientation?: PageOrientation;
  aspect?: '16/9' | '4/3' | '1/1' | 'auto';
  bleed?: string; // e.g. '3mm'
  cropMarks?: boolean;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  size = 'A4',
  width,
  height,
  orientation = 'portrait',
  aspect = 'auto',
  bleed = '0mm',
  cropMarks = false,
  className,
  children,
  style,
  ...props
}) => {
  // Base dimensions in mm/px
  const dimensions = useMemo(() => {
    if (width && height) return { width, height };

    if (size === 'BusinessCard') return { width: '90mm', height: '50mm' };

    let w = '210mm';
    let h = '297mm';

    if (size === 'Letter') {
      w = '8.5in';
      h = '11in';
    } else if (size === 'A5') {
      w = '148mm';
      h = '210mm';
    }

    if (orientation === 'landscape') {
      return { width: h, height: w };
    }

    return { width: w, height: h };
  }, [size, width, height, orientation]);

  const aspectClass = useMemo(() => {
    if (aspect === '16/9') return 'aspect-[16/9] h-auto w-full max-w-[960px]';
    if (aspect === '4/3') return 'aspect-[4/3] h-auto w-full max-w-[800px]';
    if (aspect === '1/1') return 'aspect-square h-auto w-full max-w-[600px]';
    return '';
  }, [aspect]);

  return (
    <div
      className={cn(
        'print-page bg-white shadow-2xl relative overflow-hidden transition-all duration-300 rounded-xs border border-neutral-200 text-neutral-900',
        aspectClass,
        className
      )}
      style={{
        width: aspect !== 'auto' ? undefined : dimensions.width,
        height: aspect !== 'auto' ? undefined : dimensions.height,
        padding: bleed !== '0mm' ? bleed : undefined,
        ...style,
      }}
      {...props}
    >
      {/* Crop Marks Vector Overlay */}
      {cropMarks && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-900 pointer-events-none opacity-40" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-900 pointer-events-none opacity-40" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-900 pointer-events-none opacity-40" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-900 pointer-events-none opacity-40" />
        </>
      )}
      {children}
    </div>
  );
};

// ==========================================
// 2. <Frame>: Rigid 1-Sheet Figma-like Container
// ==========================================
export const Frame: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn('w-full h-full relative overflow-hidden flex flex-col justify-between', className)}
    {...props}
  >
    {children}
  </div>
);

// ==========================================
// 3. <Flow>: Fluid Continuous Pagination Container
// ==========================================
export const Flow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('w-full flex-1 flex flex-col', className)} {...props}>
    {children}
  </div>
);

// ==========================================
// 4. <Fold>: Mechanical Folds for Brochures/Trifolds
// ==========================================
export interface FoldProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: 2 | 3 | 4;
  gap?: string;
  guides?: boolean;
  children: React.ReactNode;
}

export const Fold: React.FC<FoldProps> = ({
  count = 3,
  gap = '4mm',
  guides = true,
  className,
  children,
  ...props
}) => {
  const gridCols = useMemo(() => {
    if (count === 2) return 'grid-cols-2';
    if (count === 4) return 'grid-cols-4';
    return 'grid-cols-3';
  }, [count]);

  return (
    <div
      className={cn('w-full h-full grid relative', gridCols, className)}
      style={{ gap }}
      {...props}
    >
      {/* Fold Fold Line Visual Guides */}
      {guides && (
        <div className="absolute inset-0 pointer-events-none flex justify-between z-10 opacity-30 border-dashed">
          {Array.from({ length: count - 1 }).map((_, idx) => (
            <div
              key={idx}
              className="h-full border-r border-dashed border-indigo-500 flex items-center justify-center"
              style={{ left: `${((idx + 1) / count) * 100}%` }}
            >
              <span className="text-[7pt] font-mono uppercase bg-white px-1 text-indigo-700 font-bold rotate-90">
                Línea Pliegue
              </span>
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

export const Panel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('w-full h-full overflow-hidden flex flex-col justify-between', className)} {...props}>
    {children}
  </div>
);

// ==========================================
// 5. <Pin>: Spatial Anchoring to Sheet Edges
// ==========================================
export type PinEdge =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'center'
  | 'all';

export interface PinProps extends React.HTMLAttributes<HTMLDivElement> {
  edge?: PinEdge;
  offset?: string;
  children: React.ReactNode;
}

export const Pin: React.FC<PinProps> = ({
  edge = 'top-right',
  offset = '10mm',
  className,
  children,
  style,
  ...props
}) => {
  const positionClass = useMemo(() => {
    switch (edge) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      case 'top-center':
        return 'top-0 left-1/2 -translate-x-1/2';
      case 'bottom-center':
        return 'bottom-0 left-1/2 -translate-x-1/2';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      case 'all':
        return 'inset-0';
      default:
        return 'top-0 right-0';
    }
  }, [edge]);

  return (
    <div
      className={cn('absolute z-20 pointer-events-auto', positionClass, className)}
      style={{
        margin: edge !== 'all' && edge !== 'center' ? offset : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// ==========================================
// 6. <ScaleToFit>: Smart Single-Page Auto-Fitter
// ==========================================
export interface ScaleToFitProps extends React.HTMLAttributes<HTMLDivElement> {
  maxScale?: number;
  minScale?: number;
  children: React.ReactNode;
}

export const ScaleToFit: React.FC<ScaleToFitProps> = ({
  maxScale = 1.0,
  minScale = 0.75,
  className,
  children,
  style,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1.0);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current || !contentRef.current) return;
      const containerHeight = containerRef.current.clientHeight;
      const contentHeight = contentRef.current.scrollHeight;

      if (containerHeight > 0 && contentHeight > containerHeight) {
        const computedScale = Math.max(minScale, Math.min(maxScale, containerHeight / contentHeight));
        setScale(computedScale);
      } else {
        setScale(1.0);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [maxScale, minScale]);

  return (
    <div ref={containerRef} className={cn('w-full h-full overflow-hidden relative', className)} {...props}>
      <div
        ref={contentRef}
        className="w-full origin-top transition-transform duration-200"
        style={{
          transform: `scale(${scale})`,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};
