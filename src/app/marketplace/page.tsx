"use client";

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
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { MARKETPLACE_SERVICES } from "@/lib/constants";

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
};

export default function MarketplacePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Vault Neo</span> Marketplace
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
              12 satellite-powered underwriting modules. Subscribe to what you
              need — each service delivers property-level environmental scores
              via dashboard, API, or automated reports.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETPLACE_SERVICES.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full hover:scale-[1.02] hover:glow-brand transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                    {iconMap[service.icon]}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        service.badge === 'New'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-brand-500/20 text-brand-400'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                    {service.price && (
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium bg-white/[0.06] text-navy-300">
                        {service.price}
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Launch CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600/30 via-brand-500/20 to-navy-900 p-8 sm:p-16 text-center border border-brand-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Start Underwriting Smarter Today
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
