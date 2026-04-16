import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security & Compliance | TerraCube',
  description: 'Enterprise-grade security: SOC 2 Type II, GDPR compliance, AES-256 encryption, and 99.9% uptime SLA.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
