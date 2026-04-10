"use client";

export default function PipelineDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(65,182,196,0.1)_0%,transparent_70%)] blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 320 400"
        className="w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting flow lines */}
        <path
          d="M160 90 L160 145"
          stroke="url(#flow-gradient)"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.6"
        />
        <path
          d="M160 230 L160 275"
          stroke="url(#flow-gradient)"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.6"
        />

        {/* Flow arrows */}
        <polygon points="155,143 160,153 165,143" fill="var(--color-brand-400)" opacity="0.6" />
        <polygon points="155,273 160,283 165,273" fill="var(--color-brand-400)" opacity="0.6" />

        {/* === Stage 1: Satellite === */}
        <g>
          {/* Outer glow ring */}
          <circle cx="160" cy="50" r="38" fill="none" stroke="var(--color-brand-500)" strokeWidth="1" opacity="0.2" />
          {/* Background circle */}
          <circle cx="160" cy="50" r="32" fill="rgba(10, 22, 40, 0.8)" stroke="var(--color-brand-500)" strokeWidth="1.5" opacity="0.6" />

          {/* Satellite icon */}
          <g transform="translate(144, 34)">
            {/* Body */}
            <rect x="10" y="10" width="12" height="12" rx="2" fill="var(--color-brand-400)" opacity="0.9" />
            {/* Solar panels */}
            <rect x="0" y="12" width="8" height="8" rx="1" fill="var(--color-brand-300)" opacity="0.6" />
            <rect x="24" y="12" width="8" height="8" rx="1" fill="var(--color-brand-300)" opacity="0.6" />
            {/* Antenna */}
            <line x1="16" y1="10" x2="16" y2="4" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <circle cx="16" cy="3" r="1.5" fill="var(--color-brand-400)" />
            {/* Signal waves */}
            <path d="M12 26 Q16 30 20 26" fill="none" stroke="var(--color-brand-300)" strokeWidth="1" opacity="0.5" />
            <path d="M9 29 Q16 34 23 29" fill="none" stroke="var(--color-brand-300)" strokeWidth="1" opacity="0.3" />
          </g>

          {/* Label */}
          <text x="160" y="100" textAnchor="middle" className="text-[11px] font-semibold" fill="var(--color-brand-300)">
            Satellite Capture
          </text>
        </g>

        {/* === Stage 2: Data Processing === */}
        <g>
          <circle cx="160" cy="190" r="38" fill="none" stroke="var(--color-brand-500)" strokeWidth="1" opacity="0.2" />
          <circle cx="160" cy="190" r="32" fill="rgba(10, 22, 40, 0.8)" stroke="var(--color-brand-500)" strokeWidth="1.5" opacity="0.6" />

          {/* Processing / brain icon */}
          <g transform="translate(145, 175)">
            {/* Chip body */}
            <rect x="4" y="4" width="22" height="22" rx="3" fill="none" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            {/* Inner circuit */}
            <circle cx="15" cy="15" r="5" fill="none" stroke="var(--color-brand-300)" strokeWidth="1" />
            <circle cx="15" cy="15" r="2" fill="var(--color-brand-400)" />
            {/* Pins */}
            <line x1="9" y1="4" x2="9" y2="0" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="15" y1="4" x2="15" y2="0" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="21" y1="4" x2="21" y2="0" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="9" y1="26" x2="9" y2="30" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="15" y1="26" x2="15" y2="30" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="21" y1="26" x2="21" y2="30" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="4" y1="10" x2="0" y2="10" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="4" y1="20" x2="0" y2="20" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="26" y1="10" x2="30" y2="10" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="26" y1="20" x2="30" y2="20" stroke="var(--color-brand-400)" strokeWidth="1.5" />
          </g>

          <text x="160" y="240" textAnchor="middle" className="text-[11px] font-semibold" fill="var(--color-brand-300)">
            AI Processing
          </text>
        </g>

        {/* === Stage 3: Insights Dashboard === */}
        <g>
          <circle cx="160" cy="325" r="38" fill="none" stroke="var(--color-brand-500)" strokeWidth="1" opacity="0.2" />
          <circle cx="160" cy="325" r="32" fill="rgba(10, 22, 40, 0.8)" stroke="var(--color-brand-500)" strokeWidth="1.5" opacity="0.6" />

          {/* Dashboard/chart icon */}
          <g transform="translate(145, 310)">
            {/* Screen */}
            <rect x="2" y="2" width="26" height="18" rx="2" fill="none" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            {/* Stand */}
            <line x1="15" y1="20" x2="15" y2="24" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            <line x1="10" y1="24" x2="20" y2="24" stroke="var(--color-brand-400)" strokeWidth="1.5" />
            {/* Bar chart inside */}
            <rect x="6" y="12" width="4" height="6" rx="0.5" fill="var(--color-brand-300)" opacity="0.7" />
            <rect x="12" y="8" width="4" height="10" rx="0.5" fill="var(--color-brand-400)" opacity="0.8" />
            <rect x="18" y="5" width="4" height="13" rx="0.5" fill="var(--color-brand-300)" opacity="0.9" />
            {/* Trend line */}
            <path d="M7 11 L14 7 L20 4" fill="none" stroke="var(--color-brand-200)" strokeWidth="1" opacity="0.5" />
          </g>

          <text x="160" y="375" textAnchor="middle" className="text-[11px] font-semibold" fill="var(--color-brand-300)">
            Risk Insights
          </text>
        </g>

        {/* Side labels with data types */}
        <g opacity="0.5">
          {/* Left side labels */}
          <text x="70" y="45" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">Sentinel-1/2</text>
          <text x="70" y="57" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">Landsat</text>
          <text x="70" y="69" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">MODIS</text>

          <text x="70" y="185" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">50+ Models</text>
          <text x="70" y="197" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">ML Pipeline</text>

          <text x="70" y="320" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">Dashboard</text>
          <text x="70" y="332" textAnchor="end" className="text-[9px]" fill="var(--color-navy-400)">API / Reports</text>

          {/* Right side labels */}
          <text x="250" y="45" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">ERA5</text>
          <text x="250" y="57" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">VIIRS</text>
          <text x="250" y="69" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">SAR</text>

          <text x="250" y="185" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">CMIP6</text>
          <text x="250" y="197" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">GEE</text>

          <text x="250" y="320" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">Scores</text>
          <text x="250" y="332" textAnchor="start" className="text-[9px]" fill="var(--color-navy-400)">Alerts</text>
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="flow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-400)" />
            <stop offset="100%" stopColor="var(--color-brand-500)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
