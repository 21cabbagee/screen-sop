import React, { useState } from 'react';
import { FileText, Copy, Check, Download, Printer, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MarkdownExportDeck({ markdownContent, workflowTitle }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 } });
    } catch (e) {}
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMd = () => {
    const element = document.createElement("a");
    const file = new Blob([markdownContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${workflowTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-sop.md`;
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <section id="markdown-export" className="py-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 text-left">
          {/* Header & Export Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-sop-400" />
                <span>1-Click Markdown & Knowledge Base Export</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Zero lock-in documentation: Export directly to Notion, GitHub READMEs, or printable PDF
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sop-600 hover:bg-sop-500 text-white text-xs font-bold shadow-md shadow-sop-500/25 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy to Notion'}</span>
              </button>

              <button
                onClick={handleDownloadMd}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 border border-white/10 text-xs font-medium transition-all"
              >
                <Download className="w-3.5 h-3.5 text-sop-400" />
                <span>Download .md</span>
              </button>

              <button
                onClick={handlePrintPdf}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 border border-white/10 text-xs font-medium transition-all"
              >
                <Printer className="w-3.5 h-3.5 text-indigo-400" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* Markdown Content Viewer */}
          <div className="rounded-2xl bg-dark-950 p-6 border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap font-mono text-[11px] text-slate-300">
              {markdownContent}
            </pre>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Format: GitHub Flavored Markdown (GFM)</span>
            <span className="text-sop-400">Ready for Notion • Confluence • GitHub Wiki</span>
          </div>
        </div>
      </div>
    </section>
  );
}
