import { DATA_SOURCES } from '@/lib/constants';
import { Satellite, Layers, Wind, Thermometer, Flame, CloudRain, Clock, TrendingUp, Mountain, Droplets } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  Satellite,
  Layers,
  Wind,
  Thermometer,
  Flame,
  CloudRain,
  Clock,
  TrendingUp,
  Mountain,
  Droplets
};

export default function DataSourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            World-class satellite and weather data
          </h1>
          <p className="text-xl text-navy-400 max-w-3xl mx-auto">
            10 data sources from NASA, ESA, NOAA, and ECMWF — powering 34 risk indices with real-time satellite and weather data.
          </p>
        </div>
      </section>

      {/* Data Sources Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {DATA_SOURCES.map((source) => {
              const Icon = iconMap[source.icon];
              return (
                <div
                  key={source.name}
                  className="relative group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm hover:border-brand-400/50 transition-all duration-300"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-400/0 to-brand-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="h-8 w-8 text-brand-400" />
                    </div>

                    {/* Name */}
                    <h3 className="font-bold text-white mb-2">{source.name}</h3>

                    {/* Provider Badge */}
                    <div className="inline-block px-2 py-1 rounded-md bg-white/5 text-xs text-navy-400 mb-3">
                      {source.provider}
                    </div>

                    {/* Measures */}
                    <p className="text-sm text-navy-400 mb-4">
                      {source.measures}
                    </p>

                    {/* Specs Row */}
                    <div className="flex flex-col gap-1 text-xs text-navy-500">
                      <div className="flex justify-between">
                        <span>Resolution:</span>
                        <span className="text-navy-400">{source.resolution}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="text-navy-400">{source.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Earth Engine Section */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-12 backdrop-blur-sm">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Powered by Google Earth Engine
            </h2>
            <p className="text-lg text-navy-400 max-w-2xl mx-auto">
              All satellite and weather data is processed on Google Earth Engine — the world's most powerful planetary-scale geospatial analysis platform. Petabyte-scale datasets, analyzed in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Link */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
          >
            <span className="text-lg">See how these data sources power our services</span>
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
