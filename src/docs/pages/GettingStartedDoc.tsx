import React from 'react';
import { Sparkles, Terminal, Box, Cpu } from 'lucide-react';

export const GettingStartedDoc: React.FC = () => {
  return (
    <div className="max-w-4xl text-slate-100 font-sans leading-relaxed">
      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
          <Sparkles className="w-4 h-4" />
          <span>DOCUMENTACIÓN OFICIAL DOC CN</span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight font-serif">
          Introducción & Filosofía de Diseño
        </h1>
        <p className="mt-3 text-slate-300 text-base leading-relaxed">
          <strong>doccn</strong> es un sistema de diseño de documentos y motor de paginación virtual estilo <em>shadcn/ui</em> para React, Tailwind CSS, KaTeX y CSS Paged Media.
        </p>
      </div>

      {/* Philosophy Callout */}
      <div className="my-6 p-5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-sm leading-relaxed">
        <strong className="text-white block font-bold mb-1">
          💡 Cero Componentes Rígidos (Zero Opinion Architecture)
        </strong>
        HTML y Figma triunfaron porque no tienen etiquetas rígidas para "blogs" o "tiendas", sino primitivas espaciales universales. <strong>doccn</strong> no impone componentes cerrados (como &lt;Invoice&gt; o &lt;Brochure&gt;); provee <strong>5 Primitivas Geométricas Universales</strong> y deja que construyas cualquier documento usando HTML5 y clases estándar de Tailwind CSS.
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <div className="flex items-center gap-2 font-bold text-white mb-2 text-sm">
            <Box className="w-4 h-4 text-emerald-400" />
            Las 5 Primitivas Geométricas
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            <code className="text-indigo-300">Sheet</code>, <code className="text-indigo-300">Frame</code>, <code className="text-indigo-300">Flow</code>, <code className="text-indigo-300">Fold</code>, <code className="text-indigo-300">Pin</code> y <code className="text-indigo-300">ScaleToFit</code> resuelven el 100% de los desafíos espaciales (dípticos, proformas de 1 hoja, diplomas, diapositivas).
          </p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <div className="flex items-center gap-2 font-bold text-white mb-2 text-sm">
            <Cpu className="w-4 h-4 text-purple-400" />
            Paginación Virtual en RAM (&lt; 15 ms)
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Impulsado por <code className="text-indigo-300">ResizeObserver</code> y Range API. Mantiene el DOM de React 100% intacto sin destructividad en runtime.
          </p>
        </div>
      </div>

      {/* Quick Start Installation */}
      <h2 className="text-xl font-bold text-white mt-10 mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-indigo-400" />
        Instalación Rápida
      </h2>

      <div className="space-y-4">
        <div>
          <div className="text-xs text-slate-400 mb-1 font-mono">1. Instalar dependencias con Bun:</div>
          <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono text-xs text-indigo-300">
            bun add katex lucide-react clsx tailwind-merge
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400 mb-1 font-mono">2. Agregar primitivas con el CLI doccn:</div>
          <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono text-xs text-emerald-400">
            bun run doccn add sheet frame flow fold pin scaletofit
          </div>
        </div>
      </div>
    </div>
  );
};
