import React from 'react';
import { Sheet, Frame, Flow } from '../components/document/primitives/geometric-primitives';

export const AcademicPaperTemplate: React.FC<{ columns?: 1 | 2 }> = ({ columns = 2 }) => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" orientation="portrait" cropMarks className="p-10 relative bg-white text-slate-900 shadow-2xl">
        <Frame className="h-full">
          <Flow className="space-y-4">
            <h1 className="text-xl font-bold font-serif text-center">Academic Paper Template</h1>
            <div className={columns === 2 ? 'grid grid-cols-2 gap-4 text-xs font-serif' : 'text-xs font-serif'}>
              <p>Standard academic research paper layout with pure HTML5 markup.</p>
            </div>
          </Flow>
        </Frame>
      </Sheet>
    </div>
  );
};
