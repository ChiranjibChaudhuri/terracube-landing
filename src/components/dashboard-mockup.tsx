"use client";

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Glow behind the dashboard */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-500)_0%,transparent_70%)] opacity-15 blur-2xl pointer-events-none" />

      <div className="relative glass rounded-2xl border border-brand-500/20 overflow-hidden shadow-2xl shadow-brand-500/10">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-navy-900/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-navy-400 ml-2">TerraCube Dashboard</span>
        </div>

        <div className="p-4 space-y-4">
          {/* Top stat cards row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-navy-900/60 border border-white/5 p-3">
              <div className="text-[10px] text-navy-400">Risk score</div>
              <div className="text-lg font-bold text-brand-400 mt-1">72.4</div>
              <div className="flex items-center gap-1 mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-red-400">
                  <path d="M5 2 L8 7 L2 7 Z" fill="currentColor" transform="rotate(180 5 5)" />
                </svg>
                <span className="text-[9px] text-red-400">+3.2</span>
              </div>
            </div>
            <div className="rounded-lg bg-navy-900/60 border border-white/5 p-3">
              <div className="text-[10px] text-navy-400">Properties</div>
              <div className="text-lg font-bold text-white mt-1">248</div>
              <div className="flex items-center gap-1 mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-emerald-400">
                  <path d="M5 2 L8 7 L2 7 Z" fill="currentColor" />
                </svg>
                <span className="text-[9px] text-emerald-400">+12</span>
              </div>
            </div>
            <div className="rounded-lg bg-navy-900/60 border border-white/5 p-3">
              <div className="text-[10px] text-navy-400">ESG avg</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">A-</div>
              <div className="flex items-center gap-1 mt-1">
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-emerald-400">
                  <path d="M5 2 L8 7 L2 7 Z" fill="currentColor" />
                </svg>
                <span className="text-[9px] text-emerald-400">+0.4</span>
              </div>
            </div>
          </div>

          {/* Chart area */}
          <div className="rounded-lg bg-navy-900/60 border border-white/5 p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-navy-400">Portfolio risk trend</span>
              <div className="flex gap-2">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-400">6M</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded text-navy-500">1Y</span>
              </div>
            </div>
            <svg viewBox="0 0 280 80" className="w-full" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="20" x2="280" y2="20" stroke="rgba(255,255,255,0.04)" />
              <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.04)" />
              <line x1="0" y1="60" x2="280" y2="60" stroke="rgba(255,255,255,0.04)" />
              {/* Area fill */}
              <path
                d="M0,60 C20,55 40,50 60,48 C80,46 100,52 120,45 C140,38 160,42 180,35 C200,28 220,32 240,25 C260,18 270,20 280,15 L280,80 L0,80 Z"
                fill="url(#chart-gradient)"
                opacity="0.3"
              />
              {/* Line */}
              <path
                d="M0,60 C20,55 40,50 60,48 C80,46 100,52 120,45 C140,38 160,42 180,35 C200,28 220,32 240,25 C260,18 270,20 280,15"
                fill="none"
                stroke="var(--color-brand-400)"
                strokeWidth="2"
              />
              {/* Dot at end */}
              <circle cx="280" cy="15" r="3" fill="var(--color-brand-400)" />
              <circle cx="280" cy="15" r="6" fill="var(--color-brand-400)" opacity="0.2" />
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand-400)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Risk breakdown bars */}
          <div className="rounded-lg bg-navy-900/60 border border-white/5 p-3">
            <div className="text-[10px] text-navy-400 mb-3">Risk breakdown</div>
            <div className="space-y-2.5">
              {[
                { label: "Flood", value: 65, color: "bg-blue-400" },
                { label: "Wildfire", value: 42, color: "bg-orange-400" },
                { label: "Wind", value: 78, color: "bg-brand-400" },
                { label: "Heat Stress", value: 55, color: "bg-red-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-[10px] text-navy-300 w-16 shrink-0">{item.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-navy-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-navy-400 w-8 text-right">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
