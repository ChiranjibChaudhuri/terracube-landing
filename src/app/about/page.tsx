"use client";

import Link from "next/link";
import { Globe, Cpu, Satellite, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";

const team = [
  { name: "Alex Mercer", role: "CEO & Co-Founder", initials: "AM" },
  { name: "Priya Sharma", role: "CTO & Co-Founder", initials: "PS" },
  { name: "Jordan Ellis", role: "Head of Data Science", initials: "JE" },
];

const technologies = [
  {
    icon: <Satellite className="w-6 h-6" />,
    title: "Google Earth Engine",
    description:
      "Petabytes of satellite imagery and geospatial datasets processed in real-time to monitor environmental conditions around every property.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI & Machine Learning",
    description:
      "Custom-trained models that analyze patterns in environmental data to predict risks, estimate energy usage, and surface actionable insights.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Satellite Data Fusion",
    description:
      "Multi-source satellite data integration combining optical, radar, and thermal imagery for comprehensive property assessment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About <span className="gradient-text">TerraCube</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
              We&apos;re building the future of property intelligence by
              connecting real estate with Earth observation technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="mt-6 text-navy-300 leading-relaxed">
                The real estate industry makes trillion-dollar decisions with
                incomplete information. Environmental risk, energy performance,
                and climate resilience are critical factors that traditional
                property analysis overlooks.
              </p>
              <p className="mt-4 text-navy-300 leading-relaxed">
                TerraCube was founded to bridge this gap. By combining satellite
                imagery, AI, and deep domain expertise, we give property
                professionals the Earth intelligence they need to evaluate risk,
                optimize energy performance, and build resilient portfolios.
              </p>
              <p className="mt-4 text-navy-300 leading-relaxed">
                Our platform processes petabytes of satellite data daily,
                translating complex environmental signals into clear, actionable
                insights that anyone can use — no geospatial expertise required.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Powered by <span className="gradient-text">Science</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <AnimatedSection key={tech.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {tech.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Our <span className="gradient-text">Team</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto sm:max-w-none">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-500/15 flex items-center justify-center text-brand-400 text-xl font-bold mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-navy-400">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white">
              Experience Earth Intelligence
            </h2>
            <p className="mt-4 text-navy-300 max-w-xl mx-auto">
              Explore the Vault Neo marketplace and see what satellite-powered
              property analysis can do for your portfolio.
            </p>
            <Link
              href="/marketplace"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white hover:bg-brand-600 transition-colors"
            >
              Explore Marketplace <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
