import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BRAND_NAME} — how we collect, use, and protect your data.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-navy-400">
            Last updated: April 15, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-navy-300">
            <section>
              <h2 className="text-lg font-semibold text-white">1. Information We Collect</h2>
              <p className="mt-2">
                {BRAND_NAME} collects the following categories of information when you use our platform:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li><strong className="text-navy-200">Account information:</strong> name, email address, organization, and role when you create an account.</li>
                <li><strong className="text-navy-200">Portfolio data:</strong> property addresses, coordinates, building characteristics, and associated metadata you upload for analysis.</li>
                <li><strong className="text-navy-200">Usage data:</strong> API call logs, feature usage patterns, and session analytics to improve our services.</li>
                <li><strong className="text-navy-200">Technical data:</strong> IP address, browser type, and device information collected automatically.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">2. How We Use Your Information</h2>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Provide and improve our environmental risk analysis services.</li>
                <li>Process and analyze your portfolio data through Google Earth Engine and our AI models.</li>
                <li>Send transactional notifications related to your account and subscriptions.</li>
                <li>Generate aggregated, anonymized insights for platform improvement.</li>
                <li>Comply with legal obligations and enforce our terms of service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">3. Data Processing &amp; Third Parties</h2>
              <p className="mt-2">
                We process geospatial queries through <strong className="text-navy-200">Google Earth Engine</strong> (Google Cloud Platform) to compute environmental risk indices.
                Property coordinates are sent to Earth Engine for satellite data retrieval and analysis.
                We do not sell your personal data or portfolio information to third parties.
              </p>
              <p className="mt-2">
                Third-party services we use include:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Google Earth Engine — geospatial data processing</li>
                <li>Cloud hosting providers — infrastructure and database services</li>
                <li>Analytics tools — anonymized usage metrics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">4. Data Retention</h2>
              <p className="mt-2">
                We retain your account data for as long as your account is active. Portfolio data and analysis results are retained for the duration of your subscription.
                Computed risk scores are cached temporarily (3–24 hours depending on the service) and purged automatically.
                You may request deletion of your account and all associated data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">5. Data Security</h2>
              <p className="mt-2">
                We implement industry-standard security measures including encryption in transit (TLS), hashed API keys (SHA-256),
                rate limiting, and access controls. Database credentials and service account keys are stored as environment variables,
                never in source code.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">6. Your Rights</h2>
              <p className="mt-2">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Access and export your personal data and portfolio information.</li>
                <li>Correct inaccurate personal data.</li>
                <li>Request deletion of your account and data.</li>
                <li>Object to or restrict certain processing activities.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">7. Cookies &amp; Tracking</h2>
              <p className="mt-2">
                We use essential cookies for authentication and session management. We do not use third-party advertising cookies.
                Analytics cookies are used only in anonymized, aggregated form.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white">8. Contact</h2>
              <p className="mt-2">
                For privacy-related inquiries, contact us at{" "}
                <a href="mailto:privacy@terracube.com" className="text-brand-400 hover:text-brand-300 underline">
                  privacy@terracube.com
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
