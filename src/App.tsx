import React, { useState } from 'react';
import { DocsNav, type NavItem } from './docs/DocsNav';
import { GettingStartedDoc } from './docs/pages/GettingStartedDoc';
import { PrimitivesDoc } from './docs/pages/PrimitivesDoc';
import { HelpersDoc } from './docs/pages/HelpersDoc';
import { CliDoc } from './docs/pages/CliDoc';

import { AttentionIsAllYouNeedTemplate } from './templates/AttentionIsAllYouNeed';
import { VanguardBrandBookTemplate } from './templates/agency/VanguardBrandBook';
import { ArchitecturalDossierTemplate } from './templates/agency/ArchitecturalDossier';
import { AnnualReportBlueTemplate } from './templates/AnnualReportBlue';
import { AriannaCorporateRedTemplate } from './templates/AriannaCorporateRed';
import { FitasuBrandbookTemplate } from './templates/FitasuBrandbook';
import { QijiArtTrifoldTemplate } from './templates/QijiArtTrifold';
import { AcademicPaperTemplate } from './templates/AcademicPaper';
import { BusinessReportTemplate } from './templates/BusinessReport';
import { BeamerSlidesTemplate } from './templates/BeamerSlides';
import { TriFoldBrochureTemplate } from './templates/TriFoldBrochure';
import { SinglePageInvoiceTemplate } from './templates/SinglePageInvoice';
import { CertificateCoverTemplate } from './templates/CertificateCover';

import {
  FileText,
  Printer,
  Terminal,
  Check,
  Copy,
  BookOpen
} from 'lucide-react';

export function App() {
  const [activeNav, setActiveNav] = useState<NavItem>('template-nips-paper');
  const [columns, setColumns] = useState<1 | 2>(2);
  const [copiedCli, setCopiedCli] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyCli = () => {
    navigator.clipboard.writeText('bun add @srsergio/doccn@1.0.0');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="no-print sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 shadow-md">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg font-mono tracking-tight text-white">
                doccn<span className="text-amber-400">/ui</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono border border-amber-500/30">
                @srsergio/doccn@1.0.0
              </span>
            </div>
          </div>
        </div>

        {/* CLI Quick Action Badge & Print */}
        <div className="flex items-center gap-3">
          <button
            onClick={copyCli}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>bun add @srsergio/doccn@1.0.0</span>
            {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-amber-500 via-indigo-600 to-blue-600 hover:from-amber-600 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-amber-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Printer className="w-4 h-4" />
            <span>Exportar PDF / Imprimir</span>
          </button>
        </div>
      </header>

      {/* Portal Layout: Sidebar + Main Workspace */}
      <div className="flex flex-1">
        {/* Left Sidebar Navigation */}
        <DocsNav activeItem={activeNav} onSelect={(item) => setActiveNav(item)} />

        {/* Main Content Workspace */}
        <main className="flex-1 bg-slate-900/40 p-6 md:p-10 overflow-y-auto min-h-[calc(100vh-57px)]">
          {/* 1. Getting Started */}
          {activeNav === 'getting-started' && <GettingStartedDoc />}

          {/* 2. ALL TEMPLATES (13 TOTAL) */}
          {activeNav === 'template-nips-paper' && <AttentionIsAllYouNeedTemplate />}
          {activeNav === 'template-agency-vanguard' && <VanguardBrandBookTemplate />}
          {activeNav === 'template-agency-architectural' && <ArchitecturalDossierTemplate />}
          {activeNav === 'template-annual-report-blue' && <AnnualReportBlueTemplate />}
          {activeNav === 'template-arianna-red' && <AriannaCorporateRedTemplate />}
          {activeNav === 'template-fitasu-blue' && <FitasuBrandbookTemplate />}
          {activeNav === 'template-qiji-trifold' && <QijiArtTrifoldTemplate />}

          {activeNav === 'template-academic' && (
            <div>
              <div className="no-print mb-4 flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                  <BookOpen className="w-4 h-4" />
                  <span>Plantilla: Paper Académico IEEE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">Columnas:</span>
                  <button
                    onClick={() => setColumns(1)}
                    className={`px-2.5 py-1 rounded text-xs font-mono ${columns === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    1 Columna
                  </button>
                  <button
                    onClick={() => setColumns(2)}
                    className={`px-2.5 py-1 rounded text-xs font-mono ${columns === 2 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    2 Columnas
                  </button>
                </div>
              </div>
              <AcademicPaperTemplate columns={columns} />
            </div>
          )}

          {activeNav === 'template-business' && <BusinessReportTemplate />}
          {activeNav === 'template-slides' && <BeamerSlidesTemplate />}
          {activeNav === 'template-trifold' && <TriFoldBrochureTemplate />}
          {activeNav === 'template-invoice' && <SinglePageInvoiceTemplate />}
          {activeNav === 'template-certificate' && <CertificateCoverTemplate />}

          {/* 3. Geometric Primitives */}
          {['sheet', 'frame', 'flow', 'fold', 'pin', 'scaletofit'].includes(activeNav) && (
            <PrimitivesDoc filterId={activeNav} />
          )}

          {/* 4. Helpers */}
          {activeNav === 'helpers' && <HelpersDoc />}

          {/* 5. CLI */}
          {activeNav === 'cli' && <CliDoc />}
        </main>
      </div>
    </div>
  );
}

export default App;
