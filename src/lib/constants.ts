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
    title: "Upload Your Portfolio",
    description:
      "Drop in addresses, parcel IDs, or connect your property management system. We geocode and match every asset to satellite coverage automatically.",
  },
  {
    step: 2,
    title: "Run Environmental Underwriting",
    description:
      "Each property gets scored across 50+ risk models — flood, wildfire, heat stress, wind exposure, ESG, energy performance — using live satellite data from Google Earth Engine.",
  },
  {
    step: 3,
    title: "Price Risk, Close Deals",
    description:
      "Export underwriting reports, set parametric insurance triggers, or pipe scores directly into your deal pipeline via API. Make acquisition and renewal decisions backed by real data.",
  },
];

export const STATS = [
  { value: "10,000+", label: "Properties Underwritten" },
  { value: "50+", label: "Environmental Risk Models" },
  { value: "12", label: "Satellite-Powered Services" },
  { value: "<5 min", label: "Per-Property Analysis" },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    company: "Meridian Capital Group",
    role: "VP of Acquisitions",
    quote:
      "We passed on a coastal portfolio last quarter based on TerraCube's flood and storm-surge scores. Two months later, Hurricane Milton validated every flag. That's the kind of edge traditional due diligence can't give you.",
    stars: 5,
  },
  {
    name: "Marcus Rivera",
    company: "Greenfield REIT",
    role: "Portfolio Manager",
    quote:
      "We used to spend $15K per property on third-party environmental reports. TerraCube covers our entire 200-property portfolio for a fraction of that — and the satellite data updates continuously.",
    stars: 5,
  },
  {
    name: "Emily Nakamura",
    company: "Apex Property Advisors",
    role: "Chief Risk Officer",
    quote:
      "The parametric insurance triggers alone justified the subscription. We set up automated weather-event payouts across 40 assets in an afternoon — no claims adjusters, no waiting.",
    stars: 5,
  },
];

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Environmental risk scores for up to 5 properties",
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
    description: "Full underwriting stack for growing portfolios",
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
    description: "Custom underwriting for institutional portfolios",
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
    price: "Included",
  },
  {
    icon: "Thermometer",
    title: "Energy Estimation",
    description:
      "Heating and cooling degree day calculations, building energy modeling, and efficiency scoring.",
    tags: ["HDD", "CDD", "Efficiency"],
    badge: "Core",
    price: "Included",
  },
  {
    icon: "Flame",
    title: "Wildfire Risk Scoring",
    description:
      "Dynamic wildfire risk assessment using MODIS fire history, vegetation dryness, drought stress, and terrain analysis.",
    tags: ["MODIS", "ERA5", "SAR"],
    badge: "New",
    price: "Pro+",
  },
  {
    icon: "Bell",
    title: "Parametric Insurance",
    description:
      "Objective, satellite-based insurance triggers for wind, flood, heat, and freeze events. No claims adjuster needed.",
    tags: ["Wind", "Flood", "Heat", "Freeze"],
    badge: "New",
    price: "Pro+",
  },
  {
    icon: "Leaf",
    title: "ESG Property Scoring",
    description:
      "Environmental, Social, and Governance scoring for properties — green space, air quality, land use, and deforestation risk.",
    tags: ["ESG", "NDVI", "NO2", "Sentinel-5P"],
    badge: "New",
    price: "Pro+",
  },
  {
    icon: "Sun",
    title: "Solar PV Potential",
    description:
      "Rooftop solar viability assessment — irradiance mapping, optimal tilt/azimuth, shading risk, and ROI projections.",
    tags: ["ERA5", "DEM", "Solar"],
    badge: "New",
    price: "Pro+",
  },
  {
    icon: "Siren",
    title: "Post-Disaster Assessment",
    description:
      "Rapid damage assessment via SAR change detection — before/after analysis for floods, hurricanes, wildfires, and earthquakes.",
    tags: ["SAR", "Sentinel-1", "Damage"],
    badge: "New",
    price: "Enterprise",
  },
  {
    icon: "TreePine",
    title: "Carbon Credit Verification",
    description:
      "Verify carbon offset and reforestation projects — forest integrity, biomass, NDVI trends, carbon stock estimation, and annual sequestration rates.",
    tags: ["GEDI", "Hansen", "MODIS NPP"],
    badge: "New",
    price: "Enterprise",
  },
  {
    icon: "BarChart3",
    title: "Portfolio Analytics",
    description:
      "Aggregated risk scores, trend analysis, and comparative benchmarking across your entire portfolio.",
    tags: ["Analytics", "Benchmarks"],
    price: "Included",
  },
  {
    icon: "Bot",
    title: "AI Agent",
    description:
      "Natural language interface for querying property data, generating reports, and getting recommendations.",
    tags: ["AI", "NLP", "Reports"],
    price: "Pro+",
  },
  {
    icon: "Clock",
    title: "Workflow Automation",
    description:
      "Scheduled analyses, automated alert triggers, and custom workflow pipelines for your team.",
    tags: ["Automation", "Alerts"],
    price: "Pro+",
  },
  {
    icon: "Code",
    title: "API Access",
    description:
      "RESTful API and webhooks for integrating TerraCube data into your existing systems and tools.",
    tags: ["REST", "Webhooks"],
    price: "Pro+",
  },
];
