"use client";

import AnimatedSection from "@/components/animated-section";

const partners = [
  { name: "NASA", letterSpacing: "0.3em" },
  { name: "ESA", letterSpacing: "0.3em" },
  { name: "NOAA", letterSpacing: "0.25em" },
  { name: "ECMWF", letterSpacing: "0.2em" },
  { name: "Google Earth Engine", letterSpacing: "0.1em" },
];

export default function PartnerLogos() {
  return (
    <section className="py-10 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-navy-500 mb-8">
            Trusted by leading insurers and investors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300"
              >
                {/* Stylized text logos with satellite/space aesthetic */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-navy-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {partner.name === "NASA" && (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </>
                  )}
                  {partner.name === "ESA" && (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M4 12 L20 12" />
                      <path d="M12 4 L12 20" />
                      <circle cx="12" cy="12" r="5" />
                    </>
                  )}
                  {partner.name === "NOAA" && (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M6 8 Q9 4 12 8 Q15 12 18 8" />
                      <path d="M6 14 Q9 10 12 14 Q15 18 18 14" />
                    </>
                  )}
                  {partner.name === "ECMWF" && (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                    </>
                  )}
                  {partner.name === "Google Earth Engine" && (
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2 L12 22" />
                      <path d="M2 12 L22 12" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M8 8 L16 16" />
                      <path d="M16 8 L8 16" />
                    </>
                  )}
                </svg>
                <span
                  className="text-sm sm:text-base font-semibold text-navy-400 tracking-wider"
                  style={{ letterSpacing: partner.letterSpacing }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
