"use client";

import Link from 'next/link';
import AnimatedSection from '@/components/animated-section';
import { CASE_STUDIES } from '@/lib/constants';

const industryColors: Record<string, string> = {
  'Insurance': '#3B82F6',
  'Real Estate Investment': '#10B981',
  'Mortgage Lending': '#8B5CF6',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section with Stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Real Results from Real Portfolios
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300 mb-12">
              See how leading firms use TerraCube to identify risks, prevent losses, and make faster decisions.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {CASE_STUDIES.map((study, index) => (
                <AnimatedSection
                  key={study.company}
                  delay={0.2 + index * 0.1}
                  className="rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 p-6 backdrop-blur-sm border border-teal-500/20"
                >
                  <div className="text-4xl font-bold text-teal-400 mb-2">
                    {study.stat}
                  </div>
                  <div className="text-sm text-gray-300">
                    {study.statLabel}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {CASE_STUDIES.map((study, index) => (
            <AnimatedSection
              key={study.company}
              delay={index * 0.2}
              className="mb-24 last:mb-0"
            >
              {/* Industry Badge */}
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  backgroundColor: `${industryColors[study.industry]}15`,
                  color: industryColors[study.industry]
                }}
              >
                {study.industry}
              </div>

              {/* Company Name */}
              <h3 className="text-xl font-semibold text-gray-400 mb-3">
                {study.company}
              </h3>

              {/* Headline */}
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
                {study.headline}
              </h2>

              {/* Content */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-teal-400 uppercase tracking-wide mb-2">
                    Result
                  </h4>
                  <p className="text-white font-semibold leading-relaxed">
                    {study.result}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-teal-500 pl-6 py-4 bg-gradient-to-r from-teal-500/10 to-transparent rounded-r-lg mb-4">
                <p className="text-lg text-gray-200 italic mb-4">
                  "{study.quote}"
                </p>
                <footer className="text-sm text-gray-400">
                  <span className="font-semibold text-white">{study.quoteName}</span>
                  <br />
                  {study.quoteTitle}
                </footer>
              </blockquote>

              {/* Divider (except for last item) */}
              {index < CASE_STUDIES.length - 1 && (
                <div className="mt-24 border-t border-gray-700"></div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <AnimatedSection>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              See how TerraCube can work for your portfolio
            </h2>
            <Link
              href="mailto:sales@terracube.io"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-400 transition-colors"
            >
              Book Demo
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
