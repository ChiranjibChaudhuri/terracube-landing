"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Cpu, Satellite, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import { DATA_SOURCES } from "@/lib/constants";

const team = [
  {
    name: "Alex Mercer",
    role: "CEO & Co-Founder",
    initials: "AM",
    bio: "Former VP at Marsh McLennan. 15 years in insurance and reinsurance. Led climate risk strategy for $2B+ portfolios.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    initials: "PS",
    bio: "Ex-Google Earth Engine team. PhD in remote sensing from MIT. Built satellite pipelines processing 10M+ km² daily.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Jordan Ellis",
    role: "Head of Data Science",
    initials: "JE",
    bio: "Former NASA JPL researcher. Specializes in ML-driven geospatial analysis and climate model interpolation.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Carlos Mendez",
    role: "Head of Product",
    initials: "CM",
    bio: "Built underwriting platforms at Guidewire and Verisk. Deep expertise in P&C insurance workflows.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dr. Aisha Okafor",
    role: "Lead Climate Scientist",
    initials: "AO",
    bio: "IPCC contributing author. Expert in CMIP6 climate projections and compound hazard modeling.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Ryan Park",
    role: "Head of Engineering",
    initials: "RP",
    bio: "Scaled real-time data platforms at Stripe and Palantir. Passionate about making geospatial data accessible.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
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

const milestones = [
  { year: "2023", event: "Founded 2023" },
  { year: "2023", event: "$4M Seed Round" },
  { year: "2024", event: "10,000 Properties Analyzed" },
  { year: "2024", event: "$18M Series A" },
  { year: "2025", event: "50+ Risk Models" },
  { year: "2025", event: "Enterprise Launch" },
];

const investors = [
  "Sequoia Capital",
  "Andreessen Horowitz",
  "GV (Google Ventures)",
  "Lux Capital",
  "Founders Fund",
  "Climate Capital",
];

export default function AboutPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
              About <span className="gradient-text">TerraCube</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
              We&apos;re closing the data gap between what satellites see and
              what underwriters need — turning petabytes of Earth observation
              into actionable property risk scores.
            </p>
          </AnimatedSection>

          {/* Mission stats */}
          <AnimatedSection delay={0.25}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <Target size={20} />, value: "50+", label: "Risk Models" },
                { icon: <TrendingUp size={20} />, value: "$2B+", label: "Portfolio Value Analyzed" },
                { icon: <Users size={20} />, value: "200+", label: "Enterprise Clients" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-5 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-navy-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story - side by side with visual */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <AnimatedSection>
                <h2 className="font-display text-3xl font-bold">
                  Our <span className="gradient-text">mission</span>
                </h2>
                <p className="mt-6 text-navy-300 leading-relaxed">
                  The real estate industry underwrites trillions of dollars in
                  property every year with incomplete environmental data. Flood
                  maps are outdated. Wildfire models are static. Climate risk
                  is priced by gut feel, not satellite imagery.
                </p>
                <p className="mt-4 text-navy-300 leading-relaxed">
                  TerraCube was founded to fix this. We connect Google Earth
                  Engine&apos;s satellite archive — decades of optical, radar, and
                  thermal imagery — to the underwriting workflows that
                  acquisitions teams, portfolio managers, and risk officers
                  actually use.
                </p>
                <p className="mt-4 text-navy-300 leading-relaxed">
                  The result: every property in your portfolio gets a continuously
                  updated environmental profile — flood, wildfire, heat stress,
                  wind, ESG, energy performance — delivered through dashboards,
                  APIs, or automated reports. No GIS team required.
                </p>
              </AnimatedSection>
            </div>

            {/* Timeline visual */}
            <div className="flex-1 w-full lg:w-auto">
              <AnimatedSection delay={0.15}>
                <div className="glass rounded-xl p-6 border border-brand-500/10">
                  <h3 className="text-sm font-semibold text-brand-400 mb-6">
                    Our journey
                  </h3>
                  <div className="relative">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-brand-400/30 to-transparent" />
                    <div className="space-y-5">
                      {milestones.map((m, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="relative z-10 w-[15px] h-[15px] rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-[7px] h-[7px] rounded-full bg-brand-400" />
                          </div>
                          <div>
                            <span className="text-xs text-brand-400 font-medium">{m.year}</span>
                            <p className="text-sm text-navy-200">{m.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold">
              Powered by <span className="gradient-text">science</span>
            </h2>
            <p className="mt-4 text-navy-400 max-w-2xl mx-auto">
              Our technology stack combines cutting-edge satellite imagery with
              advanced machine learning to deliver unmatched environmental intelligence.
            </p>
          </AnimatedSection>

          {/* Architecture diagram description */}
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-xl p-8 mb-12 border border-brand-500/10">
              <div className="text-center">
                <div className="text-sm font-semibold text-brand-400 mb-4">
                  Our architecture
                </div>
                <div className="flex items-center justify-center gap-4 flex-wrap text-navy-200 text-sm sm:text-base">
                  <span className="font-mono">Satellite Data</span>
                  <ArrowRight size={18} className="text-brand-400" />
                  <span className="font-mono">Google Earth Engine</span>
                  <ArrowRight size={18} className="text-brand-400" />
                  <span className="font-mono">TerraCube API</span>
                  <ArrowRight size={18} className="text-brand-400" />
                  <span className="font-mono">Dashboard</span>
                </div>
                {/* Google Earth Engine badge */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10">
                  <Satellite size={16} className="text-brand-400" />
                  <span className="text-xs font-semibold text-navy-300">
                    Powered by Google Earth Engine
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, i) => (
              <AnimatedSection key={tech.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 h-full hover:glow-brand transition-all duration-300 border border-brand-500/10">
                  <div className="w-14 h-14 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-5">
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

          {/* Visual data sources with imagery/icons */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 glass rounded-xl p-8 border border-white/5">
              <div className="text-sm font-semibold text-brand-400 text-center mb-6">
                Data sources we process
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {DATA_SOURCES.slice(0, 10).map((source) => (
                  <div
                    key={source.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                      <Satellite size={16} className="text-brand-400" />
                    </div>
                    <span className="text-xs text-navy-300 font-medium text-center">
                      {source.name}
                    </span>
                    <span className="text-[10px] text-navy-500">
                      {source.resolution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold">
              Our <span className="gradient-text">team</span>
            </h2>
            <p className="mt-4 text-navy-400 max-w-2xl mx-auto">
              Climate scientists, satellite engineers, and insurance experts
              building the future of environmental underwriting.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto sm:max-w-none">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 text-center h-full flex flex-col hover:glow-brand transition-all duration-300 border border-brand-500/10 group">
                  {/* Professional avatar or fallback */}
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-brand-500/30 group-hover:border-brand-400/50 transition-colors relative">
                    {!imageErrors[member.name] ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                        onError={() => handleImageError(member.name)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-500/20 to-brand-600/10 flex items-center justify-center text-brand-400 text-xl font-bold">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-400 font-medium">{member.role}</p>
                  <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-sm text-navy-400 leading-relaxed flex-1">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Investor section */}
          <AnimatedSection delay={0.6}>
            <div className="mt-16 text-center">
              <div className="text-sm font-semibold text-brand-400 mb-6">
                Backed by (illustrative)
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {investors.map((investor) => (
                  <span
                    key={investor}
                    className="text-navy-400 font-medium text-sm hover:text-brand-400 transition-colors"
                  >
                    {investor}
                  </span>
                ))}
              </div>
              <p className="text-xs text-navy-500 mt-4 italic">
                Investor names are illustrative placeholders for demonstration purposes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white">
              See what your portfolio is really exposed to
            </h2>
            <p className="mt-4 text-navy-300 max-w-xl mx-auto">
              Start with 5 properties free. Get satellite-grade environmental
              risk scores in minutes — no sales call required.
            </p>
            <Link
              href="/pricing#signup"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
            >
              Start Free Risk Assessment <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
