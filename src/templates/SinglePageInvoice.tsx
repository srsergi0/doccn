import React from 'react';
import { Sheet, Frame, ScaleToFit } from '../components/document/primitives/geometric-primitives';

export const SinglePageInvoiceTemplate: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <Sheet size="A4">
        <Frame className="p-8">
          <ScaleToFit minScale={0.85}>
            <h1 className="text-xl font-bold font-serif text-slate-900">Single Page Invoice</h1>
          </ScaleToFit>
        </Frame>
      </Sheet>
    </div>
  );
};
