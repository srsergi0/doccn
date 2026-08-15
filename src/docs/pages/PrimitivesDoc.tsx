import React from 'react';
import { DocSection } from '../DocSection';
import { Sheet, Frame, Flow, Fold, Panel, Pin, ScaleToFit } from '../../components/document/primitives/geometric-primitives';
import { Watermark } from '../../components/document/blocks/universal-helpers';

export const PrimitivesDoc: React.FC<{ filterId?: string }> = ({ filterId }) => {
  const showAll = !filterId || filterId === 'all';

  return (
    <div className="max-w-4xl text-slate-100 font-sans leading-relaxed">
      {/* Header */}
      <div className="mb-8 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-white tracking-tight font-serif">
          Las 5 Primitivas Geométricas Universales
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Abstracciones geométricas sin opinión estética que resuelven cualquier maquetación física en la web.
        </p>
      </div>

      {/* 1. Sheet */}
      {(showAll || filterId === 'sheet') && (
        <DocSection
          id="sheet"
          title="1. <Sheet /> — El Lienzo Físico Universal"
          description="Contenedor universal que acepta dimensiones estándar (A4, Letter, A5, 90x50mm), proporciones (16/9, 4/3), sangrado (bleed) y marcas de corte para imprenta."
          cliCommand="sheet"
          code={`import { Sheet } from '@/components/document/primitives/geometric-primitives';

export function EjemploSheet() {
  return (
    <Sheet size="A4" orientation="portrait" cropMarks bleed="3mm" className="p-8">
      <h1 className="text-2xl font-bold text-slate-900">Documento A4 en Imprenta</h1>
      <p className="text-sm text-slate-600 mt-2">Con marcas de corte vectoriales en las 4 esquinas.</p>
    </Sheet>
  );
}`}
        >
          <div className="scale-75 origin-top">
            <Sheet size="A5" cropMarks className="p-6 text-slate-900">
              <span className="text-xs font-mono bg-slate-100 border border-slate-300 px-2 py-0.5 rounded text-slate-700">
                Sheet size="A5" cropMarks
              </span>
              <h3 className="text-lg font-bold font-serif text-slate-900 mt-4">Plano Físico Universal</h3>
              <p className="text-xs text-slate-600 mt-2">Acepta sangrado para guillotina y dimensiones personalizadas.</p>
            </Sheet>
          </div>
        </DocSection>
      )}

      {/* 2. Frame */}
      {(showAll || filterId === 'frame') && (
        <DocSection
          id="frame"
          title="2. <Frame /> — Viewport Rígido de 1 Hoja"
          description="Marco estricto sin salto de página. Se comporta exactamente como un frame de Figma con Flexbox/Grid libre (para diapositivas, afiches y diplomas)."
          cliCommand="frame"
          code={`import { Sheet, Frame } from '@/components/document/primitives/geometric-primitives';

export function EjemploFrame() {
  return (
    <Sheet aspect="16/9">
      <Frame className="bg-slate-950 text-white p-8 flex flex-col justify-between">
        <h1 className="text-xl font-bold">Diapositiva Beamer 16:9</h1>
        <p className="text-slate-400 text-xs">Sin desbordamientos ni saltos de página accidentales.</p>
      </Frame>
    </Sheet>
  );
}`}
        >
          <div className="w-full max-w-[500px]">
            <Sheet aspect="16/9">
              <Frame className="bg-gradient-to-br from-indigo-950 to-slate-950 text-white p-6 justify-between">
                <div>
                  <span className="text-[9pt] font-mono text-indigo-400 font-bold">DIAPOSITIVA BEAMER</span>
                  <h3 className="text-base font-bold font-serif mt-1">Marco Rígido de 1 Hoja</h3>
                </div>
                <div className="text-xs text-slate-400">Flexbox & Grid libre sin desbordamientos.</div>
              </Frame>
            </Sheet>
          </div>
        </DocSection>
      )}

      {/* 3. Flow */}
      {(showAll || filterId === 'flow') && (
        <DocSection
          id="flow"
          title="3. <Flow /> — Río de Paginación Virtual"
          description="Contenedor de flujo continuo donde el texto, tablas e imágenes fluyen verticalmente y el motor calcula cortes automáticos en tiempo real."
          cliCommand="flow"
          code={`import { Sheet, Flow } from '@/components/document/primitives/geometric-primitives';

export function EjemploFlow() {
  return (
    <Sheet size="A4">
      <Flow className="p-8">
        <p className="text-sm text-slate-800 leading-relaxed">El contenido fluye verticalmente de forma fluida...</p>
      </Flow>
    </Sheet>
  );
}`}
        >
          <div className="w-full max-w-[450px]">
            <Sheet size="A5" className="p-6">
              <Flow className="space-y-2 text-slate-900">
                <span className="text-[10px] font-mono text-indigo-700 font-bold uppercase">Modo Flow</span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Paginación fluida con ResizeObserver. Cuando el contenido colisiona con el límite inferior, se calcula el corte atómico.
                </p>
              </Flow>
            </Sheet>
          </div>
        </DocSection>
      )}

      {/* 4. Fold */}
      {(showAll || filterId === 'fold') && (
        <DocSection
          id="fold"
          title="4. <Fold /> — Pliegues Mecánicos para Folletos"
          description="Divide una hoja física en 2, 3 o 4 cuerpos plegables independientes con guías de corte para dípticos y trípticos."
          cliCommand="fold"
          code={`import { Sheet, Fold, Panel } from '@/components/document/primitives/geometric-primitives';

export function EjemploFold() {
  return (
    <Sheet size="A4" orientation="landscape">
      <Fold count={3} gap="4mm" guides>
        <Panel className="p-4 bg-slate-900 text-white">Panel 1</Panel>
        <Panel className="p-4 bg-slate-100 text-slate-900">Panel 2</Panel>
        <Panel className="p-4 bg-white text-slate-900">Panel 3</Panel>
      </Fold>
    </Sheet>
  );
}`}
        >
          <div className="w-full max-w-[600px] h-[200px]">
            <Sheet size="A5" orientation="landscape" className="p-4 h-full">
              <Fold count={3} gap="3mm" guides className="h-full">
                <Panel className="bg-slate-900 text-white p-3 rounded">
                  <span className="text-[9pt] font-mono text-indigo-400 font-bold">Panel 1</span>
                  <div className="text-[10px] text-slate-300 mt-1">Portada</div>
                </Panel>
                <Panel className="bg-slate-100 text-slate-900 p-3 rounded">
                  <span className="text-[9pt] font-mono text-slate-700 font-bold">Panel 2</span>
                  <div className="text-[10px] text-slate-600 mt-1">Centro</div>
                </Panel>
                <Panel className="bg-white border border-slate-200 text-slate-900 p-3 rounded">
                  <span className="text-[9pt] font-mono text-slate-700 font-bold">Panel 3</span>
                  <div className="text-[10px] text-slate-600 mt-1">Solapa</div>
                </Panel>
              </Fold>
            </Sheet>
          </div>
        </DocSection>
      )}

      {/* 5. Pin */}
      {(showAll || filterId === 'pin') && (
        <DocSection
          id="pin"
          title="5. <Pin /> — Anclaje Espacial Absoluto"
          description="Permite anclar elementos en relación con la hoja física ignorando el flujo del texto (marcas de agua, sellos notariales, membretes o marcas de seguridad)."
          cliCommand="pin"
          code={`import { Sheet, Pin } from '@/components/document/primitives/geometric-primitives';

export function EjemploPin() {
  return (
    <Sheet size="A4" className="relative p-8">
      <Pin edge="top-right" offset="10mm">
        <div className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded">Sello Notarial</div>
      </Pin>
    </Sheet>
  );
}`}
        >
          <div className="w-full max-w-[450px]">
            <Sheet size="A5" className="p-6 relative">
              <Pin edge="top-right" offset="6mm">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-300">
                  Pin top-right
                </span>
              </Pin>
              <Pin edge="bottom-left" offset="6mm">
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-mono px-2 py-0.5 rounded border border-indigo-300">
                  Pin bottom-left
                </span>
              </Pin>
              <h3 className="text-base font-bold font-serif text-slate-900 mt-6">Anclajes Espaciales</h3>
              <p className="text-xs text-slate-600 mt-1">Posicionamiento independiente del texto.</p>
            </Sheet>
          </div>
        </DocSection>
      )}

      {/* 6. ScaleToFit */}
      {(showAll || filterId === 'scaletofit') && (
        <DocSection
          id="scaletofit"
          title="6. <ScaleToFit /> — Smart Auto-Fitter de 1 Hoja"
          description="Mide el contenido y calcula un factor de escala vectorial dinámico para garantizar que cotizaciones, facturas y certificados encajen en 1 sola página sin desbordamientos."
          cliCommand="scaletofit"
          code={`import { Sheet, Frame, ScaleToFit } from '@/components/document/primitives/geometric-primitives';

export function EjemploScaleToFit() {
  return (
    <Sheet size="A4">
      <Frame className="p-8">
        <ScaleToFit minScale={0.8} maxScale={1.0}>
          {/* Contenido extenso que se auto-ajusta si desborda */}
        </ScaleToFit>
      </Frame>
    </Sheet>
  );
}`}
        >
          <div className="w-full max-w-[450px]">
            <Sheet size="A5" className="p-6 relative">
              <Watermark text="1-PÁGINA" opacity={0.05} />
              <Frame className="h-full">
                <ScaleToFit minScale={0.8}>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded text-slate-900">
                    <span className="text-[10px] font-mono text-indigo-700 font-bold uppercase">ScaleToFit</span>
                    <p className="text-xs text-slate-600 mt-1">Garantiza 0 páginas huérfanas en proformas y cotizaciones.</p>
                  </div>
                </ScaleToFit>
              </Frame>
            </Sheet>
          </div>
        </DocSection>
      )}
    </div>
  );
};
