"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";
      const res = await fetch(`${apiUrl}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.detail || "Subscription failed");
      }
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass rounded-2xl p-8 sm:p-12 border border-brand-500/10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Icon + text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 text-brand-400 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Stay Ahead of Climate Risk
                </h3>
                <p className="mt-3 text-navy-300 max-w-lg">
                  Get monthly insights on satellite-powered underwriting, new risk
                  models, and environmental data trends. No spam - just the data
                  that matters.
                </p>
              </div>

              {/* Form */}
              <div className="w-full lg:w-auto lg:min-w-[380px]">
                {submitted ? (
                  <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 p-6 text-center">
                    <div className="text-brand-400 font-semibold">You&apos;re subscribed!</div>
                    <p className="text-sm text-navy-300 mt-1">
                      Watch your inbox for the next climate risk briefing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="flex-1 rounded-lg bg-navy-900/80 border border-white/10 px-4 py-3 text-sm text-navy-100 placeholder:text-navy-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20 whitespace-nowrap disabled:opacity-50"
                      >
                        {loading ? "Subscribing..." : "Subscribe"} {!loading && <ArrowRight size={16} />}
                      </button>
                    </div>
                    {error && <p className="text-xs text-red-400">{error}</p>}
                    <p className="text-xs text-navy-500">
                      Free monthly newsletter. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
