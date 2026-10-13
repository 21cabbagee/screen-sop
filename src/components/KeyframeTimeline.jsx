import React, { useState } from 'react';
import { Camera, Edit3, Check, MousePointer, Info, Sparkles, Clock, Layers } from 'lucide-react';

export default function KeyframeTimeline({ steps, onUpdateStep }) {
  const [editingStepId, setEditingStepId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', instruction: '' });

  const startEdit = (step) => {
    setEditingStepId(step.id);
    setEditForm({ title: step.title, instruction: step.instruction });
  };

  const saveEdit = (stepId) => {
    onUpdateStep(stepId, editForm);
    setEditingStepId(null);
  };

  return (
    <section id="keyframe-timeline" className="py-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-sop-400" />
              <span>Keyframe Visual Sampling & Vision Synthesis</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Visual click markers, annotated screenshot coordinates, and multimodal vision instruction pipeline
            </p>
          </div>

          <div className="text-xs font-mono text-sop-300 bg-sop-950/40 px-3 py-1.5 rounded-lg border border-sop-500/30">
            <span>Vision Engine: <strong>Claude 3.5 Sonnet Vision</strong></span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6">
          {steps.map((step) => {
            const isEditing = editingStepId === step.id;

            return (
              <div
                key={step.id}
                className="glass-panel p-6 rounded-2xl border-white/10 hover:border-sop-500/30 transition-all text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left: Annotated Screen Mockup with Target Coordinate Pulsing (5 cols) */}
                  <div className="md:col-span-5 relative">
                    <div className="relative aspect-video rounded-xl bg-dark-950 border border-white/10 overflow-hidden shadow-inner">
                      {/* Browser header bar */}
                      <div className="bg-dark-900 px-3 py-2 border-b border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-rose-500" />
                          <div className="w-2 h-2 rounded-full bg-amber-500" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <span>Keyframe #{step.stepNumber} @ {step.timestamp}</span>
                      </div>

                      {/* Mock UI Canvas */}
                      <div className="p-4 h-full relative flex flex-col justify-between">
                        <div className="space-y-2 opacity-50">
                          <div className="h-3 w-1/3 bg-white/10 rounded" />
                          <div className="h-2 w-2/3 bg-white/5 rounded" />
                          <div className="h-2 w-1/2 bg-white/5 rounded" />
                        </div>

                        {/* Pulsing Target Click Circle Indicator */}
                        <div
                          style={{
                            left: `${step.clickCoords.x}%`,
                            top: `${step.clickCoords.y}%`
                          }}
                          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        >
                          <div className="w-8 h-8 rounded-full bg-rose-500/30 border-2 border-rose-500 flex items-center justify-center animate-ping" />
                          <div className="absolute inset-0 w-8 h-8 rounded-full bg-rose-500/80 flex items-center justify-center text-white text-[10px] font-bold shadow-lg shadow-rose-500/50">
                            {step.stepNumber}
                          </div>
                        </div>

                        <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>Target: {step.uiElement}</span>
                          <span className="text-rose-400 font-bold">X:{step.clickCoords.x}% Y:{step.clickCoords.y}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Vision-Synthesized Step Copy & Instructions (7 cols) */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-sop-500/20 border border-sop-500/30 text-sop-300 font-bold text-xs flex items-center justify-center">
                            {step.stepNumber}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            Captured @ {step.timestamp}
                          </span>
                        </div>

                        {!isEditing ? (
                          <button
                            onClick={() => startEdit(step)}
                            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-sop-300 transition-colors p-1"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit Copy</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => saveEdit(step.id)}
                            className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold p-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Done</span>
                          </button>
                        )}
                      </div>

                      {!isEditing ? (
                        <>
                          <h3 className="text-base font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                            {step.instruction}
                          </p>
                        </>
                      ) : (
                        <div className="space-y-2 mb-3">
                          <input
                            type="text"
                            value={editForm.title}
                            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            className="w-full px-3 py-1.5 bg-dark-900 border border-white/10 rounded-lg text-xs font-bold text-white focus:border-sop-500 focus:outline-none"
                          />
                          <textarea
                            rows={3}
                            value={editForm.instruction}
                            onChange={(e) => setEditForm({ ...editForm, instruction: e.target.value })}
                            className="w-full px-3 py-1.5 bg-dark-900 border border-white/10 rounded-lg text-xs text-slate-200 focus:border-sop-500 focus:outline-none"
                          />
                        </div>
                      )}
                    </div>

                    {/* Operational Callout Card */}
                    <div className="p-3 rounded-xl bg-dark-900 border border-white/5 text-xs text-slate-300 flex items-start gap-2.5">
                      <Info className="w-4 h-4 text-sop-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white block text-[11px]">Operational Context Note:</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">{step.callout}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
