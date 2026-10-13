import React, { useState, useEffect } from 'react';
import { Video, StopCircle, Play, Sparkles, Monitor, Camera, MousePointer, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PRESET_WORKFLOWS } from '../data/mockSopData';

export default function ScreenCaptureStudio({ currentWorkflow, onSelectWorkflow, onSynthesizeWorkflow }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedSeconds, setRecordedSeconds] = useState(0);
  const [clickCount, setClickCount] = useState(currentWorkflow.totalClicks);
  const [isProcessing, setIsProcessing] = useState(false);
  const [webrtcActive, setWebrtcActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordedSeconds((sec) => sec + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleStartRecording = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: { cursor: "always" },
          audio: false
        });
        setWebrtcActive(true);
        stream.getVideoTracks()[0].onended = () => {
          handleStopRecording();
        };
      }
    } catch (err) {
      // Graceful fallback to browser simulation mode
      setWebrtcActive(false);
    }

    setIsRecording(true);
    setRecordedSeconds(0);
    setClickCount(0);
  };

  const handleSimulateClick = () => {
    if (!isRecording) return;
    setClickCount(c => c + 1);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      onSynthesizeWorkflow(currentWorkflow);
    }, 1200);
  };

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <section id="capture-studio" className="py-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-white/10 text-left">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-sop-400" />
                <span>Browser Screen Action Capture Studio</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                WebRTC screen recording with automated cursor click tracking and keyframe extraction
              </p>
            </div>

            {/* Workflow Preset Switcher */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Preset Workflow:</span>
              <select
                value={currentWorkflow.id}
                onChange={(e) => {
                  const wf = PRESET_WORKFLOWS.find(w => w.id === e.target.value);
                  if (wf) {
                    onSelectWorkflow(wf);
                    setClickCount(wf.totalClicks);
                    setRecordedSeconds(wf.durationSec);
                  }
                }}
                className="px-3 py-1.5 bg-dark-900 border border-white/10 rounded-xl text-xs text-white focus:border-sop-500 focus:outline-none"
              >
                {PRESET_WORKFLOWS.map((wf) => (
                  <option key={wf.id} value={wf.id}>{wf.targetApp} — {wf.title.slice(0, 30)}...</option>
                ))}
              </select>
            </div>
          </div>

          {/* Interactive Screen Recording Monitor */}
          <div className="relative rounded-2xl bg-dark-950 border border-white/10 overflow-hidden p-6 mb-6">
            {/* Visual Screen Mock */}
            <div className="aspect-video max-h-80 w-full rounded-xl bg-dark-900/90 border border-white/5 flex flex-col justify-between p-4 relative overflow-hidden">
              {/* Browser Mock Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    {currentWorkflow.targetApp} — https://dashboard.stripe.com/billing
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <span>1080p 60fps</span>
                  <span>•</span>
                  <span>{webrtcActive ? 'WebRTC Live Stream' : 'Interactive Sandbox Canvas'}</span>
                </div>
              </div>

              {/* Center Canvas State */}
              <div className="my-auto text-center py-8">
                {isRecording ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto text-rose-400">
                      <Camera className="w-6 h-6 animate-bounce" />
                    </div>
                    <div className="text-sm font-bold text-white">Recording User Workflow...</div>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Click the simulated action button below or perform steps on your screen. Keyframes are captured at every cursor action.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-sop-500/20 border border-sop-500/40 flex items-center justify-center mx-auto text-sop-400">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-white">{currentWorkflow.title}</div>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Ready to capture. Press "Start Recording" or synthesize existing keyframe sequence into formatted Markdown.
                    </p>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className={`w-2 h-2 rounded-full ${isRecording ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`} />
                    Status: {isRecording ? 'RECORDING' : 'READY'}
                  </span>
                  <span>•</span>
                  <span className="text-slate-400">Elapsed: <strong className="text-white">{formatTimer(recordedSeconds)}</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sop-300">Keyframe Actions: <strong className="text-white">{clickCount} Clicks Captured</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Control Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sop-600 to-indigo-600 hover:from-sop-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sop-500/25 transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Start Screen Recording</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSimulateClick}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-white font-bold text-xs border border-white/10 transition-all hover:scale-105"
                  >
                    <MousePointer className="w-4 h-4 text-sop-400" />
                    <span>Trigger Click Event (+1 Keyframe)</span>
                  </button>

                  <button
                    onClick={handleStopRecording}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-500/25 transition-all"
                  >
                    <StopCircle className="w-4 h-4" />
                    <span>Stop & Synthesize SOP</span>
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => onSynthesizeWorkflow(currentWorkflow)}
              disabled={isProcessing}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 border border-white/10 hover:border-white/20 text-xs font-semibold transition-all"
            >
              {isProcessing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Multimodal Vision Synthesizing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-sop-400" />
                  <span>Run Multimodal Vision Synthesis</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
