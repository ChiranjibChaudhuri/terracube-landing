import { SECURITY_FEATURES, COMPLIANCE_BADGES } from '@/lib/constants';
import { Lock, Key, Globe, Shield, Activity, AlertTriangle } from 'lucide-react';

const iconMap: Record<string, any> = {
  Lock,
  Key,
  Globe,
  Shield,
  Activity,
  AlertTriangle
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enterprise-Grade Security by Default
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for financial institutions, insurance carriers, and real estate funds. SOC 2, GDPR compliant, with 99.9% uptime SLA.
          </p>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {COMPLIANCE_BADGES.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
              >
                <Shield className="h-5 w-5 text-brand-400" />
                <span className="text-white font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="relative group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm hover:border-brand-400/50 transition-all duration-300"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-400/0 to-brand-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="h-8 w-8 text-brand-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Questions about security?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Talk to our team about enterprise security requirements, custom SLAs, and data residency options.
            </p>
            <a
              href="mailto:sales@terracube.io"
              className="inline-block px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
