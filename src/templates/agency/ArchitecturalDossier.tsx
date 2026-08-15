import React from 'react';
import { Sheet, Frame, Pin, ScaleToFit } from '../../components/document/primitives/geometric-primitives';
import { Watermark } from '../../components/document/blocks/universal-helpers';
import { Compass, Layers } from 'lucide-react';

export const ArchitecturalDossierTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="landscape" cropMarks className="p-10 relative bg-stone-900 text-stone-100 shadow-2xl">
        {/* Security Watermark */}
        <Watermark text="ATELIER LUXE" subtext="PROPOSITO ARQUITECTÓNICO" opacity={0.03} />

        {/* Top Gold Badge Pin */}
        <Pin edge="top-right" offset="10mm">
          <div className="flex items-center gap-2 bg-stone-800/90 border border-amber-500/40 text-amber-300 text-[8pt] font-mono px-3 py-1 rounded-full shadow-lg">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>DOSSIER DE ARQUITECTURA & INTERIORISMO</span>
          </div>
        </Pin>

        <Frame className="h-full justify-between">
          <ScaleToFit maxScale={1.0} minScale={0.85}>
            {/* Header */}
            <header className="border-b border-stone-800 pb-3 mb-4 flex justify-between items-end">
              <div>
                <span className="text-[8pt] font-mono tracking-widest text-amber-400 uppercase font-bold">
                  PROYECTO: VILLA PINEWOOD RESIDENCE &bull; SUIZA
                </span>
                <h1 className="text-2xl font-bold font-serif tracking-tight text-white mt-0.5">
                  ATELIER LUXE ARCHITECTURE
                </h1>
              </div>
              <div className="text-right text-[8pt] font-mono text-stone-400">
                <div>DOCUMENTO DE DISEÑO CERO-LÍMITES</div>
                <div>CLIENTE: RESIDENCIA PRIVADA ARBA</div>
              </div>
            </header>

            {/* Main 2-Column Grid */}
            <div className="grid grid-cols-12 gap-6 my-2 items-center">
              {/* Photo Hero Slot */}
              <div className="col-span-7 relative overflow-hidden rounded-lg border border-stone-700/80 shadow-2xl">
                <img
                  src="/assets/architectural_render.jpg"
                  alt="Villa Architectural Render"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent p-4 flex items-end justify-between">
                  <span className="text-white font-serif text-xs font-bold">
                    Render Fotorrealista &bull; Fachada Hormigón y Cristal
                  </span>
                  <span className="text-amber-400 font-mono text-[7.5pt] bg-stone-900/90 px-2 py-0.5 rounded border border-amber-500/30">
                    ILUMINACIÓN DUSK GOLDEN HOUR
                  </span>
                </div>
              </div>

              {/* Specification Specs */}
              <div className="col-span-5 space-y-3 font-sans">
                <div className="p-3 bg-stone-950/80 border border-stone-800 rounded-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                    <Layers className="w-4 h-4" />
                    <span>01. Muestrario de Materiales Nobles</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[7.5pt] font-mono">
                    <div className="p-1.5 bg-stone-900 border border-stone-800 rounded flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-stone-300 border border-stone-400 shrink-0" />
                      <span>Mármol Travertino</span>
                    </div>
                    <div className="p-1.5 bg-stone-900 border border-stone-800 rounded flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#3e2723] border border-stone-700 shrink-0" />
                      <span>Roble Fumado</span>
                    </div>
                    <div className="p-1.5 bg-stone-900 border border-stone-800 rounded flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-amber-600 border border-amber-500 shrink-0" />
                      <span>Latón Cepillado</span>
                    </div>
                    <div className="p-1.5 bg-stone-900 border border-stone-800 rounded flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-slate-800 border border-slate-700 shrink-0" />
                      <span>Hormigón Visto</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-stone-950/80 border border-stone-800 rounded-lg text-[8pt] leading-relaxed text-stone-300 font-serif">
                  <strong className="text-white font-sans block mb-0.5">Memoria Descriptiva:</strong>
                  Integración armónica del paisaje boscoso con grandes ventanales de alto aislamiento térmico y calefacción por suelo radiante.
                </div>
              </div>
            </div>

            {/* Pure HTML5 + Tailwind Signature Block */}
            <div className="mt-4 pt-3 border-t border-stone-800 grid grid-cols-2 gap-8 font-sans text-xs">
              <div className="space-y-1">
                <div className="h-8 border-b border-stone-700 flex items-end pb-1 font-serif italic text-amber-400">
                  Sergio M. Lázaro
                </div>
                <div className="font-bold text-white text-[8pt]">Arq. Sergio M. Lázaro</div>
                <div className="text-stone-400 text-[7.5pt]">Director de Diseño &bull; ATELIER LUXE</div>
              </div>

              <div className="space-y-1">
                <div className="h-8 border-b border-stone-700 flex items-end pb-1 font-serif italic text-amber-400">
                  Elena Rostova
                </div>
                <div className="font-bold text-white text-[8pt]">Elena Rostova</div>
                <div className="text-stone-400 text-[7.5pt]">Arquitecta Principal &bull; ATELIER LUXE</div>
              </div>
            </div>
          </ScaleToFit>
        </Frame>
      </Sheet>
    </div>
  );
};
