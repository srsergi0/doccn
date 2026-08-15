import React from 'react';
import { usePage } from '../primitives/primitives';
import { cn } from '@/lib/utils';

interface HeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

interface FooterProps {
  left?: React.ReactNode;
  center?: ((pageInfo: { page: number; total: number }) => React.ReactNode) | React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<HeaderProps> = ({
  left,
  center,
  right,
  className,
}) => {
  const { isFirst } = usePage();

  // Optionally hide header on cover/first page
  if (isFirst && !left && !center && !right) return null;

  return (
    <header
      className={cn(
        'w-full flex items-center justify-between border-b border-neutral-300 pb-1.5 text-[8pt] font-sans text-neutral-500 uppercase tracking-wider',
        className
      )}
    >
      <div className="flex-1 text-left truncate">{left}</div>
      <div className="flex-1 text-center truncate font-medium">{center}</div>
      <div className="flex-1 text-right truncate">{right}</div>
    </header>
  );
};

export const PageFooter: React.FC<FooterProps> = ({
  left,
  center,
  right,
  className,
}) => {
  const { pageNumber, totalPages } = usePage();

  const renderedCenter = typeof center === 'function'
    ? center({ page: pageNumber, total: totalPages })
    : center ?? `Página ${pageNumber} de ${totalPages}`;

  return (
    <footer
      className={cn(
        'w-full flex items-center justify-between border-t border-neutral-300 pt-1.5 text-[8pt] font-sans text-neutral-500 tracking-wide',
        className
      )}
    >
      <div className="flex-1 text-left truncate">{left || 'Confidencial &bull; doccn'}</div>
      <div className="flex-1 text-center font-mono font-medium text-neutral-700">{renderedCenter}</div>
      <div className="flex-1 text-right truncate">{right || new Date().getFullYear().toString()}</div>
    </footer>
  );
};
