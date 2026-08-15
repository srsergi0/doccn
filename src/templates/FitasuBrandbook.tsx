import React from 'react';
import { Sheet, Frame, Flow } from '../components/document/primitives/geometric-primitives';
import { Dumbbell, Activity, ShieldCheck, Zap, Layers, Users } from 'lucide-react';

export const FitasuBrandbookTemplate: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-6">
      {/* COVER PAGE */}
      <Sheet size="A4" orientation="portrait" className="p-0 relative overflow-hidden bg-blue-600 text-white shadow-2xl">
        <div className="p-8 flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-6 h-6 text-white" />
            <span className="font-bold text-lg font-sans tracking-tight">FITASU</span>
          </div>
          <span className="text-[8pt] font-mono text-blue-200 uppercase tracking-widest">Brandbook Design</span>
        </div>

        <div className="p-8 pt-4">
          <h1 className="text-4xl font-bold font-sans tracking-tight leading-none text-white">
            BRANDBOOK<br />DESIGN
          </h1>
          <p className="mt-4 text-xs font-mono text-blue-100 uppercase tracking-wider">
            SPORT CONCEPT &bull; FRESH DESIGN
          </p>
        </div>

        {/* Bottom Curved Blue Graphic & Photo */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-white rounded-t-[60px] p-8 text-slate-900 overflow-hidden">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
              alt="Gym Fitness Athlete"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-sans text-xs font-bold shadow-lg">
              Building Health & Performance
            </div>
          </div>
        </div>
      </Sheet>

      {/* SPREAD 1: BRAND VISION & TYPOGRAPHY */}
      <Sheet size="A4" orientation="portrait" className="p-10 relative bg-white shadow-2xl text-slate-900">
        <Frame className="h-full">
          <Flow className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <Dumbbell className="w-5 h-5 text-blue-600" />
                <span>FITASU BRANDBOOK &bull; GUIDELINES</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Página 02</span>
            </div>

            {/* Typography Aa Specimen (Matching Image 1) */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl my-4">
              <span className="text-[8.5pt] font-mono text-blue-600 font-bold uppercase tracking-wider block mb-2">Typography Specimen</span>
              <div className="flex items-baseline gap-6">
                <div className="text-6xl font-bold font-sans text-blue-600">Aa</div>
                <div className="text-6xl font-bold font-sans text-slate-900">Aa</div>
                <div className="space-y-1 text-xs text-slate-600 font-sans">
                  <div><strong>Heading:</strong> Inter Display (Bold)</div>
                  <div><strong>Body:</strong> Roboto (Regular)</div>
                </div>
              </div>
            </div>

            {/* Target Audience & Superiority */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2 font-sans">
                  <Users className="w-4 h-4 text-blue-600" />
                  Target Audience
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  Young energetic athletes and fitness enthusiasts seeking top-tier athletic guidance and brand connection.
                </p>
              </div>

              <div className="p-5 bg-slate-900 text-white border border-slate-800 rounded-xl">
                <h3 className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2 font-sans">
                  <Zap className="w-4 h-4 text-blue-400" />
                  Brand Superiority
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  High quality design, dynamic athletic aesthetic, and uncompromised performance commitment.
                </p>
              </div>
            </div>
          </Flow>
        </Frame>
      </Sheet>
    </div>
  );
};
