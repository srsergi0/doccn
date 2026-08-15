import React from 'react';
import { Sheet, Frame, Pin } from '../components/document/primitives/geometric-primitives';
import { Watermark } from '../components/document/blocks/universal-helpers';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export const CertificateCoverTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="landscape" cropMarks className="p-12 relative bg-amber-50/20">
        {/* Background Seal Watermark */}
        <Watermark text="CERTIFICADO" opacity={0.03} />

        {/* Notary Golden Seal Pin */}
        <Pin edge="top-right" offset="12mm">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-1 shadow-lg flex items-center justify-center">
            <div className="w-full h-full rounded-full border border-amber-800/40 flex items-center justify-center text-amber-950 font-bold font-mono text-[8pt] text-center leading-tight">
              SELLO<br />OFICIAL
            </div>
          </div>
        </Pin>

        <Frame className="h-full border-4 border-double border-amber-600/60 p-8 rounded-lg text-center flex flex-col justify-between">
          <div>
            <div className="flex justify-center mb-2">
              <Award className="w-12 h-12 text-amber-600" />
            </div>
            <span className="text-doc-xs font-mono tracking-widest uppercase text-amber-800 font-bold">
              RECONOCIMIENTO DE EXCELENCIA TÉCNICA
            </span>
            <h1 className="text-3xl font-bold font-serif tracking-tight text-neutral-900 mt-1">
              Certificado de Maestría en Arquitectura Documental
            </h1>
          </div>

          <div className="my-4">
            <p className="text-doc-sm font-sans text-neutral-600 italic">Otorgado a:</p>
            <h2 className="text-2xl font-bold font-serif text-indigo-950 mt-1 mb-2 border-b-2 border-amber-500/40 inline-block px-6 pb-1">
              Ing. Sergio M. Lázaro
            </h2>
            <p className="text-doc-sm font-sans text-neutral-700 max-w-lg mx-auto leading-relaxed mt-2">
              Por haber completado satisfactoriamente el diseño e implementación del framework <strong>doccn</strong>, integrando las 5 primitivas geométricas universales (Sheet, Frame, Flow, Fold y Pin) y garantizando exportación vectorial nativa a PDF.
            </p>
          </div>

          <div className="flex justify-between items-end pt-4 border-t border-amber-200 text-doc-xs font-sans">
            <div className="text-left text-neutral-500">
              <div>Fecha de Emisión: 15 de Agosto, 2026</div>
              <div>ID Verificación: <span className="font-mono text-neutral-800">DOC-2026-991A</span></div>
            </div>

            <div className="text-center">
              <div className="h-10 border-b border-neutral-400 font-serif italic text-neutral-800 flex items-end justify-center px-8 pb-1">
                Elena Rostova
              </div>
              <div className="font-bold text-neutral-900 mt-1">Elena Rostova</div>
              <div className="text-[7pt] text-neutral-500">Presidenta del Consejo Editorial</div>
            </div>
          </div>
        </Frame>
      </Sheet>
    </div>
  );
};
