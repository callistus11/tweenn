import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Tween Technologies',
  description: 'Read Tween Technologies terms and conditions for our services, website usage, and client agreements.',
};

export default function TermsPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-section-title text-foreground mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground text-sm mb-12">Last updated: July 2026</p>
          
          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using Tween Technologies' website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tween Technologies provides enterprise software development, cloud solutions, AI & automation, cybersecurity, and IT consulting services. Specific service agreements will be outlined in separate project contracts.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Clients agree to provide accurate information, timely feedback, and necessary access to systems required for project completion. Clients are responsible for maintaining the security of their account credentials.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All intellectual property rights in Tween Technologies' proprietary software, methodologies, and documentation remain our property unless otherwise specified in a written agreement. Custom deliverables created for clients are subject to the terms of the specific project contract.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payment terms are specified in individual project contracts. Invoices are due within the timeframe specified in the agreement. Late payments may incur interest charges and could affect ongoing project timelines.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tween Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific services in question.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship. This obligation survives the termination of any agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate the agreement with written notice. Termination terms and any applicable fees are specified in individual project contracts.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These terms are governed by the laws of the state of California, United States. Any disputes shall be resolved through arbitration in San Francisco, California.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tween Technologies reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-700 text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms & Conditions, please contact us at info@tweentech.com or call +1(122) 800 88 08.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
