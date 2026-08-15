---
name: doccn
description: >-
  Expert guide and toolset for building print-ready documents, PDFs, academic papers,
  multi-page reports, slide decks, invoices, certificates, and folded brochures in React
  and Tailwind CSS using the @srsergio/doccn universal geometric primitives.
---

# doccn — Universal Geometric Document System Skill

Use this skill whenever the user asks to create, style, format, paginate, or export documents, PDFs, invoices, scientific papers, slide decks, trifolds, or certificates in React and Tailwind CSS.

---

## 1. Quick Installation for User Projects

```bash
bun add @srsergio/doccn
# or
npm install @srsergio/doccn
```

---

## 2. Core Architectural Principles

When writing document code with `doccn`, follow these golden rules:

1. **Zero Rigid Blocks**: Never wrap content in rigid opinionated blocks (e.g. `<Theorem>`, `<InvoiceItem>`). Use standard HTML5 (`<header>`, `<main>`, `<table>`, `<p>`) and style them directly with Tailwind CSS.
2. **Use the 5 Universal Geometric Primitives**:
   - `<Sheet>`: The physical canvas (`A4`, `Letter`, `A5`, `cropMarks`, `bleed`).
   - `<Frame>`: Rigid 1-sheet viewport without page overflow (slides, covers, posters).
   - `<Flow>`: Continuous pagination stream for multi-page documents.
   - `<Fold>`: 2, 3, or 4-panel mechanical folding brochure (`<Fold count={3}> <Panel>...</Panel> </Fold>`).
   - `<Pin>`: Spatial edge anchoring for stamps, badges, or headers (`edge="top-right"`).
   - `<ScaleToFit>`: Smart single-page auto-fitter (`transform: scale(...)`) ensuring zero orphan 2nd pages.
3. **Headless Helpers**:
   - `<Watermark text="DRAFT" opacity={0.04} />`: Diagonal background security watermark.

---

## 3. Implementation Recipes

### A. 1-Page Quotation / Invoice with Zero Overflow
```tsx
import { Sheet, Frame, ScaleToFit, Watermark, Pin } from '@srsergio/doccn';

export function Invoice() {
  return (
    <Sheet size="A4" cropMarks className="p-10 bg-white text-slate-900 shadow-xl">
      <Watermark text="COTIZACIÓN" opacity={0.04} />
      <Pin edge="top-right" offset="10mm">
        <span className="bg-emerald-100 text-emerald-800 text-xs font-mono px-3 py-1 rounded">
          APROBADO
        </span>
      </Pin>
      <Frame className="h-full">
        <ScaleToFit minScale={0.85}>
          <h1 className="text-2xl font-bold font-serif">Proforma de Servicios #2026</h1>
          {/* Pure HTML5 Table + Tailwind CSS */}
          <table className="w-full mt-4 text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-900">
                <th className="text-left py-2">Concepto</th>
                <th className="text-right py-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2">Desarrollo de Software</td>
                <td className="text-right py-2">$3,500.00</td>
              </tr>
            </tbody>
          </table>
        </ScaleToFit>
      </Frame>
    </Sheet>
  );
}
```

### B. Tri-Fold Brochure (3 Panels)
```tsx
import { Sheet, Fold, Panel } from '@srsergio/doccn';

export function TriFoldBrochure() {
  return (
    <Sheet size="A4" orientation="landscape" cropMarks className="p-6">
      <Fold count={3} gap="4mm" guides>
        <Panel className="p-6 bg-slate-900 text-white rounded">
          <h2 className="text-lg font-bold">Portada Exterior</h2>
        </Panel>
        <Panel className="p-6 bg-slate-100 text-slate-900 rounded">
          <h2 className="text-lg font-bold">Cuerpo Central</h2>
        </Panel>
        <Panel className="p-6 bg-white text-slate-900 rounded border border-slate-200">
          <h2 className="text-lg font-bold">Solapa Interior</h2>
        </Panel>
      </Fold>
    </Sheet>
  );
}
```

### C. NIPS/NeurIPS Academic Research Paper
```tsx
import { Sheet, Frame, Flow } from '@srsergio/doccn';

export function NipsPaper() {
  return (
    <Sheet size="A4" className="p-12 bg-white text-neutral-900 font-serif">
      <Frame className="h-full">
        <Flow className="space-y-4">
          <div className="border-t-4 border-black pt-4">
            <h1 className="text-2xl font-bold text-center">Paper Title</h1>
            <div className="border-b border-black mb-6" />
          </div>
          <p className="text-justify text-sm">
            Content with citations <span className="text-emerald-700 border border-emerald-600 px-1 text-xs">[1]</span>.
          </p>
        </Flow>
      </Frame>
    </Sheet>
  );
}
```
