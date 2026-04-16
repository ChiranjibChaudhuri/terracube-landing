"use client";

import Link from "next/link";
import { Check, X, Shield, Zap, Globe } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { PRICING_MODEL } from "@/lib/constants";

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
              Analyze 5 properties free. Scale to thousands as your underwriting
              needs grow — no hidden fees, no long-term contracts.
            </p>
          </AnimatedSection>

          {/* Value props */}
          <AnimatedSection delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: <Shield size={18} />, text: "No credit card required" },
                { icon: <Zap size={18} />, text: "Set up in 5 minutes" },
                { icon: <Globe size={18} />, text: "Cancel anytime" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-navy-300">
                  <span className="text-brand-400">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
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
                    href={
                      tier.name === "Enterprise"
                        ? "mailto:sales@terracube.com?subject=Enterprise%20Inquiry"
                        : tier.name === "Free"
                          ? "/marketplace"
                          : "/marketplace"
                    }
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

      {/* Feature comparison */}
      <section id="signup" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">
              Feature Comparison
            </h2>
            <p className="mt-3 text-sm text-navy-400 max-w-lg mx-auto">
              See exactly what&apos;s included in each plan
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass rounded-xl overflow-hidden border border-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <caption className="sr-only">Feature comparison across Free, Pro, and Enterprise tiers</caption>
                  <thead>
                    <tr className="border-b border-white/5 bg-navy-900/40">
                      <th className="text-left py-4 px-6 text-navy-400 font-medium">
                        Feature
                      </th>
                      <th className="text-center py-4 px-6 text-navy-400 font-medium">
                        Free
                      </th>
                      <th className="text-center py-4 px-6 font-medium">
                        <span className="text-brand-400">Pro</span>
                        <div className="text-[10px] text-brand-500/60 mt-0.5">recommended</div>
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
                      ["Data retention", "30 days", "1 year", "Unlimited"],
                      ["SSO / SAML", "\u2014", "\u2014", "\u2713"],
                    ].map(([feature, free, pro, enterprise]) => (
                      <tr
                        key={feature}
                        className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-3.5 px-6 text-navy-200 font-medium">{feature}</td>
                        <td className="py-3.5 px-6 text-center text-navy-400">
                          {free === "\u2713" ? (
                            <Check size={16} className="text-brand-400 inline" />
                          ) : (
                            free
                          )}
                        </td>
                        <td className="py-3.5 px-6 text-center text-white bg-brand-500/[0.03]">
                          {pro === "\u2713" ? (
                            <Check size={16} className="text-brand-400 inline" />
                          ) : (
                            pro
                          )}
                        </td>
                        <td className="py-3.5 px-6 text-center text-navy-300">
                          {enterprise === "\u2713" ? (
                            <Check size={16} className="text-brand-400 inline" />
                          ) : (
                            enterprise
                          )}
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

      {/* FAQ section */}
      <section className="py-16 bg-navy-900/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans at any time?",
                a: "Yes. Upgrade or downgrade instantly from your dashboard. Pro-rated billing is handled automatically.",
              },
              {
                q: "What counts as a \"property\"?",
                a: "Each unique address or parcel ID counts as one property. Re-running analyses on the same property doesn't count again.",
              },
              {
                q: "Is there a long-term contract?",
                a: "No. All plans are month-to-month. Enterprise customers can opt for annual billing with a discount.",
              },
              {
                q: "How accurate is the satellite data?",
                a: "We use 10-30m resolution satellite imagery from Sentinel, Landsat, and MODIS, processed through Google Earth Engine with 50+ validated risk models.",
              },
            ].map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.08}>
                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm text-navy-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
