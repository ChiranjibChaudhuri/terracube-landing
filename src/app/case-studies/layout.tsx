import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | TerraCube',
  description: 'Real results from TerraCube customers — $4.2M in avoided losses, 85% faster analysis, 3x coverage improvement.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
