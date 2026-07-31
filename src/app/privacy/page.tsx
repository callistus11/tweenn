import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Tween Technologies',
  description: 'Learn how Tween Technologies protects your privacy and handles data in accordance with our privacy policy.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-section-title text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: July 2026</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tween Technologies collects information you provide directly to us, including name, email address, phone number, company information, and project details when you contact us or request services. We also collect technical data such as IP address, browser type, and device information for website analytics.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your information to provide requested services, communicate with you about projects, send marketing communications (with your consent), improve our website and services, and comply with legal obligations. We do not sell your personal data to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">3. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your data with trusted service providers who assist us in operating our business (e.g., hosting providers, analytics tools). These providers are contractually obligated to protect your data. We may also disclose information when required by law or to protect our rights.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures including encryption, secure servers, and access controls to protect your data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies and similar technologies to improve user experience, analyze traffic, and personalize content. You can control cookie settings through your browser preferences. We use analytics tools to understand how visitors interact with our site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to access, correct, or delete your personal data. You may opt out of marketing communications at any time. To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your data for as long as necessary to provide our services and fulfill legal obligations. Project-related data is retained according to contract terms. Marketing data is retained until you opt out.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">8. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are not intended for children under 18. We do not knowingly collect personal information from minors. If we become aware of such collection, we will take steps to delete it.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this privacy policy from time to time. We will notify you of significant changes by email or prominent website notice. Continued use of our services after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, please contact us at info@tweentech.com or call +1(122) 800 88 08. You may also write to us at 1140 Harrison St, San Francisco, CA 94103.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
