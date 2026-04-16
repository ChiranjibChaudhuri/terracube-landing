"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { UsageCalculator } from "@/components/usage-calculator";
import { PRICING_MODEL, SERVICE_PRICING, PRICING_FAQ } from "@/lib/constants";

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
              Pay only for what you use. Start free.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {Object.values(PRICING_MODEL).map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div
                  className={`rounded-xl p-6 h-full flex flex-col relative ${
                    tier.highlighted
                      ? "glass border-brand-500/40 border glow-brand"
                      : "glass"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-xs font-semibold px-4 py-1 rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/30">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mt-1">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-navy-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-navy-400">
                    {tier.description}
                  </p>

                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-brand-400" />
                        </div>
                        <span className="text-sm text-navy-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.ctaHref}
                    className={`mt-8 block rounded-lg px-4 py-3 text-sm font-medium text-center transition-colors ${
                      tier.highlighted
                        ? "bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/20"
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

      {/* Service Pricing Table */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Service <span className="gradient-text">Pricing</span>
            </h2>
            <p className="mt-4 text-navy-400">
              Per-API-call pricing for every service
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl overflow-hidden border border-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <caption className="sr-only">Service pricing per API call</caption>
                  <thead>
                    <tr className="border-b border-white/5 bg-navy-900/40">
                      <th className="text-left py-4 px-6 text-navy-400 font-medium">
                        Service
                      </th>
                      <th className="text-right py-4 px-6 text-navy-400 font-medium">
                        Price
                      </th>
                      <th className="text-right py-4 px-6 text-navy-400 font-medium">
                        Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SERVICE_PRICING.map((service) => (
                      <tr
                        key={service.name}
                        className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-3.5 px-6 text-navy-200 font-medium">{service.name}</td>
                        <td className="py-3.5 px-6 text-right text-brand-400 font-semibold">
                          {service.price}
                        </td>
                        <td className="py-3.5 px-6 text-right text-navy-400">
                          {service.unit}
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

      {/* Usage Calculator */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <UsageCalculator />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {PRICING_FAQ.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.05}>
                <div
                  className="glass rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/20 transition-colors cursor-pointer"
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-5">
                    <h3 className="font-semibold text-white pr-4">{faq.q}</h3>
                    {openFaqIndex === i ? (
                      <ChevronUp size={18} className="text-brand-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-navy-400 flex-shrink-0" />
                    )}
                  </div>
                  {openFaqIndex === i && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-navy-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-brand-600/30 via-brand-500/20 to-navy-900 p-8 sm:p-12 text-center border border-brand-500/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Need Custom SLAs?
              </h2>
              <p className="mt-4 text-navy-300 max-w-lg mx-auto">
                Large portfolios, volume discounts, dedicated support, and custom data residency options available.
              </p>
              <Link
                href="mailto:sales@terracube.io?subject=Enterprise%20Inquiry"
                className="mt-6 inline-block rounded-lg bg-brand-500 px-8 py-3 text-base font-semibold text-white hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
              >
                Book Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
