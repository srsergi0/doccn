import React from 'react';
import { cn } from '@/lib/utils';
import {
  Rocket,
  Box,
  Layers,
  FileCheck,
  Flame,
  Dumbbell,
  BookOpen,
  Award,
  Terminal,
  FolderKanban,
  Crown,
  Compass,
  Briefcase,
  Presentation,
  Receipt
} from 'lucide-react';

export type NavItem =
  | 'getting-started'
  | 'sheet'
  | 'frame'
  | 'flow'
  | 'fold'
  | 'pin'
  | 'scaletofit'
  | 'helpers'
  | 'template-nips-paper'
  | 'template-agency-vanguard'
  | 'template-agency-architectural'
  | 'template-annual-report-blue'
  | 'template-arianna-red'
  | 'template-fitasu-blue'
  | 'template-qiji-trifold'
  | 'template-academic'
  | 'template-business'
  | 'template-slides'
  | 'template-trifold'
  | 'template-invoice'
  | 'template-certificate'
  | 'cli';

interface DocsNavProps {
  activeItem: NavItem;
  onSelect: (item: NavItem) => void;
}

export const DocsNav: React.FC<DocsNavProps> = ({ activeItem, onSelect }) => {
  return (
    <aside className="w-64 shrink-0 no-print border-r border-slate-800 bg-slate-950/80 p-4 flex flex-col gap-6 h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto">
      {/* 1. Introducción */}
      <div>
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 px-2 flex items-center gap-1.5">
          <Rocket className="w-3.5 h-3.5 text-indigo-400" />
          <span>Primeros Pasos</span>
        </div>
        <button
          onClick={() => onSelect('getting-started')}
          className={cn(
            'w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between',
            activeItem === 'getting-started'
              ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          )}
        >
          <span>Introducción & Arquitectura</span>
        </button>
      </div>

      {/* 2. Primitivas Geométricas */}
      <div>
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 px-2 flex items-center gap-1.5">
          <Box className="w-3.5 h-3.5 text-emerald-400" />
          <span>Primitivas Geométricas</span>
        </div>
        <nav className="space-y-0.5">
          {[
            { id: 'sheet', label: '<Sheet />' },
            { id: 'frame', label: '<Frame />' },
            { id: 'flow', label: '<Flow />' },
            { id: 'fold', label: '<Fold />' },
            { id: 'pin', label: '<Pin />' },
            { id: 'scaletofit', label: '<ScaleToFit />' },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => onSelect(p.id as NavItem)}
              className={cn(
                'w-full text-left px-3 py-1.5 rounded-md text-xs font-mono transition-colors flex items-center justify-between',
                activeItem === p.id
                  ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              )}
            >
              <span>{p.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* 3. Ayudantes Headless */}
      <div>
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-2 px-2 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>Ayudantes Headless</span>
        </div>
        <button
          onClick={() => onSelect('helpers')}
          className={cn(
            'w-full text-left px-3 py-1.5 rounded-md text-xs font-mono transition-colors flex items-center justify-between',
            activeItem === 'helpers'
              ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          )}
        >
          <span>&lt;Watermark /&gt;</span>
        </button>
      </div>

      {/* 🔥 TODAS LAS PLANTILLAS (Unified at Bottom) */}
      <div className="border-t border-slate-800 pt-4">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 px-2 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Plantillas (13 Ejemplos)</span>
        </div>
        <nav className="space-y-0.5">
          {[
            { id: 'template-nips-paper', label: 'Paper NIPS (Attention Is All You Need)', icon: BookOpen, color: 'text-indigo-400' },
            { id: 'template-agency-vanguard', label: 'Vanguard Studio Brand Book', icon: Crown, color: 'text-amber-400' },
            { id: 'template-agency-architectural', label: 'Atelier Luxe Dossier', icon: Compass, color: 'text-amber-400' },
            { id: 'template-annual-report-blue', label: '2032 Annual Report (Blue Swoosh)', icon: FileCheck, color: 'text-blue-400' },
            { id: 'template-arianna-red', label: 'Arianna Profile (Red/Black)', icon: Flame, color: 'text-red-500' },
            { id: 'template-fitasu-blue', label: 'FITASU Sport Brandbook', icon: Dumbbell, color: 'text-blue-400' },
            { id: 'template-qiji-trifold', label: 'Qiji Art Minimalist Trifold', icon: FolderKanban, color: 'text-emerald-400' },
            { id: 'template-academic', label: 'Paper Académico IEEE (2 Col)', icon: BookOpen, color: 'text-slate-400' },
            { id: 'template-business', label: 'Reporte Ejecutivo Business', icon: Briefcase, color: 'text-slate-400' },
            { id: 'template-slides', label: 'Diapositivas Beamer (16:9)', icon: Presentation, color: 'text-slate-400' },
            { id: 'template-trifold', label: 'Tríptico / Brochure A4', icon: FolderKanban, color: 'text-slate-400' },
            { id: 'template-invoice', label: 'Proforma / Cotización 1-Pág', icon: Receipt, color: 'text-slate-400' },
            { id: 'template-certificate', label: 'Diploma / Carátula Notarial', icon: Award, color: 'text-slate-400' },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => onSelect(t.id as NavItem)}
                className={cn(
                  'w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-2',
                  activeItem === t.id
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                )}
              >
                <Icon className={cn('w-3.5 h-3.5 shrink-0', t.color)} />
                <span className="truncate">{t.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* CLI */}
      <div className="pt-2 border-t border-slate-800">
        <button
          onClick={() => onSelect('cli')}
          className={cn(
            'w-full text-left px-3 py-1.5 rounded-md text-xs font-mono transition-colors flex items-center gap-2',
            activeItem === 'cli'
              ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
          )}
        >
          <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span>CLI doccn</span>
        </button>
      </div>
    </aside>
  );
};
