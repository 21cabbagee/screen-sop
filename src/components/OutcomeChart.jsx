import React, { useState } from 'react';
import { TrendingUp, Video, FileText, CheckCircle2, Clock, Zap, DollarSign, Sparkles, Layers } from 'lucide-react';

/**
 * OutcomeChart for ScreenSOP (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $8,000/mo manual technical writing & repetitive employee onboarding ($6 services layer)
 * with Autonomous Screen Recording to Audit-Proof SOP Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Screen-to-SOP & RPA Compiler",
  defaultMonthlySops = 12, // recurring operations processes documented per month
  onCtaClick
}) {
  const [sops, setSops] = useState(defaultMonthlySops);

  // Legacy manual documentation: 6 hours of manual screenshots & Word formatting per SOP @ $75/hr technical writer rate ($450/SOP)
  const legacyServicesCost = sops * 450;
  // ScreenSOP software fee: $39/mo flat + $5/compiled SOP
  const autoSoftwareCost = 39 + (sops * 5);
  const netDocumentationSavings = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 6);

  return (
    <div className="relative rounded-2xl border border-purple-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-purple-500/40 text-purple-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $4,800/mo Technical Writers ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Knowledge Base Economics: <span className="text-purple-400">{savingsPercent}% Overhead Slashed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Operations teams waste 15 hours a week taking manual screenshots, drawing red circles, and pasting into outdated Notion pages. ScreenSOP converts any 60-second screen capture into an audit-ready, annotated SOP and executable Playwright RPA script instantly.
          </p>
        </div>

        <div className="text-right bg-slate-900/80 border border-purple-500/30 rounded-xl p-3 px-4 min-w-[200px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Operations Budget Saved</span>
          <span className="text-2xl md:text-3xl font-black text-purple-400">
            ${netDocumentationSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-purple-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> 15s Instant Generation
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <Video className="w-4 h-4 text-purple-400" />
            Monthly Operations Workflows & SOPs Created:
          </label>
          <span className="text-base font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-purple-500/30 font-mono">
            {sops} SOPs / mo (${(legacyServicesCost * 12).toLocaleString()}/yr Documentation Cost)
          </span>
        </div>
        <input 
          type="range" 
          min={2} 
          max={40} 
          step={2}
          value={sops}
          onChange={(e) => setSops(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>2 SOPs (Early Startup)</span>
          <span>12 SOPs (Scaling Growth Org)</span>
          <span>40+ SOPs (Enterprise Compliance & BPO)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-900 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Documentation Labor Cost</span>
            <span className="text-[10px] text-slate-500">Live Simulation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Manual Screenshotting & Writing ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyServicesCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-purple-600 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  ScreenSOP Autonomous Autopilot ($1 Layer)
                </span>
                <span className="font-mono font-bold text-purple-300">${autoSoftwareCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-purple-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-lg shadow-lg shadow-purple-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net Operations Budget Saved:</span>
            <span className="text-sm font-bold text-purple-400">+${(netDocumentationSavings * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Auto-Cropped Keyframe Redlining</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Detects every button click, text input, and modal popover. Draws crisp geometric callout boxes and auto-labels user intentions.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Dual Output: Markdown + Executable Playwright</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Generates a clean documentation guide for human operators and a production-grade headless script to automate the recurring task completely.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">SOC2 & ISO-27001 Audit Trail Ready</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Export to Notion, Confluence, or GitHub with standardized compliance metadata, version controls, and approval timestamps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
