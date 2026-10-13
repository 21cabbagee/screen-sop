import React from 'react';
import { Video, Activity, FileText } from 'lucide-react';

export default function Footer({ onOpenCab }) {
  return (
    <footer className="mt-16 border-t border-white/10 bg-dark-950 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sop-600 to-indigo-600 flex items-center justify-center text-white">
                <Video className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-white">
                Screen<span className="text-sop-400">SOP</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Multimodal screen recorder that watches your manual clicks and workflows, automatically generating step-by-step SOPs with annotated screenshots and 1-click Markdown export.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-sop-300 font-mono">
              <Activity className="w-3.5 h-3.5 text-sop-400" />
              <span>Export cleanly to Notion • GitHub Wiki • Confluence • PDF</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Features</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#capture-studio" className="hover:text-sop-400 transition-colors">Screen Capture Studio</a></li>
              <li><a href="#keyframe-timeline" className="hover:text-sop-400 transition-colors">Keyframe Sampling & Vision</a></li>
              <li><a href="#markdown-export" className="hover:text-sop-400 transition-colors">1-Click Markdown Export</a></li>
              <li><button onClick={onOpenCab} className="text-sop-300 hover:text-white font-semibold">Join CAB (70% Off)</button></li>
            </ul>
          </div>

          {/* Target SEO Index */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">SEO Index</h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono">
              <li>screen recording to sop ai</li>
              <li>automatic standard operating procedure generator</li>
              <li>scribe alternative open source markdown</li>
              <li>ai workflow documentation recorder</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 ScreenSOP Technologies. All rights reserved. Zero-Seat Tax Documentation.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="text-sop-400">V1 Black Car Scope Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
