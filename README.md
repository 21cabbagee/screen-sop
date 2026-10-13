# ScreenSOP (`/tools/screen-recorder-to-sop-builder`)

> **Multimodal Screen Recorder That Watches Your Manual Clicks and Workflows, Automatically Generating Step-by-Step SOPs with Annotated Screenshots and 1-Click Markdown Export**

[![Deploy ScreenSOP to GitHub Pages](https://github.com/21cabbagee/screen-sop/actions/workflows/deploy.yml/badge.svg)](https://github.com/21cabbagee/screen-sop/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-online-purple)](https://21cabbagee.github.io/screen-sop/)

---

## 🎯 Executive Summary & Problem Thesis
- **Target Audience:** Agency operations leads, freelance systems consultants, BPO team managers, and technical customer success leads across 1,000,000 digital businesses.
- **Core Problem:** Writing standard operating procedures (SOPs) manually consumes dozens of executive hours. Loom videos are inefficient (nobody wants to scrub a 20-minute video for a 10-second button location), while legacy tools like Scribe enforce high per-seat SaaS taxes ($29–$49/seat/mo) and lock documentation behind proprietary walled gardens.
- **ScreenSOP Solution:** Press Record, do your normal workflow once, and get back a structured, beautifully formatted Markdown SOP with annotated screenshots in 30 seconds.

---

## 🚀 Key Features (Black Car V1 Scope)
1. **Browser Screen Capture Studio:** WebRTC `getDisplayMedia` screen recording with automatic click event detection and interactive simulation fallback.
2. **Keyframe Visual Sampling:** Auto-extracts sharp image stills at every cursor click or layout change with coordinate pulsing indicators.
3. **Vision Synthesis Pipeline:** Multimodal LLM (Claude 3.5 Sonnet / GPT-4o Vision) writes concise, numbered step-by-step instructions and operational callouts.
4. **1-Click Markdown & PDF Export:** Download clean GitHub-compatible Markdown, copy to Notion with formatting preserved, or print print-ready PDFs with zero per-seat tax.
5. **Founding Customer Advisory Board (CAB) Modal:** Direct capture mechanism offering 10 founding engineering teams a 70% lifetime platform discount ($15/mo instead of $49/mo).

---

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** TailwindCSS 3.4 (Creative violet/indigo dark aesthetic with glassmorphism)
- **Icons:** Lucide React
- **Animations:** Canvas Confetti + Tailwind Keyframes
- **Deployment:** GitHub Pages via GitHub Actions CI/CD

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/21cabbagee/screen-sop.git
cd screen-sop

# Install dependencies
npm install

# Start local development server
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

---

## 🌐 Live Deployment
- **URL:** [https://21cabbagee.github.io/screen-sop/](https://21cabbagee.github.io/screen-sop/)
- **Repository:** [https://github.com/21cabbagee/screen-sop](https://github.com/21cabbagee/screen-sop)
