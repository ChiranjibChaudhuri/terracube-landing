export const BRAND_NAME = "TerraCube";

export const NAV_LINKS = {
  product: {
    label: 'Product',
    children: [
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Data Sources', href: '/data-sources' },
      { label: 'Security', href: '/security' },
    ],
  },
  useCases: { label: 'Use Cases', href: '/use-cases' },
  pricing: { label: 'Pricing', href: '/pricing' },
  about: {
    label: 'About',
    children: [
      { label: 'Company', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
} as const;

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
  { value: '$2B+', label: 'Assets Analyzed' },
  { value: '34', label: 'Risk Indices' },
  { value: '12', label: 'Earth Engine Services' },
  { value: '<5 min', label: 'Per-Property Analysis' },
] as const;

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

export const PRICING_MODEL = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: '5 properties, core risk indices',
    features: ['5 properties', 'GFS Risk (21 indices)', 'Satellite Risk (13 indices)', 'Monthly risk reports', 'Community support'],
    cta: 'Start Free',
    ctaHref: '/auth/register',
    highlighted: false,
  },
  payAsYouGo: {
    name: 'Pay As You Go',
    price: 'From $0.03',
    period: 'per API call',
    description: 'Per-API-call pricing for every service',
    features: ['Unlimited properties', 'All marketplace services', 'Per-call billing', 'API access', 'Email support', 'Weekly reports'],
    cta: 'Start Free',
    ctaHref: '/auth/register',
    highlighted: true,
  },
  enterprise: {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Custom agreements for large portfolios',
    features: ['Volume discounts', 'Dedicated support', 'Custom SLAs', 'Data residency options', 'SSO/SAML', 'Real-time webhooks'],
    cta: 'Book Demo',
    ctaHref: 'mailto:sales@terracube.io',
    highlighted: false,
  },
} as const;

export const SERVICE_PRICING = [
  { name: 'GFS Weather Risk', price: '$0.05', unit: 'per point query' },
  { name: 'Satellite Risk', price: '$0.08', unit: 'per point query' },
  { name: 'Energy Estimation', price: '$0.03', unit: 'per property' },
  { name: 'Short-Term Forecast', price: '$0.10', unit: 'per timeseries' },
  { name: 'Climate Projections', price: '$0.15', unit: 'per scenario' },
  { name: 'Wildfire Risk', price: '$0.05', unit: 'per point' },
  { name: 'ESG Scoring', price: '$0.06', unit: 'per property' },
  { name: 'Parametric Insurance', price: '$0.04', unit: 'per trigger check' },
] as const;

export const MARKETPLACE_SERVICES = [
  {
    icon: "Shield",
    title: "Risk Monitoring",
    description:
      "34 risk indices across 21 GFS weather forecasts and 13 satellite observations — wind, flood, heat, air quality, soil moisture, and more.",
    tags: ["21 GFS Indices", "13 Satellite Indices", "Real-time"],
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

export const USE_CASES = [
  {
    role: 'Underwriters',
    color: '#14B8A6',
    headline: 'Accept, reject, or price with data',
    description: 'Per-property risk scores replace gut-feel decisions. 34 risk indices from satellite and weather forecast data give you the full exposure picture.',
    problem: 'Traditional underwriting misses climate exposure that satellites can see.',
    solution: '34 risk indices per property — flood, wildfire, heat, wind, and 30 more. Drill down to the specific hazard driving risk.',
  },
  {
    role: 'Portfolio Managers',
    color: '#F59E0B',
    headline: 'Monitor trends, spot concentration',
    description: 'Portfolio-wide risk trends and deteriorating asset alerts keep you ahead of emerging climate threats.',
    problem: "You can't manage risk you can't see trending.",
    solution: 'Portfolio-wide time series forecasts, deteriorating asset alerts, and concentration risk visualization.',
  },
  {
    role: 'Executives',
    color: '#A78BFA',
    headline: 'Portfolio health at a glance',
    description: 'KPI dashboards, one-click reports, and board-ready portfolio health summaries in minutes.',
    problem: 'Board reporting on climate exposure takes weeks of manual analysis.',
    solution: 'One-glance KPI dashboard, PDF reports, portfolio health summary. Board-ready in minutes.',
  },
] as const;

export const CASE_STUDIES = [
  {
    industry: 'Insurance',
    company: 'National Reinsurance Corp',
    headline: '$4.2M in avoided losses',
    challenge: 'Traditional flood models missed exposure in a 200-property portfolio across the Eastern seaboard.',
    solution: 'TerraCube satellite risk analysis using Sentinel-1 SAR and precipitation indices identified 12 high-risk properties traditional models classified as low-risk.',
    result: '$4.2M in avoided losses when flooding occurred 6 months later. Portfolio now monitored continuously.',
    quote: "TerraCube's analysis caught flood exposure that our traditional models missed entirely.",
    quoteName: 'Sarah Chen',
    quoteTitle: 'VP Risk, National Reinsurance Corp',
    stat: '$4.2M',
    statLabel: 'Losses Avoided',
  },
  {
    industry: 'Real Estate Investment',
    company: 'Meridian Real Estate Fund',
    headline: '2 weeks to 5 minutes',
    challenge: 'Climate due diligence for acquisitions took 2 weeks per property, limiting the number of deals the team could evaluate.',
    solution: 'Automated 34-index analysis integrated into the acquisition pipeline via API. Per-property reports generated on demand.',
    result: 'Analysis time reduced from 2 weeks to 5 minutes. 3x more properties evaluated per quarter.',
    quote: 'Cut our per-property underwriting cost by $15K and reduced analysis time from 2 weeks to 5 minutes.',
    quoteName: 'Maria Rodriguez',
    quoteTitle: 'CTO, Meridian Real Estate Fund',
    stat: '85%',
    statLabel: 'Faster Analysis',
  },
  {
    industry: 'Mortgage Lending',
    company: 'Pacific Property Insurance',
    headline: 'Proactive wildfire risk management',
    challenge: 'No systematic way to monitor climate risk across a 5,000-loan residential mortgage portfolio.',
    solution: 'Portfolio monitoring with satellite indices and threshold crossing alerts. Automated weekly risk reports.',
    result: 'Identified wildfire-exposed properties before fire season. Proactive borrower communication prevented claims.',
    quote: 'We validated Hurricane Milton impacts within 48 hours using satellite risk indices. Game changer for claims.',
    quoteName: 'James Park',
    quoteTitle: 'Head of Claims, Pacific Property Insurance',
    stat: '3x',
    statLabel: 'Coverage Improvement',
  },
] as const;

export const DATA_SOURCES = [
  { name: 'Sentinel-1', provider: 'ESA', measures: 'SAR radar, flood detection', resolution: '10m', frequency: '12-day revisit', icon: 'Satellite' },
  { name: 'Sentinel-2', provider: 'ESA', measures: 'Optical, vegetation, land use', resolution: '10m', frequency: '5-day revisit', icon: 'Layers' },
  { name: 'Sentinel-5P', provider: 'ESA', measures: 'Atmospheric, air quality', resolution: '7km', frequency: 'Daily', icon: 'Wind' },
  { name: 'MODIS', provider: 'NASA', measures: 'Land surface temp, burned area', resolution: '250m-1km', frequency: 'Daily', icon: 'Thermometer' },
  { name: 'VIIRS', provider: 'NASA/NOAA', measures: 'Nighttime lights, fire detection', resolution: '375m', frequency: 'Daily', icon: 'Flame' },
  { name: 'NOAA GFS', provider: 'NOAA', measures: 'Weather forecast, 21 risk indices', resolution: '28km', frequency: '6-hourly', icon: 'CloudRain' },
  { name: 'ERA5', provider: 'ECMWF', measures: 'Climate reanalysis', resolution: '30km', frequency: 'Hourly', icon: 'Clock' },
  { name: 'CMIP6', provider: 'WCRP', measures: 'Climate projections, SSP scenarios', resolution: 'Variable', frequency: 'Decadal', icon: 'TrendingUp' },
  { name: 'SRTM DEM', provider: 'NASA', measures: 'Elevation, terrain analysis', resolution: '30m', frequency: 'Static', icon: 'Mountain' },
  { name: 'SMAP', provider: 'NASA', measures: 'Soil moisture monitoring', resolution: '9km', frequency: '3-day revisit', icon: 'Droplets' },
] as const;

export const SECURITY_FEATURES = [
  { title: 'Data Encryption', description: 'TLS 1.3 for all data in transit. AES-256 encryption for data at rest. Zero plain-text storage of credentials.', icon: 'Lock' },
  { title: 'Authentication', description: 'OAuth 2.0 with JWT tokens. API key rotation support. Rate limiting at 30 requests per minute per key.', icon: 'Key' },
  { title: 'Data Residency', description: 'Processing on Google Cloud Platform. Data stored in US-East and EU-West regions. Custom residency for enterprise plans.', icon: 'Globe' },
  { title: 'Access Control', description: 'Role-based access control (RBAC). Full audit logging of all API calls. IP allowlisting for enterprise accounts.', icon: 'Shield' },
  { title: 'SLA & Uptime', description: '99.9% uptime commitment. 4-hour response time for critical issues. Dedicated support channel for enterprise.', icon: 'Activity' },
  { title: 'Responsible Disclosure', description: 'Security vulnerability reporting program. Contact security@terracube.io for disclosures.', icon: 'AlertTriangle' },
] as const;

export const COMPLIANCE_BADGES = ['SOC 2 Type II', 'GDPR Compliant', 'ISO 27001'] as const;

export const PRICING_FAQ = [
  { q: 'How does pay-per-call pricing work?', a: 'Each API call to a service is billed at the listed price. You only pay for what you use. No minimum commitments.' },
  { q: 'What counts as a "property"?', a: 'A property is a unique lat/lng coordinate pair. Each coordinate queried through a service counts as one API call.' },
  { q: 'Can I switch between plans?', a: 'Yes, you can upgrade or downgrade at any time. The free tier is always available with 5 properties.' },
  { q: 'How accurate is the satellite data?', a: 'Our indices are derived from Sentinel (10m), MODIS (250m-1km), and GFS (28km) data. Accuracy varies by index and is documented per service.' },
  { q: 'Do you offer volume discounts?', a: 'Yes. Contact our sales team for bulk pricing on 1,000+ properties or custom enterprise agreements.' },
  { q: 'What is the API rate limit?', a: '30 requests per minute on the free tier. Higher limits available on pay-as-you-go and enterprise plans.' },
  { q: 'How long is data retained?', a: 'Analysis results are cached for 3 hours (matching GFS update frequency). Historical snapshots available with the Historical Trends service.' },
  { q: 'Can I integrate with my existing systems?', a: 'Yes. All services are available via REST API. We support webhooks for real-time alerts on enterprise plans.' },
] as const;
