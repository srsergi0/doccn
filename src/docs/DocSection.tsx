import React, { useState } from 'react';
import { Check, Copy, Eye, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocSectionProps {
  id: string;
  title: string;
  description: string;
  cliCommand?: string;
  code: string;
  children: React.ReactNode;
}

export const DocSection: React.FC<DocSectionProps> = ({
  id,
  title,
  description,
  cliCommand,
  code,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={id} className="mb-14 scroll-mt-20">
      <div className="mb-4">
        <h2 className="text-2xl font-bold font-sans text-white tracking-tight flex items-center justify-between">
          <span>{title}</span>
          {cliCommand && (
            <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-indigo-300 px-3 py-1 rounded-full font-normal">
              bun run doccn add {cliCommand}
            </span>
          )}
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 rounded-t-lg px-4 py-2">
        <div className="flex bg-slate-950 p-1 rounded-md border border-slate-800/80">
          <button
            onClick={() => setActiveTab('preview')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition-all',
              activeTab === 'preview'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Previsualización</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition-all',
              activeTab === 'code'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Código</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded border border-slate-700 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar código</span>
            </>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="border border-t-0 border-slate-800 rounded-b-lg bg-slate-950 overflow-hidden">
        {activeTab === 'preview' ? (
          <div className="p-6 overflow-x-auto bg-slate-900/30 flex justify-center items-center">
            {children}
          </div>
        ) : (
          <div className="p-4 bg-slate-950 font-mono text-xs overflow-x-auto text-slate-200">
            <pre className="whitespace-pre">{code}</pre>
          </div>
        )}
      </div>
    </section>
  );
};
