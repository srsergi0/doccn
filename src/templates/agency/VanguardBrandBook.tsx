import React from 'react';
import { Sheet, Frame, Pin, ScaleToFit } from '../../components/document/primitives/geometric-primitives';
import { Watermark } from '../../components/document/blocks/universal-helpers';
import { Sparkles, Palette, Type, Compass, CheckCircle2 } from 'lucide-react';

export const VanguardBrandBookTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="portrait" cropMarks className="p-10 relative bg-emerald-950 text-white shadow-2xl">
        {/* Security Watermark */}
        <Watermark text="VANGUARD" subtext="BRAND GUIDELINES 2026" opacity={0.03} />

        {/* Top Gold Badge Pin */}
        <Pin edge="top-right" offset="10mm">
          <div className="flex items-center gap-2 bg-emerald-900/80 border border-emerald-500/40 text-amber-300 text-[8pt] font-mono px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ESTUDIO EDITORIAL ADVANCED</span>
          </div>
        </Pin>

        <Frame className="h-full justify-between">
          <ScaleToFit maxScale={1.0} minScale={0.85}>
            {/* Header */}
            <header className="border-b border-emerald-800/80 pb-4 mb-6 flex justify-between items-end">
              <div>
                <span className="text-[8pt] font-mono tracking-widest text-amber-400 uppercase font-bold">
                  MANUAL DE IDENTIDAD EDITORIAL &bull; VOL. I
                </span>
                <h1 className="text-3xl font-bold font-serif tracking-tight text-white mt-1">
                  VANGUARD STUDIO
                </h1>
              </div>
              <div className="text-right text-[8pt] font-mono text-emerald-400">
                <div>EDICIÓN 2026</div>
                <div>LÍNEAS DE DISEÑO CERO-LÍMITES</div>
              </div>
            </header>

            {/* Photo Hero Spread */}
            <div className="my-4 relative overflow-hidden rounded-lg border border-emerald-700/50 shadow-2xl group">
              <img
                src="/assets/brand_identity.jpg"
                alt="Vanguard Brand Identity Mockup"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent p-4 flex items-end justify-between">
                <span className="text-white font-serif text-sm font-bold tracking-wide">
                  Sistema de Papelería & Embossing Dorado
                </span>
                <span className="text-amber-400 font-mono text-[8pt] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700">
                  300+ DPI VECTORIAL
                </span>
              </div>
            </div>

            {/* Color System Palette Swatches */}
            <div className="my-6">
              <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Palette className="w-4 h-4" />
                <span>01. Paleta Cromática Primaria</span>
              </div>
              <div className="grid grid-cols-4 gap-3 font-mono text-[8pt]">
                <div className="p-3 bg-[#022c22] border border-emerald-700/60 rounded text-emerald-200">
                  <div className="w-full h-8 rounded bg-[#022c22] border border-emerald-600 mb-2" />
                  <div className="font-bold text-white">Deep Emerald</div>
                  <div className="text-[7pt] text-emerald-400">#022C22 &bull; HSL(165, 91%, 9%)</div>
                </div>

                <div className="p-3 bg-[#d97706] border border-amber-500/60 rounded text-amber-950">
                  <div className="w-full h-8 rounded bg-[#d97706] mb-2" />
                  <div className="font-bold text-slate-950">Imperial Gold</div>
                  <div className="text-[7pt] text-amber-950/80">#D97706 &bull; HSL(38, 92%, 44%)</div>
                </div>

                <div className="p-3 bg-[#0f172a] border border-slate-700/60 rounded text-slate-300">
                  <div className="w-full h-8 rounded bg-[#0f172a] mb-2" />
                  <div className="font-bold text-white">Obsidian Dark</div>
                  <div className="text-[7pt] text-slate-400">#0F172A &bull; HSL(222, 47%, 11%)</div>
                </div>

                <div className="p-3 bg-[#f8fafc] border border-slate-300 rounded text-slate-900">
                  <div className="w-full h-8 rounded bg-[#f8fafc] border border-slate-300 mb-2" />
                  <div className="font-bold text-slate-950">Pure Paper</div>
                  <div className="text-[7pt] text-slate-600">#F8FAFC &bull; HSL(210, 40%, 98%)</div>
                </div>
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="my-6 p-4 bg-emerald-900/30 border border-emerald-700/40 rounded-lg">
              <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Type className="w-4 h-4" />
                <span>02. Sistema Tipográfico Editorial</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-serif">
                <div>
                  <span className="text-[8pt] font-mono text-emerald-400 uppercase block mb-0.5">Tipografía Titulares (Serif)</span>
                  <div className="text-xl font-serif font-bold text-white">Latin Modern Roman</div>
                  <p className="text-[8pt] text-emerald-300 font-sans mt-1">Elegancia clásica y ligaduras OpenType completas.</p>
                </div>
                <div>
                  <span className="text-[8pt] font-mono text-emerald-400 uppercase block mb-0.5">Tipografía Cuerpo (Sans)</span>
                  <div className="text-xl font-sans font-bold text-white">Inter Display</div>
                  <p className="text-[8pt] text-emerald-300 font-sans mt-1">Lectura fluida y contraste geométrico impecable.</p>
                </div>
              </div>
            </div>

            {/* Quality Commitment Footer */}
            <footer className="border-t border-emerald-800/80 pt-3 text-[7.5pt] font-mono text-emerald-400 flex justify-between items-center">
              <span>PROPIEDAD EXCLUSIVA &bull; VANGUARD STUDIO</span>
              <span className="flex items-center gap-1 text-amber-300 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                CALIDAD AGENCIA ALTO NIVEL
              </span>
            </footer>
          </ScaleToFit>
        </Frame>
      </Sheet>
    </div>
  );
};
