import React from 'react';
import { Sheet, Fold, Panel, Pin } from '../components/document/primitives/geometric-primitives';
import { Sparkles, MapPin, Phone, Mail, Globe, CheckCircle2, Shield } from 'lucide-react';

export const TriFoldBrochureTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="landscape" cropMarks className="p-6">
        <Fold count={3} gap="6mm" guides>
          {/* Panel 1: Exterior / Cover */}
          <Panel className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-6 rounded-lg shadow-md relative">
            <Pin edge="top-right" offset="6mm">
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[7pt] font-mono">
                FOLLETO OFICIAL
              </span>
            </Pin>

            <div className="mt-8">
              <div className="p-2.5 rounded-lg bg-indigo-600/30 border border-indigo-400/40 w-fit mb-3">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <h1 className="text-xl font-bold font-serif leading-tight">
                doccn Enterprise
              </h1>
              <p className="text-slate-300 text-[8pt] font-sans mt-2 leading-relaxed">
                Reinventando el Diseño Editorial y la Maquetación Web a PDF Vectorial.
              </p>
            </div>

            <div className="mt-auto border-t border-slate-800 pt-3 text-[7.5pt] font-sans text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5"><Globe className="w-3 h-3 text-indigo-400" /> www.doccn.org</div>
              <div className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-indigo-400" /> contacto@doccn.org</div>
              <div className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-indigo-400" /> +52 55 1234 5678</div>
            </div>
          </Panel>

          {/* Panel 2: Interior Features */}
          <Panel className="bg-slate-50 border border-slate-200 p-6 rounded-lg text-slate-900">
            <div>
              <h2 className="text-sm font-bold font-sans text-indigo-950 border-b border-indigo-200 pb-1 mb-3">
                Ventajas Competitivas
              </h2>
              <div className="space-y-2.5 text-[8pt] font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Cero Bloqueo de Código:</strong>
                    <p className="text-slate-600">Componentes modulares copiables directamente a tu repositorio.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">Primitivas Geométricas:</strong>
                    <p className="text-slate-600">Sheet, Frame, Flow, Fold y Pin para cualquier formato sin límites.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">KaTeX & MathML Nativo:</strong>
                    <p className="text-slate-600">Fórmulas matemáticas impecables con resolución vectorial.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto p-2.5 bg-indigo-50 border border-indigo-200 rounded text-[7.5pt] text-indigo-900">
              <strong>Pliegue Central:</strong> Listo para imprenta con marcas de guillotina.
            </div>
          </Panel>

          {/* Panel 3: Flap / Solapa Interior */}
          <Panel className="bg-white border border-slate-200 p-6 rounded-lg text-slate-900">
            <div>
              <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-sm border-b border-slate-200 pb-1 mb-3 font-sans">
                <Shield className="w-4 h-4 text-indigo-600" />
                <span>Casos de Uso Infinitos</span>
              </div>
              <ul className="space-y-1.5 text-[8pt] text-slate-700 font-serif list-disc list-inside">
                <li>Cotizaciones y Facturas de 1 sola página.</li>
                <li>Folletería comercial y Trípticos de eventos.</li>
                <li>Artículos académicos de 2 columnas.</li>
                <li>Certificados y Diplomas con marcas de agua.</li>
                <li>Presentaciones Beamer de alta calidad.</li>
              </ul>
            </div>

            <div className="mt-auto border-t border-slate-200 pt-3 text-[7pt] text-slate-500 font-sans text-center">
              <MapPin className="w-3 h-3 text-slate-400 mx-auto mb-1" />
              Sede Central de Ingeniería &bull; 2026
            </div>
          </Panel>
        </Fold>
      </Sheet>
    </div>
  );
};
