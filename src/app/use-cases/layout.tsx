import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases | TerraCube',
  description: 'How underwriters, portfolio managers, and executives use TerraCube for climate risk analysis.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
