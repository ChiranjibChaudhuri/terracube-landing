import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${BRAND_NAME} — usage terms, data policies, and service agreement.`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-navy-400">
            Last updated: April 15, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-navy-300">
            <section>
              <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing or using {BRAND_NAME} (&quot;the Platform&quot;), you agree to be bound by these Terms of Service.
                If you are using the Platform on behalf of an organization, you represent that you have authority to bind that organization to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">2. Service Description</h2>
              <p className="mt-2">
                {BRAND_NAME} provides satellite-powered environmental risk analysis for real estate portfolios. Our services include but are not limited to:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>GFS weather forecast risk indices (wind, flood, heat, and 18 additional hazards)</li>
                <li>Satellite observation risk indices (flood extent, vegetation, air quality, and 10 additional indices)</li>
                <li>Building energy estimation using ERA5 climate data</li>
                <li>Wildfire, ESG, solar, carbon, disaster, and parametric insurance services</li>
                <li>AI-powered analysis, workflow automation, and portfolio reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">3. Data Accuracy &amp; Disclaimers</h2>
              <p className="mt-2">
                Risk scores and analysis outputs are derived from publicly available satellite data (Sentinel, MODIS, VIIRS, SMAP),
                weather models (NOAA GFS), and climate projections (CMIP6). These are <strong className="text-navy-200">informational tools</strong> and should not
                be the sole basis for insurance underwriting, investment, or regulatory decisions.
              </p>
              <p className="mt-2">
                {BRAND_NAME} provides data &quot;as is&quot; without warranty of accuracy, completeness, or fitness for a particular purpose.
                Satellite and weather data are subject to the accuracy limitations of their respective sources (Google Earth Engine, NOAA, ESA Copernicus, NASA).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">4. Subscription &amp; Billing</h2>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li><strong className="text-navy-200">Free tier:</strong> Limited to 5 properties, basic risk scores, community support.</li>
                <li><strong className="text-navy-200">Pro tier:</strong> $49/month, up to 50 properties, full service access, priority support.</li>
                <li><strong className="text-navy-200">Enterprise tier:</strong> Custom pricing, unlimited properties, dedicated support, SLA guarantees.</li>
              </ul>
              <p className="mt-2">
                Subscriptions are billed monthly. You may cancel at any time; access continues through the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">5. API Usage &amp; Rate Limits</h2>
              <p className="mt-2">
                API access is subject to rate limiting to ensure fair usage. Current limits are:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Risk and energy endpoints: 30 requests/minute</li>
                <li>Specialized services (wildfire, ESG, solar, etc.): 10 requests/minute</li>
                <li>AI agent endpoints: 20 requests/minute</li>
              </ul>
              <p className="mt-2">
                Exceeding rate limits will result in HTTP 429 responses. Enterprise customers may negotiate custom rate limits.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">6. Intellectual Property</h2>
              <p className="mt-2">
                You retain ownership of all portfolio data you upload. {BRAND_NAME} retains ownership of its platform, algorithms, risk models, and derived analytics.
                Analysis results generated for your portfolio are licensed to you for internal use.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">7. Acceptable Use</h2>
              <p className="mt-2">You agree not to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Reverse-engineer, decompile, or attempt to extract source code from the Platform.</li>
                <li>Use the Platform for any unlawful purpose or to process data you do not have rights to.</li>
                <li>Resell or redistribute API data without a written agreement.</li>
                <li>Circumvent rate limits, authentication, or access controls.</li>
                <li>Interfere with or disrupt the Platform or its infrastructure.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">8. Limitation of Liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, {BRAND_NAME} shall not be liable for indirect, incidental, special, or consequential damages
                arising from your use of the Platform, including but not limited to losses from investment decisions, insurance underwriting outcomes,
                or business interruption.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">9. Termination</h2>
              <p className="mt-2">
                We may suspend or terminate your access for violation of these terms. You may terminate your account at any time.
                Upon termination, your portfolio data will be deleted within 30 days unless a legal retention obligation applies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">10. Contact</h2>
              <p className="mt-2">
                For questions about these terms, contact us at{" "}
                <a href="mailto:legal@terracube.com" className="text-brand-400 hover:text-brand-300 underline">
                  legal@terracube.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
