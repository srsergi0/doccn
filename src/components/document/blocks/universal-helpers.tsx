import React from 'react';

/**
 * <Watermark /> — Universal Security Watermark Helper
 * Displays non-intrusive diagonal text stamps across document sheets.
 */
export const Watermark: React.FC<{
  text?: string;
  subtext?: string;
  opacity?: number;
  rotate?: number;
  className?: string;
}> = ({
  text = 'DRAFT',
  subtext,
  opacity = 0.04,
  rotate = -35,
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none flex flex-col items-center justify-center select-none overflow-hidden z-0 ${className}`}
      style={{ opacity }}
    >
      <div
        className="transform flex flex-col items-center justify-center text-center font-bold tracking-widest uppercase font-serif"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <span className="text-6xl md:text-8xl text-current leading-none whitespace-nowrap">
          {text}
        </span>
        {subtext && (
          <span className="text-xs md:text-sm text-current tracking-widest mt-2 opacity-80 font-mono">
            {subtext}
          </span>
        )}
      </div>
    </div>
  );
};
