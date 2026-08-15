import React from 'react';
import { Sheet, Frame } from '../components/document/primitives/geometric-primitives';

export const BeamerSlidesTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet aspect="16/9">
        <Frame className="bg-slate-950 text-white p-8 justify-between">
          <h1 className="text-xl font-bold font-serif">Beamer Presentation Slide</h1>
          <p className="text-xs text-slate-400">Pure HTML5 + Tailwind CSS frame slide layout.</p>
        </Frame>
      </Sheet>
    </div>
  );
};
