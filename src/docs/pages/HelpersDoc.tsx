import React from 'react';
import { DocSection } from '../DocSection';
import { Watermark } from '../../components/document/blocks/universal-helpers';
import { Sheet } from '../../components/document/primitives/geometric-primitives';

export const HelpersDoc: React.FC = () => {
  return (
    <div className="max-w-4xl text-slate-100 font-sans leading-relaxed">
      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight font-serif">
          Ayudantes Headless (Unstyled Helpers)
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Utilidades puras sin opinión estética para marcas de agua y estampados de seguridad.
        </p>
      </div>

      {/* 1. Watermark */}
      <DocSection
        id="watermark"
        title="1. <Watermark /> — Marcas de Agua & Sellos de Seguridad"
        description="Renderiza marcas de agua diagonales o sellos de borrador en todas las páginas sin alterar la altura ni la paginación del texto."
        cliCommand="watermark"
        code={`import { Watermark } from '@/components/document/blocks/universal-helpers';

<Watermark text="CONFIDENCIAL" subtext="PROPIEDAD INTELECTUAL" opacity={0.06} />`}
      >
        <div className="w-full max-w-[400px] h-[180px]">
          <Sheet size="A5" className="p-6 relative h-full flex items-center justify-center">
            <Watermark text="BORRADOR" opacity={0.08} />
            <div className="text-slate-900 font-serif text-sm font-bold z-10">Texto sobre marca de agua</div>
          </Sheet>
        </div>
      </DocSection>
    </div>
  );
};
