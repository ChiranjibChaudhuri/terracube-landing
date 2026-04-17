'use client';

import { motion } from 'framer-motion';

export default function ProductPreview() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Brand glow effect behind the card */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-500)_0%,var(--color-brand-600)_40%,transparent_70%)] opacity-20 blur-3xl pointer-events-none" />

      {/* Floating animated card */}
      <motion.div
        className="relative glass rounded-2xl border border-brand-500/20 overflow-hidden shadow-2xl shadow-brand-500/10"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Browser chrome with colored dots */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-navy-900/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-navy-400 ml-2">TerraCube Dashboard</span>
        </div>

        <div className="p-6 space-y-4">
          {/* 3 KPI cards row */}
          <div className="grid grid-cols-3 gap-3">
            {/* Combined Risk - amber */}
            <div className="rounded-lg bg-navy-900/60 border border-amber-500/20 p-3">
              <div className="text-[10px] text-navy-400 mb-1">
                Combined risk
              </div>
              <div className="text-2xl font-bold text-amber-400">52.3</div>
              <div className="flex items-center gap-1 mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-amber-400">
                  <path d="M5 2 L8 7 L2 7 Z" fill="currentColor" transform="rotate(180 5 5)" />
                </svg>
                <span className="text-[9px] text-amber-400">+2.1</span>
              </div>
            </div>

            {/* High Risk - red */}
            <div className="rounded-lg bg-navy-900/60 border border-red-500/20 p-3">
              <div className="text-[10px] text-navy-400 mb-1">
                High risk
              </div>
              <div className="text-2xl font-bold text-red-400">5/18</div>
              <div className="text-[9px] text-navy-500 mt-1">properties</div>
            </div>

            {/* Top Hazard - orange */}
            <div className="rounded-lg bg-navy-900/60 border border-orange-500/20 p-3">
              <div className="text-[10px] text-navy-400 mb-1">
                Top hazard
              </div>
              <div className="text-xs font-semibold text-orange-400 mt-1 leading-tight">
                Flood<br />Precip
              </div>
            </div>
          </div>

          {/* Mini time series chart - simulating 72h risk trend */}
          <div className="rounded-lg bg-navy-900/60 border border-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-navy-400">
                Risk trend (72h)
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                <span className="text-[9px] text-brand-400">Live</span>
              </div>
            </div>
            <svg viewBox="0 0 320 80" className="w-full" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="20" x2="320" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

              {/* Area fill under line */}
              <path
                d="M0,55 L40,52 L80,48 L120,50 L160,45 L200,42 L240,38 L280,35 L320,30 L320,80 L0,80 Z"
                fill="url(#preview-gradient)"
                opacity="0.25"
              />

              {/* Main trend line */}
              <polyline
                points="0,55 40,52 80,48 120,50 160,45 200,42 240,38 280,35 320,30"
                fill="none"
                stroke="var(--color-brand-400)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Pulsing dot at end */}
              <circle cx="320" cy="30" r="4" fill="var(--color-brand-400)">
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <defs>
                <linearGradient id="preview-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand-400)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Time labels */}
            <div className="flex justify-between mt-2 text-[9px] text-navy-500">
              <span>Now</span>
              <span>24h</span>
              <span>48h</span>
              <span>72h</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
