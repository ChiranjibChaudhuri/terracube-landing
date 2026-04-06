"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { PRICING_TIERS } from "@/lib/constants";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
              Start free and scale as your portfolio grows. No hidden fees, no
              long-term contracts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PRICING_TIERS.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`rounded-xl p-6 h-full flex flex-col ${
                    tier.highlighted
                      ? "glass border-brand-500/40 border glow-brand"
                      : "glass"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="text-xs font-medium text-brand-400 mb-2">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-navy-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-navy-400">
                    {tier.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check
                            size={16}
                            className="text-brand-400 mt-0.5 flex-shrink-0"
                          />
                        ) : (
                          <X
                            size={16}
                            className="text-navy-600 mt-0.5 flex-shrink-0"
                          />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-navy-200" : "text-navy-600"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.name === "Enterprise" ? "/about" : "/marketplace"}
                    className={`mt-8 block rounded-lg px-4 py-3 text-sm font-medium text-center transition-colors ${
                      tier.highlighted
                        ? "bg-brand-500 text-white hover:bg-brand-600"
                        : "border border-brand-500/30 text-brand-400 hover:bg-brand-500/10"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">
              Feature Comparison
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-4 px-6 text-navy-400 font-medium">
                        Feature
                      </th>
                      <th className="text-center py-4 px-6 text-navy-400 font-medium">
                        Free
                      </th>
                      <th className="text-center py-4 px-6 text-brand-400 font-medium">
                        Pro
                      </th>
                      <th className="text-center py-4 px-6 text-navy-400 font-medium">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Properties", "5", "50", "Unlimited"],
                      ["Risk models", "Basic", "Full suite", "Custom"],
                      ["Reports", "Monthly", "Weekly", "Real-time"],
                      ["AI Agent", "\u2014", "\u2713", "\u2713"],
                      ["Workflows", "\u2014", "\u2713", "Advanced"],
                      ["API access", "\u2014", "\u2713", "Full"],
                      ["Support", "Email", "Priority", "Dedicated + SLA"],
                    ].map(([feature, free, pro, enterprise]) => (
                      <tr
                        key={feature}
                        className="border-b border-white/5 last:border-0"
                      >
                        <td className="py-3 px-6 text-navy-200">{feature}</td>
                        <td className="py-3 px-6 text-center text-navy-400">
                          {free}
                        </td>
                        <td className="py-3 px-6 text-center text-white">
                          {pro}
                        </td>
                        <td className="py-3 px-6 text-center text-navy-300">
                          {enterprise}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
