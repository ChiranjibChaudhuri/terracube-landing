"use client";

import Link from 'next/link';
import AnimatedSection from '@/components/animated-section';
import { USE_CASES } from '@/lib/constants';

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Built for Climate Risk Professionals
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-navy-300">
              From underwriting decisions to board-level reporting, TerraCube delivers the climate intelligence your team needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Persona Sections */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {USE_CASES.map((useCase, index) => (
            <AnimatedSection
              key={useCase.role}
              delay={index * 0.2}
              className="mb-24 last:mb-0"
            >
              <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Text Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                    style={{
                      backgroundColor: `${useCase.color}15`,
                      color: useCase.color
                    }}
                  >
                    {useCase.role}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                    {useCase.headline}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-300 mb-2">The Challenge</h3>
                      <p className="text-navy-400 leading-relaxed">
                        {useCase.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                      <p className="text-navy-100 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Mockup */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div
                    className="relative rounded-2xl p-8 backdrop-blur-sm border"
                    style={{
                      backgroundColor: `${useCase.color}10`,
                      borderColor: `${useCase.color}30`
                    }}
                  >
                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div
                          className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${useCase.color}20` }}
                        >
                          <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: useCase.color }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{useCase.role} Dashboard</h3>
                        <p className="text-sm text-navy-400">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-navy-900 to-navy-950">
        <AnimatedSection>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              Ready to see it in action?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-400 transition-colors"
              >
                Start Free
              </Link>
              <Link
                href="mailto:sales@terracube.io"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 transition-colors border border-white/20"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
