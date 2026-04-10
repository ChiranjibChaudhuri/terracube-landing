"use client";

import Link from "next/link";
import { Globe, Cpu, Satellite, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";

const team = [
  {
    name: "Alex Mercer",
    role: "CEO & Co-Founder",
    initials: "AM",
    bio: "Former VP at Marsh McLennan. 15 years in insurance and reinsurance. Led climate risk strategy for $2B+ portfolios.",
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    initials: "PS",
    bio: "Ex-Google Earth Engine team. PhD in remote sensing from MIT. Built satellite pipelines processing 10M+ km² daily.",
  },
  {
    name: "Jordan Ellis",
    role: "Head of Data Science",
    initials: "JE",
    bio: "Former NASA JPL researcher. Specializes in ML-driven geospatial analysis and climate model interpolation.",
  },
  {
    name: "Carlos Mendez",
    role: "Head of Product",
    initials: "CM",
    bio: "Built underwriting platforms at Guidewire and Verisk. Deep expertise in P&C insurance workflows.",
  },
  {
    name: "Dr. Aisha Okafor",
    role: "Lead Climate Scientist",
    initials: "AO",
    bio: "IPCC contributing author. Expert in CMIP6 climate projections and compound hazard modeling.",
  },
  {
    name: "Ryan Park",
    role: "Head of Engineering",
    initials: "RP",
    bio: "Scaled real-time data platforms at Stripe and Palantir. Passionate about making geospatial data accessible.",
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
  { year: "2023", event: "Founded with $4M seed round" },
  { year: "2023", event: "Google Earth Engine partnership" },
  { year: "2024", event: "10,000 properties underwritten" },
  { year: "2024", event: "Series A — $18M raised" },
  { year: "2025", event: "50+ risk models launched" },
  { year: "2025", event: "Enterprise tier with custom models" },
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
                <h2 className="text-3xl font-bold">
                  Our <span className="gradient-text">Mission</span>
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
                  <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-6">
                    Our Journey
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
            <h2 className="text-3xl font-bold">
              Powered by <span className="gradient-text">Science</span>
            </h2>
            <p className="mt-4 text-navy-400 max-w-2xl mx-auto">
              Our technology stack combines cutting-edge satellite imagery with
              advanced machine learning to deliver unmatched environmental intelligence.
            </p>
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

          {/* Visual data sources bar */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 glass rounded-xl p-6 border border-white/5">
              <div className="text-xs text-navy-500 uppercase tracking-wider text-center mb-4">
                Data Sources We Process
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {[
                  "Sentinel-1", "Sentinel-2", "Sentinel-5P", "Landsat 8/9",
                  "MODIS", "VIIRS", "ERA5", "GEDI", "SRTM DEM", "Hansen GFC",
                ].map((source) => (
                  <span key={source} className="text-xs text-navy-400 font-mono">
                    {source}
                  </span>
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
            <h2 className="text-3xl font-bold">
              Our <span className="gradient-text">Team</span>
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-600/10 border border-brand-500/30 flex items-center justify-center text-brand-400 text-xl font-bold mx-auto mb-4 group-hover:border-brand-400/50 transition-colors">
                    {member.initials}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white">
              See What Your Portfolio Is Really Exposed To
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

      <Footer />
    </>
  );
}
