"use client";

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
  Code,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import {
  FEATURES,
  STATS,
  HOW_IT_WORKS,
  TESTIMONIALS,
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
  Code: <Code className="w-6 h-6" />,
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(65,182,196,0.2)_0%,rgba(46,154,173,0.1)_40%,transparent_70%)] animate-orb-float blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(35,101,119,0.15)_0%,transparent_70%)] animate-glow-pulse blur-2xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              Earth Intelligence for{" "}
              <span className="gradient-text">Smarter Real Estate</span>{" "}
              Decisions
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-navy-300">
              Harness satellite data, AI-powered risk models, and real-time
              environmental analytics to make confident property decisions.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/marketplace"
                className="rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors flex items-center gap-2"
              >
                Explore Marketplace <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-brand-500/40 px-6 py-3 text-base font-medium text-brand-400 hover:bg-brand-500/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-navy-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <AnimatedSection key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-navy-400">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything You Need for{" "}
              <span className="gradient-text">Property Intelligence</span>
            </h2>
            <p className="mt-4 text-navy-400 max-w-2xl mx-auto">
              A comprehensive suite of tools designed to give you an
              unprecedented view of your real estate portfolio.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 h-full hover:scale-[1.02] hover:glow-brand transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              How It <span className="gradient-text">Works</span>
            </h2>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Connecting line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-brand-500/60 via-brand-400/30 to-transparent hidden sm:block" />

            <div className="space-y-12">
              {HOW_IT_WORKS.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 0.15}>
                  <div className="flex gap-6 items-start">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-lg font-bold text-white">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-navy-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 sm:p-12 text-center glow-brand">
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">Vault Neo</span> Marketplace
              </h2>
              <p className="mt-4 text-navy-300 max-w-2xl mx-auto">
                Access our full catalog of Earth intelligence services — risk
                monitoring, energy estimation, AI agents, workflow automation,
                and more — all in one integrated platform.
              </p>
              <button
                onClick={() =>
                  window.open("http://localhost:3000", "_blank")
                }
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors"
              >
                Launch Vault Neo <ArrowRight size={18} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Trusted by{" "}
              <span className="gradient-text">Industry Leaders</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-brand-400 text-brand-400"
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600/30 via-brand-500/20 to-navy-900 p-8 sm:p-16 text-center border border-brand-500/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Transform Your Property Analysis?
              </h2>
              <p className="mt-4 text-navy-300 max-w-xl mx-auto">
                Join thousands of real estate professionals using Earth
                intelligence to make smarter decisions.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-8 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors"
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
