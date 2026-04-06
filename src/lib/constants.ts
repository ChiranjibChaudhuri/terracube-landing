export const BRAND_NAME = "TerraCube";

export const NAV_LINKS = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const FEATURES = [
  {
    icon: "Shield",
    title: "Risk Monitoring",
    description:
      "Comprehensive flood, wind, and freeze-thaw detection powered by satellite imagery and climate models.",
  },
  {
    icon: "Zap",
    title: "Energy Analytics",
    description:
      "Building energy estimations derived from climate data, heating/cooling degree days, and envelope analysis.",
  },
  {
    icon: "Flame",
    title: "Wildfire Risk",
    description:
      "Dynamic wildfire scoring using fire history, vegetation dryness, drought stress, and terrain slope analysis.",
  },
  {
    icon: "Leaf",
    title: "ESG Scoring",
    description:
      "Property-level ESG ratings covering green space, air quality, land use diversity, and deforestation risk.",
  },
  {
    icon: "Sun",
    title: "Solar Potential",
    description:
      "Rooftop solar viability with irradiance mapping, optimal tilt/azimuth, shading analysis, and ROI projections.",
  },
  {
    icon: "Bell",
    title: "Parametric Insurance",
    description:
      "Satellite-based insurance triggers for wind, flood, heat, and freeze — instant, objective payouts.",
  },
  {
    icon: "Siren",
    title: "Disaster Assessment",
    description:
      "Rapid post-disaster damage mapping via SAR change detection before and after catastrophic events.",
  },
  {
    icon: "Brain",
    title: "AI-Powered Insights",
    description:
      "Intelligent portfolio analysis with machine learning models that surface hidden risks and opportunities.",
  },
  {
    icon: "Clock",
    title: "Workflow Automation",
    description:
      "Scheduled reports, automated alerts, and custom triggers that keep your team informed without manual effort.",
  },
  {
    icon: "Satellite",
    title: "Satellite Integration",
    description:
      "Live Google Earth Engine data feeds providing real-time environmental monitoring for every property.",
  },
  {
    icon: "Layers",
    title: "Portfolio Management",
    description:
      "Unified dashboard for managing property portfolios with aggregated risk scores and performance metrics.",
  },
  {
    icon: "Code",
    title: "API & Webhooks",
    description:
      "Full REST API for integrating Earth intelligence data into your existing systems and workflows.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Add Properties",
    description:
      "Upload addresses or connect your existing data sources to get started in minutes.",
  },
  {
    step: 2,
    title: "Get Analysis",
    description:
      "Receive automated risk assessments and energy reports powered by satellite data and AI.",
  },
  {
    step: 3,
    title: "Make Decisions",
    description:
      "Use AI-driven insights and recommendations to guide your next investment or mitigation move.",
  },
];

export const STATS = [
  { value: "10,000+", label: "Properties" },
  { value: "50+", label: "Risk Models" },
  { value: "99.7%", label: "Uptime" },
  { value: "Real-time", label: "Satellite" },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    company: "Meridian Capital Group",
    role: "VP of Acquisitions",
    quote:
      "TerraCube transformed how we evaluate property risk. The satellite-driven insights caught flood exposure our traditional due diligence missed entirely.",
    stars: 5,
  },
  {
    name: "Marcus Rivera",
    company: "Greenfield REIT",
    role: "Portfolio Manager",
    quote:
      "The energy analytics alone saved us six figures in the first year. We now factor climate resilience into every acquisition decision.",
    stars: 5,
  },
  {
    name: "Emily Nakamura",
    company: "Apex Property Advisors",
    role: "Chief Risk Officer",
    quote:
      "Finally, a platform that brings together environmental risk, energy data, and AI in one place. Our reporting time dropped by 80%.",
    stars: 5,
  },
];

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic property analysis",
    features: [
      { text: "Up to 5 properties", included: true },
      { text: "Basic risk scores", included: true },
      { text: "Monthly reports", included: true },
      { text: "Email support", included: true },
      { text: "Full risk + energy models", included: false },
      { text: "AI Agent access", included: false },
      { text: "Workflow automation", included: false },
      { text: "API access", included: false },
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "Advanced analytics for growing portfolios",
    features: [
      { text: "Up to 50 properties", included: true },
      { text: "Full risk + energy models", included: true },
      { text: "Weekly reports", included: true },
      { text: "Priority support", included: true },
      { text: "AI Agent access", included: true },
      { text: "Workflow automation", included: true },
      { text: "API access", included: true },
      { text: "Custom models", included: false },
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      { text: "Unlimited properties", included: true },
      { text: "Custom risk models", included: true },
      { text: "Real-time reports", included: true },
      { text: "Dedicated support + SLA", included: true },
      { text: "AI Agent access", included: true },
      { text: "Advanced automation", included: true },
      { text: "Full API access", included: true },
      { text: "On-premise deployment", included: true },
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const MARKETPLACE_SERVICES = [
  {
    icon: "Shield",
    title: "Risk Monitoring",
    description:
      "Wind, flood, freeze-thaw, and heat risk analysis with continuous satellite monitoring and alerting.",
    tags: ["Wind", "Flood", "Freeze-Thaw", "Heat"],
    badge: "Core",
  },
  {
    icon: "Thermometer",
    title: "Energy Estimation",
    description:
      "Heating and cooling degree day calculations, building energy modeling, and efficiency scoring.",
    tags: ["HDD", "CDD", "Efficiency"],
    badge: "Core",
  },
  {
    icon: "Flame",
    title: "Wildfire Risk Scoring",
    description:
      "Dynamic wildfire risk assessment using MODIS fire history, vegetation dryness, drought stress, and terrain analysis.",
    tags: ["MODIS", "ERA5", "SAR"],
    badge: "New",
  },
  {
    icon: "Bell",
    title: "Parametric Insurance",
    description:
      "Objective, satellite-based insurance triggers for wind, flood, heat, and freeze events. No claims adjuster needed.",
    tags: ["Wind", "Flood", "Heat", "Freeze"],
    badge: "New",
  },
  {
    icon: "Leaf",
    title: "ESG Property Scoring",
    description:
      "Environmental, Social, and Governance scoring for properties — green space, air quality, land use, and deforestation risk.",
    tags: ["ESG", "NDVI", "NO2", "Sentinel-5P"],
    badge: "New",
  },
  {
    icon: "Sun",
    title: "Solar PV Potential",
    description:
      "Rooftop solar viability assessment — irradiance mapping, optimal tilt/azimuth, shading risk, and ROI projections.",
    tags: ["ERA5", "DEM", "Solar"],
    badge: "New",
  },
  {
    icon: "Siren",
    title: "Post-Disaster Assessment",
    description:
      "Rapid damage assessment via SAR change detection — before/after analysis for floods, hurricanes, wildfires, and earthquakes.",
    tags: ["SAR", "Sentinel-1", "Damage"],
    badge: "New",
  },
  {
    icon: "BarChart3",
    title: "Portfolio Analytics",
    description:
      "Aggregated risk scores, trend analysis, and comparative benchmarking across your entire portfolio.",
    tags: ["Analytics", "Benchmarks"],
  },
  {
    icon: "Bot",
    title: "AI Agent",
    description:
      "Natural language interface for querying property data, generating reports, and getting recommendations.",
    tags: ["AI", "NLP", "Reports"],
  },
  {
    icon: "Clock",
    title: "Workflow Automation",
    description:
      "Scheduled analyses, automated alert triggers, and custom workflow pipelines for your team.",
    tags: ["Automation", "Alerts"],
  },
  {
    icon: "Code",
    title: "API Access",
    description:
      "RESTful API and webhooks for integrating TerraCube data into your existing systems and tools.",
    tags: ["REST", "Webhooks"],
  },
];
