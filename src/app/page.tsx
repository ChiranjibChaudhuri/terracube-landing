"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  Brain,
  Clock,
  Satellite,
  Layers,
  Star,
  ArrowRight,
  Flame,
  Leaf,
  Sun,
  Bell,
  Siren,
  TreePine,
  Code,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import ProductPreview from "@/components/product-preview";
import StatsCounter from "@/components/stats-counter";
import PartnerLogos from "@/components/partner-logos";
import PipelineDiagram from "@/components/pipeline-diagram";
import NewsletterSignup from "@/components/newsletter-signup";
import {
  FEATURES,
  STATS,
  HOW_IT_WORKS,
  TESTIMONIALS,
  USE_CASES,
} from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  Satellite: <Satellite className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
 Flame: <Flame className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Bell: <Bell className="w-6 h-6" />,
  Siren: <Siren className="w-6 h-6" />,
  TreePine: <TreePine className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
};

const iconMapLg: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Brain: <Brain className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  Satellite: <Satellite className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
  Leaf: <Leaf className="w-8 h-8" />,
  Sun: <Sun className="w-8 h-8" />,
  Bell: <Bell className="w-8 h-8" />,
  Siren: <Siren className="w-8 h-8" />,
  TreePine: <TreePine className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
};

export default function Home() {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  const topFeatures = FEATURES.slice(0, 4);
  const moreFeatures = FEATURES.slice(4);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="main-content" className="relative flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Animated gradient orb - max-w-full prevents mobile overflow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[600px] rounded-full bg-[radial-gradient(circle,rgba(65,182,196,0.2)_0%,rgba(46,154,173,0.1)_40%,transparent_70%)] animate-orb-float blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] max-w-full h-[400px] rounded-full bg-[radial-gradient(circle,rgba(35,101,119,0.15)_0%,transparent_70%)] animate-glow-pulse blur-2xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left">
              <AnimatedSection>
                <div className="text-xs text-brand-400 mb-4 font-semibold">
                  Environmental underwriting platform
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight">
                  Quantify Climate Risk{" "}
                  <span className="gradient-text">Before You Invest</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-navy-300">
                  Satellite-powered environmental underwriting for real estate.
                  Quantify flood, wildfire, and heat exposure across your entire
                  portfolio—before it shows up in your loss ratios.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <Link
                    href="/pricing#signup"
                    className="rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-600 transition-colors flex items-center gap-2 shadow-lg shadow-brand-500/20"
                  >
                    Start Free <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="mailto:sales@terracube.io?subject=Book%20Demo"
                    className="rounded-lg border border-brand-500/40 px-8 py-3.5 text-base font-medium text-brand-400 hover:bg-brand-500/10 transition-colors"
                  >
                    Book Demo
                  </Link>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-xs text-navy-500">
                  <span>No credit card</span>
                  <span>·</span>
                  <span>5 properties free</span>
                  <span>·</span>
                  <span>Pay-per-call</span>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Product Preview */}
            <AnimatedSection delay={0.2}>
              <ProductPreview />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <PartnerLogos />

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-navy-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <StatsCounter value={stat.value} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Bar */}
      <section className="py-10 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-6">
              <h3 className="text-sm font-semibold text-brand-400">
                Powered by world-class data
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-navy-400">
              {["NASA", "ESA Sentinel", "NOAA GFS", "MODIS", "CMIP6", "ERA5", "VIIRS"].map((source) => (
                <span key={source} className="hover:text-brand-400 transition-colors">
                  {source}
                </span>
              ))}
              <Link
                href="/data-sources"
                className="text-brand-400 hover:text-brand-300 transition-colors flex items-center gap-1 font-medium"
              >
                View all data sources <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              The Full {""}
              <span className="gradient-text">Environmental Underwriting</span>{" "}
              Stack
            </h2>
            <p className="mt-4 text-navy-400 max-w-2xl mx-auto">
              12 satellite-driven modules covering every environmental risk
              factor - from wildfire and flood to carbon credits and parametric
              insurance triggers.
            </p>
          </AnimatedSection>

          {/* Top 4 featured - larger 2-column cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {topFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-8 h-full hover:scale-[1.02] hover:glow-brand transition-all duration-300 border border-brand-500/10">
                  <div className="w-14 h-14 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5">
                    {iconMapLg[feature.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-navy-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Toggle for remaining features */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowMoreFeatures((prev) => !prev)}
              aria-expanded={showMoreFeatures}
              aria-controls="more-features"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-500/40 px-6 py-3 text-sm font-medium text-brand-400 hover:bg-brand-500/10 transition-colors"
            >
              {showMoreFeatures ? "Show fewer features" : "Show more features"}
              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  showMoreFeatures ? "rotate-[-90deg]" : "rotate-90"
                }`}
              />
            </button>
          </div>

          {/* Remaining 8 features - smaller 4-column cards, collapsible */}
          <div
            id="more-features"
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
              showMoreFeatures
                ? "mt-6 max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {moreFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.06}>
                <div className="glass rounded-xl p-5 h-full hover:scale-[1.02] hover:glow-brand transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-3">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-navy-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              How It <span className="gradient-text">Works</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Steps */}
            <div className="flex-1">
              <div className="relative max-w-xl mx-auto">
                {/* Connecting line */}
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-brand-500/60 via-brand-400/30 to-transparent hidden sm:block" />

                <div className="space-y-8">
                  {HOW_IT_WORKS.map((step, i) => (
                    <AnimatedSection key={step.step} delay={i * 0.15}>
                      <div className="flex gap-6 items-start">
                        <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-brand-500/30">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-navy-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>

            {/* Pipeline diagram */}
            <AnimatedSection delay={0.2} className="flex-1 hidden lg:block">
              <PipelineDiagram />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Built for <span className="gradient-text">Your Role</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((useCase, i) => (
              <AnimatedSection key={useCase.role} delay={i * 0.1}>
                <Link href="/use-cases" className="block h-full">
                  <div className="glass rounded-xl p-6 h-full hover:scale-[1.02] hover:glow-brand transition-all duration-300 border border-brand-500/10">
                    <div
                      className="text-xs font-semibold mb-3"
                      style={{ color: useCase.color }}
                    >
                      {useCase.role}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {useCase.headline}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    <div className="flex items-center gap-1 text-brand-400 text-sm font-medium mt-auto">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview removed - replaced by use cases */}

      {/* Testimonials */}
      <section className="py-16 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4" role="img" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-brand-400 text-brand-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-navy-200 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-xs text-navy-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600/30 via-brand-500/20 to-navy-900 p-8 sm:p-12 text-center border border-brand-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Start Measuring Climate Risk Today
              </h2>
              <p className="mt-4 text-navy-300 max-w-2xl mx-auto">
                Every day without satellite-grade environmental data is another
                day of unpriced risk in your portfolio. Start with 5 properties
                free—no credit card, no commitment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/pricing#signup"
                  className="rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-600 transition-colors flex items-center gap-2 shadow-lg shadow-brand-500/20"
                >
                  Start Free <ArrowRight size={18} />
                </Link>
                <Link
                  href="mailto:sales@terracube.io?subject=Enterprise%20Inquiry"
                  className="rounded-lg border border-brand-500/40 px-8 py-3.5 text-base font-medium text-brand-400 hover:bg-brand-500/10 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      <Footer />
    </>
  );
}
