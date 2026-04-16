import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Sources | TerraCube',
  description: 'World-class satellite and weather data from NASA, ESA, NOAA, and ECMWF powering 34 risk indices.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
