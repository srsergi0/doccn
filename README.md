# doccn/ui

> **Universal Geometric Document System & Virtual Pagination Engine for React, Tailwind CSS and CSS Paged Media.**

Inspired by the philosophy of **shadcn/ui**, **doccn** provides **5 Universal Geometric Primitives** with zero aesthetic opinion. Instead of imposing rigid, opinionated templates (`<Invoice>`, `<Brochure>`), `doccn` exposes pure spatial layout abstractions so you can construct any physical or web document using standard HTML5 tags and Tailwind CSS classes.

---

## ⚡ Quick Start

### Installation

```bash
bun add doccn
# or
npm install doccn
# or
pnpm add doccn
```

---

## 📐 The 5 Universal Geometric Primitives

| Primitive | Description | Typical Use Cases |
| :--- | :--- | :--- |
| `<Sheet />` | Universal physical paper canvas (`A4`, `Letter`, `A5`, `90x50mm`), custom aspect ratios, crop marks, and bleed. | Base paper sheet canvas |
| `<Frame />` | Rigid single-page viewport with zero overflow or page jumps. | Slides, posters, diplomas |
| `<Flow />` | Non-destructive virtual pagination container with real-time atomic height slicing. | Multi-page reports, articles |
| `<Fold />` | Mechanical bi-fold and tri-fold panels with fold guide lines. | Brochures, pamphlets, flyers |
| `<Pin />` | Absolute spatial anchoring independent of text flow. | Watermarks, stamps, headers |
| `<ScaleToFit />` | Smart single-page auto-fitter (`transform: scale`) guaranteeing zero orphan 2nd pages. | Invoices, quotes, single-page dossiers |

---

## 🚀 Usage Example

```tsx
import { Sheet, Frame, ScaleToFit, Pin, Watermark } from 'doccn';

export function InvoiceDocument() {
  return (
    <Sheet size="A4" orientation="portrait" cropMarks className="p-10 bg-white text-slate-900">
      <Watermark text="OFFICIAL QUOTE" opacity={0.04} />
      
      <Pin edge="top-right" offset="10mm">
        <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded">
          APPROVED
        </span>
      </Pin>

      <Frame className="h-full">
        <ScaleToFit minScale={0.85}>
          <h1 className="text-3xl font-bold font-serif">Invoice #2026-001</h1>
          <p className="mt-2 text-slate-600">Pure HTML5 + Tailwind CSS layout.</p>
        </ScaleToFit>
      </Frame>
    </Sheet>
  );
}
```

---

## 📄 CLI Usage

Install primitives directly into your repository:

```bash
bun run doccn add sheet frame fold pin
```

---

## 📄 License

MIT © doccn
