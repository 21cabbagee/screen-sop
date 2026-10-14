import React from 'react';
import { Video, Sparkles, ArrowRight, FileText, Zap, MousePointer, CheckCircle2, DollarSign } from 'lucide-react';
import ParticlesCanvas from './ParticlesCanvas';

export default function Hero({ onJumpToStudio, onJumpToMarkdown }) {
  return (
    <section className="relative pt-12 pb-8 overflow-hidden">
      <ParticlesCanvas color="168, 85, 247" />
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sop-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sop-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sop-400" />
          <span>Multimodal Screen Recorder to Markdown SOP Generator</span>
        </div>

        {/* Target Exact SEO H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Record Your Screen, Get An Instant SOP: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sop-400 via-indigo-300 to-purple-300">
            Automated Step-by-Step Documentation
          </span>
        </h1>

        {/* Value Proposition Body */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Stop recording 20-minute Loom videos that nobody watches or paying $49/seat/mo for locked proprietary documentation software. Press Record, execute your workflow once, and get back a structured, beautifully formatted Markdown SOP with annotated screenshots in <strong className="text-white">30 seconds</strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onJumpToStudio}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sop-600 to-indigo-600 hover:from-sop-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-sop-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Video className="w-4 h-4 animate-pulse" />
            <span>Launch Screen Recording Studio</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button
            onClick={onJumpToMarkdown}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-800/80 hover:bg-dark-750 text-slate-200 font-medium border border-white/10 hover:border-white/20 transition-all"
          >
            <FileText className="w-4 h-4 text-sop-400" />
            <span>View Generated Markdown & Export</span>
          </button>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-sop-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Synthesis Speed</span>
            </div>
            <div className="text-xl font-bold text-white">&lt;30 Seconds</div>
            <p className="text-[11px] text-slate-400">From click to markdown</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <FileText className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Format</span>
            </div>
            <div className="text-xl font-bold text-indigo-300">Clean Markdown</div>
            <p className="text-[11px] text-slate-400">Notion, GitHub & PDF ready</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">SaaS Seat Tax</span>
            </div>
            <div className="text-xl font-bold text-white">$0 Per-Seat</div>
            <p className="text-[11px] text-slate-400">Eliminates $49/mo Scribe lock-in</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Market TAM</span>
            </div>
            <div className="text-xl font-bold text-white">$588M TAM</div>
            <p className="text-[11px] text-slate-400">1M digital agencies & tech teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
