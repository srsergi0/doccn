import React from 'react';
import { Sheet, Fold, Panel, Pin } from '../components/document/primitives/geometric-primitives';

export const QijiArtTrifoldTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="landscape" cropMarks className="p-6 bg-stone-100 text-neutral-900 shadow-2xl">
        <Fold count={3} gap="6mm" guides>
          {/* Panel 1: Cover / Front */}
          <Panel className="bg-white border border-neutral-300 p-6 rounded-lg flex flex-col justify-between relative overflow-hidden">
            <Pin edge="top-right" offset="6mm">
              <span className="text-[7pt] font-mono tracking-widest text-neutral-500 uppercase">QIJI ART 2024</span>
            </Pin>

            {/* B&W Dancer Photo */}
            <div className="w-full h-52 overflow-hidden rounded my-4 border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80"
                alt="Ballet Dancer Art"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold font-serif leading-tight text-neutral-950">
                Qiji Art Training Center
              </h1>
              <p className="text-[8pt] font-sans text-neutral-600 mt-1">
                Classical & Modern Dance Performance Academy
              </p>
            </div>
          </Panel>

          {/* Panel 2: Interior Courses & 01 / 02 / 03 Sections */}
          <Panel className="bg-neutral-900 text-white p-6 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 mb-3">
                <span className="text-xs font-mono font-bold text-neutral-400">FEATURED COURSES</span>
                <span className="text-2xl font-bold font-mono text-white">04</span>
              </div>
              <ul className="space-y-2 text-[8pt] font-serif text-neutral-300">
                <li className="flex justify-between"><span>Classical Ballet Technique</span><span className="font-mono text-neutral-500">PBT</span></li>
                <li className="flex justify-between"><span>Modern Contemporary Dance</span><span className="font-mono text-neutral-500">Stage</span></li>
                <li className="flex justify-between"><span>Children's Dream Dance</span><span className="font-mono text-neutral-500">Youth</span></li>
              </ul>
            </div>

            <div className="border-t border-neutral-800 pt-3 flex justify-between items-baseline">
              <div>
                <span className="text-[8pt] font-mono text-neutral-400 block">TEACHER TEAM</span>
                <span className="text-xs font-serif italic text-neutral-200">Master Choreographers</span>
              </div>
              <span className="text-2xl font-bold font-mono text-white">05</span>
            </div>
          </Panel>

          {/* Panel 3: About Us 01 & 03 */}
          <Panel className="bg-white border border-neutral-300 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline border-b border-neutral-300 pb-2 mb-3">
                <span className="text-xs font-mono font-bold text-neutral-900">ABOUT US</span>
                <span className="text-2xl font-bold font-mono text-neutral-950">01</span>
              </div>
              <p className="text-[8.5pt] font-serif text-neutral-700 leading-relaxed text-justify">
                Dance is not merely movement; it is an expression of life, passion, and artistic discipline. Our academy nurtures grace, strength, and confidence.
              </p>
            </div>

            <div className="border-t border-neutral-300 pt-3">
              <span className="text-2xl font-bold font-mono text-neutral-950 block text-right">03</span>
              <p className="text-[7.5pt] font-sans text-neutral-500 text-center mt-1">
                Qiji Art &bull; Swiss Minimalist Editorial Trifold
              </p>
            </div>
          </Panel>
        </Fold>
      </Sheet>
    </div>
  );
};
