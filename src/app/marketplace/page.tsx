"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Thermometer,
  BarChart3,
  Bot,
  Clock,
  Code,
  ArrowRight,
  Flame,
  Bell,
  Leaf,
  Sun,
  Siren,
  TreePine,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { MARKETPLACE_SERVICES, SERVICE_PRICING } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Thermometer: <Thermometer className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Bell: <Bell className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Siren: <Siren className="w-6 h-6" />,
  TreePine: <TreePine className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

// Extended services with new temporal products
const extendedServices = [
  ...MARKETPLACE_SERVICES,
  {
    icon: "Clock",
    title: "Short-Term Risk Forecast",
    description:
      "7-day forward risk forecasts for flood, wind, heat, and freeze events. Plan ahead and trigger alerts before conditions deteriorate.",
    tags: ["GFS", "7-day", "Forecast"],
    badge: "New",
    price: "$0.10/call",
    category: "risk-monitoring",
    status: "live" as const,
  },
  {
    icon: "TrendingUp",
    title: "Historical Risk Trends",
    description:
      "Time-series analysis of past risk events — track how flood, wildfire, and climate exposure changed over the last 5 years.",
    tags: ["ERA5", "Time-series", "Archive"],
    badge: "Coming Soon",
    price: "",
    category: "risk-monitoring",
    status: "coming-soon" as const,
  },
  {
    icon: "TrendingUp",
    title: "Climate Risk Projections",
    description:
      "CMIP6-based climate projections for 2030, 2050, 2100. SSP scenarios showing future flood, heat, drought, and wildfire risk.",
    tags: ["CMIP6", "SSP", "Long-term"],
    badge: "",
    price: "$0.15/call",
    category: "climate-risk",
    status: "live" as const,
  },
];

// Map service categories
const categoryMap: Record<string, string> = {
  "Risk Monitoring": "risk",
  "Energy Estimation": "energy",
  "Wildfire Risk Scoring": "risk",
  "Parametric Insurance": "insurance",
  "ESG Property Scoring": "risk",
  "Solar PV Potential": "energy",
  "Post-Disaster Assessment": "risk",
  "Carbon Credit Verification": "climate",
  "Portfolio Analytics": "automation",
  "AI Agent": "automation",
  "Workflow Automation": "automation",
  "API Access": "automation",
};

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Helper to get per-call pricing from SERVICE_PRICING
  const getPricing = (serviceName: string): string => {
    const mapping: Record<string, string> = {
      "Risk Monitoring": "GFS Weather Risk",
      "Energy Estimation": "Energy Estimation",
      "Wildfire Risk Scoring": "Wildfire Risk",
      "Parametric Insurance": "Parametric Insurance",
      "ESG Property Scoring": "ESG Scoring",
    };

    const matchedName = mapping[serviceName];
    if (matchedName) {
      const service = SERVICE_PRICING.find(s => s.name === matchedName);
      if (service) return service.price + '/call';
    }
    return "";
  };

  // Filter services by category
  const displayServices = extendedServices
    .map(service => ({
      ...service,
      category: (service as any).category || categoryMap[service.title] || 'other',
      status: (service as any).status || 'live',
    }))
    .filter(service => {
      if (activeCategory === 'all') return true;
      if (activeCategory === 'core') return service.badge === 'Core' || service.price === 'Included';
      if (activeCategory === 'risk') return service.category === 'risk' || service.category === 'risk-monitoring';
      if (activeCategory === 'energy') return service.category === 'energy';
      if (activeCategory === 'insurance') return service.category === 'insurance';
      if (activeCategory === 'climate') return service.category === 'climate' || service.category === 'climate-risk';
      if (activeCategory === 'automation') return service.category === 'automation';
      return true;
    });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Vault Neo</span> marketplace
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
              12 satellite-powered underwriting modules. Subscribe to what you
              need — each service delivers property-level environmental scores
              via dashboard, API, or automated reports.
            </p>
          </AnimatedSection>

          {/* Category filter pills */}
          <AnimatedSection delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "All", value: "all" },
                { label: "Risk", value: "risk" },
                { label: "Energy", value: "energy" },
                { label: "Insurance", value: "insurance" },
                { label: "Climate", value: "climate" },
                { label: "Automation", value: "automation" },
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === cat.value
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                      : "bg-white/[0.06] text-navy-300 hover:bg-white/[0.1]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service, i) => {
              const pricing = getPricing(service.title) || service.price;
              const isLive = service.status === 'live';

              return (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <div className="glass rounded-xl h-full hover:scale-[1.02] hover:glow-brand transition-all duration-300 flex flex-col overflow-hidden group">
                    {/* Visual header bar with icon */}
                    <div className="relative px-6 pt-6 pb-4 bg-gradient-to-br from-brand-500/5 to-transparent">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/15 transition-colors">
                          {iconMap[service.icon]}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {/* Health badge */}
                          <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-400' : 'bg-gray-500'}`} />
                            <span className={`text-xs font-medium ${isLive ? 'text-emerald-400' : 'text-gray-500'}`}>
                              {isLive ? 'Live' : 'Coming Soon'}
                            </span>
                          </div>
                          {/* Pricing */}
                          {pricing && (
                            <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/[0.06] text-navy-300 border border-white/5">
                              {pricing}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="px-6 pb-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold text-white">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              service.badge === "New"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : service.badge === "Coming Soon"
                                ? "bg-gray-500/20 text-gray-400"
                                : "bg-brand-500/20 text-brand-400"
                            }`}
                          >
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-navy-300 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-brand-500/10 text-brand-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Launch CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600/30 via-brand-500/20 to-navy-900 p-8 sm:p-16 text-center border border-brand-500/20">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Start underwriting smarter today
              </h2>
              <p className="mt-4 text-navy-300 max-w-xl mx-auto">
                Analyze 5 properties free. See flood, wildfire, heat, and
                ESG scores powered by live satellite data — then decide if
                you need the full stack.
              </p>
              <Link
                href="/pricing#signup"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
              >
                Get Started Free <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
