import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BRAND } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BRAND.domain}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[72px]">
        <div className="section-pad bg-void">
          <div className="container-wide max-w-[680px]">
            <p className="text-mono-sm text-lime uppercase tracking-widest mb-6">
              Legal
            </p>
            <h1 className="text-headline text-white">Privacy Policy</h1>
            <p className="mt-4 text-sm text-stone/50">Effective date: July 2026</p>

            <div className="mt-10 space-y-10 text-sm text-stone leading-relaxed">

              <Section title="1. Introduction">
                <p>
                  {BRAND.legalName} (&quot;{BRAND.name},&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
                  the website located at {BRAND.domain} (the &quot;Site&quot;). This Privacy Policy describes how we
                  collect, use, disclose, and safeguard your personal information when you visit the Site, engage with our
                  services, or otherwise interact with us. By accessing the Site you acknowledge that you have read and
                  understood this Privacy Policy.
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <p className="font-medium text-white mb-2">Information you provide directly</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Contact information such as your name, email address, company name, and job title when you submit a form or contact us</li>
                  <li>Correspondence and communications you send to us, including through email or the contact form on the Site</li>
                  <li>Any other information you voluntarily provide in connection with your use of the Site or our services</li>
                </ul>

                <p className="font-medium text-white mb-2 mt-6">Information collected automatically</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Device and browser information, including IP address, browser type, operating system, and device identifiers</li>
                  <li>Usage data such as pages visited, time spent on pages, referring URLs, and clickstream data</li>
                  <li>Cookies and similar tracking technologies as described in Section 6 below</li>
                </ul>
              </Section>

              <Section title="3. How We Use Your Information">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>To respond to your inquiries and provide the services you request</li>
                  <li>To operate, maintain, and improve the Site and our services</li>
                  <li>To send you information about our products, services, and events that may be of interest, where permitted by applicable law</li>
                  <li>To detect, prevent, and address technical issues, fraud, or other illegal activity</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                  <li>To carry out any other purpose described to you at the time the information was collected</li>
                </ul>
              </Section>

              <Section title="4. Sharing of Information">
                <p>
                  We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><span className="text-white">Service providers:</span> We engage third-party companies to perform functions on our behalf, such as hosting, analytics, email delivery, and customer support. These providers are contractually obligated to use your information only as necessary to provide their services to us.</li>
                  <li><span className="text-white">Legal requirements:</span> We may disclose your information if required to do so by law, regulation, legal process, or governmental request.</li>
                  <li><span className="text-white">Business transfers:</span> In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><span className="text-white">With your consent:</span> We may share your information for any other purpose disclosed to you at the time we collect the information or with your consent.</li>
                </ul>
              </Section>

              <Section title="5. Data Retention">
                <p>
                  We retain your personal information for as long as reasonably necessary to fulfill the purposes for
                  which it was collected, including to satisfy legal, accounting, or reporting requirements. Contact form
                  submissions are typically retained for no longer than 24 months. When personal information is no longer
                  needed, we securely delete or anonymize it.
                </p>
              </Section>

              <Section title="6. Cookies and Tracking Technologies">
                <p>
                  The Site may use cookies and similar technologies to enhance your browsing experience, analyze usage
                  patterns, and deliver content relevant to your interests. You may control cookie preferences through
                  your browser settings. Disabling cookies may affect the functionality of certain features of the Site.
                </p>
                <p className="mt-3">We may use the following types of cookies:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><span className="text-white">Strictly necessary cookies:</span> Required for the Site to function properly</li>
                  <li><span className="text-white">Analytics cookies:</span> Help us understand how visitors interact with the Site</li>
                  <li><span className="text-white">Functional cookies:</span> Enable enhanced functionality and personalization</li>
                </ul>
              </Section>

              <Section title="7. Data Security">
                <p>
                  We implement commercially reasonable technical and organizational measures designed to protect the
                  security, confidentiality, and integrity of your personal information. However, no method of transmission
                  over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </Section>

              <Section title="8. International Data Transfers">
                <p>
                  {BRAND.legalName} is incorporated in Hong Kong. If you are accessing the Site from outside Hong Kong,
                  please be aware that your information may be transferred to, stored, and processed in Hong Kong or other
                  jurisdictions where our service providers operate. By using the Site, you consent to the transfer of your
                  information to countries that may have different data protection laws than your country of residence.
                </p>
              </Section>

              <Section title="9. Your Rights">
                <p>
                  Depending on your jurisdiction, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>The right to access, correct, or delete your personal information</li>
                  <li>The right to restrict or object to processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{" "}
                  <a href={`mailto:${BRAND.email}`} className="text-white underline underline-offset-2 hover:text-lime transition-colors">
                    {BRAND.email}
                  </a>
                  . We will respond to your request within a reasonable timeframe and in accordance with applicable law.
                </p>
              </Section>

              <Section title="10. Third-Party Links">
                <p>
                  The Site may contain links to third-party websites or services that are not operated by us. We have no
                  control over, and assume no responsibility for, the content, privacy policies, or practices of any
                  third-party websites or services. We encourage you to review the privacy policies of any third-party
                  sites you visit.
                </p>
              </Section>

              <Section title="11. Children&apos;s Privacy">
                <p>
                  The Site is not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If we become aware that we have collected personal information from a child
                  without parental consent, we will take steps to delete that information.
                </p>
              </Section>

              <Section title="12. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                  effective date. Your continued use of the Site following the posting of changes constitutes your
                  acceptance of such changes. We encourage you to review this Privacy Policy periodically.
                </p>
              </Section>

              <Section title="13. Contact Us">
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-3 p-4 bg-deep rounded-sm border border-white/[0.04] space-y-1.5">
                  <p className="text-white">{BRAND.legalName}</p>
                  <p>{BRAND.address}</p>
                  <p>
                    <a href={`mailto:${BRAND.email}`} className="text-white underline underline-offset-2 hover:text-lime transition-colors">
                      {BRAND.email}
                    </a>
                  </p>
                </div>
              </Section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-base text-white font-medium">{title}</h2>
      {children}
    </div>
  );
}
