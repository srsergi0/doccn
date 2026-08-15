import React from 'react';
import { Sheet, Frame, Flow } from '../components/document/primitives/geometric-primitives';

export const BusinessReportTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4" className="p-10 bg-white text-slate-900 shadow-2xl">
        <Frame className="h-full">
          <Flow className="space-y-4">
            <h1 className="text-xl font-bold font-serif">Business Report Template</h1>
          </Flow>
        </Frame>
      </Sheet>
    </div>
  );
};
