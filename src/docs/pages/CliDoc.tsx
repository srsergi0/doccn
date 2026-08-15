import React from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

export const CliDoc: React.FC = () => {
  return (
    <div className="max-w-4xl text-slate-100 font-sans leading-relaxed">
      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
          <Terminal className="w-4 h-4" />
          <span>HERRAMIENTA CLI</span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight font-serif">
          CLI doccn — Gestión de Primitivas
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Agrega primitivas geométricas y plantillas a tu proyecto sin dependencias restrictivas en <code>node_modules</code>.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <h2 className="text-sm font-bold text-indigo-300 font-mono mb-2">1. Listar Registro de Primitivas</h2>
          <pre className="bg-slate-950 p-3 rounded font-mono text-xs text-emerald-400">
            bun run doccn list
          </pre>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <h2 className="text-sm font-bold text-indigo-300 font-mono mb-2">2. Instalar Primitivas Geométricas</h2>
          <pre className="bg-slate-950 p-3 rounded font-mono text-xs text-emerald-400">
            bun run doccn add sheet frame flow fold pin scaletofit
          </pre>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <h2 className="text-sm font-bold text-indigo-300 font-mono mb-2">3. Instalar Plantillas Completas</h2>
          <pre className="bg-slate-950 p-3 rounded font-mono text-xs text-emerald-400">
            bun run doccn add template-paper-academico template-proforma-1pagina
          </pre>
        </div>
      </div>
    </div>
  );
};
