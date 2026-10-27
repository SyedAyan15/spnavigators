import { Reveal } from "@/components/motion";
import { PageBanner } from "@/components/PageBanner";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Support Plan Navigators collects, uses, stores and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
    <PageBanner title="Privacy Policy" />
    <section className="py-16 sm:py-24">
      <div className="container-x max-w-3xl">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Legal
        </span>
        <p className="mt-6 font-display text-5xl font-semibold tracking-tight text-navy">How we protect your information</p>
        <Reveal className="prose-brand mt-10 text-lg">
          <p>
            {site.legalName} (“we”, “us”) respects your privacy. We handle personal information in line
            with the <em>Privacy Act 1988</em> (Cth), the Australian Privacy Principles and our obligations as a provider of
            NDIS supports.
          </p>
          <h2>What we collect</h2>
          <p>
            We collect information needed to provide our services, such as your name, contact details, date of birth, NDIS
            number, plan details, goals, and information about your health, disability and supports. We may also collect
            information from people you authorise, such as family members, nominees, referrers and other providers.
          </p>
          <h2>How we use it</h2>
          <ul>
            <li>to provide NDIS Support Coordination and Psychosocial Recovery Coaching</li>
            <li>to communicate with you and, with your consent, with your providers and supports</li>
            <li>to manage service agreements, bookings and claims</li>
            <li>to meet our legal, regulatory and reporting obligations</li>
            <li>to respond to enquiries, feedback and complaints</li>
          </ul>
          <h2>Consent and sharing</h2>
          <p>
            We only share your information with your consent, unless we are required or permitted by law to do so, for
            example to prevent a serious threat to someone’s life, health or safety.
          </p>
          <h2>Storage and security</h2>
          <p>
            We take reasonable steps to protect your information from misuse, loss and unauthorised access, including
            secure, access-controlled systems. We keep records for as long as required by law and then dispose of them
            securely.
          </p>
          <h2>Website forms</h2>
          <p>
            Information you submit through our website forms is sent to our team by email so we can respond to you. Our
            website does not sell your information or use it for advertising.
          </p>
          <h2>Access and correction</h2>
          <p>
            You can ask to access or correct the personal information we hold about you at any time by contacting us.
          </p>
          <h2>Complaints</h2>
          <p>
            If you have a concern about how we handle your information, please contact us first so we can try to resolve it.
            If you’re not satisfied, you can contact the Office of the Australian Information Commissioner (oaic.gov.au) or
            the NDIS Quality and Safeguards Commission.
          </p>
          <h2>Contact us</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </Reveal>
      </div>
    </section>
    </>
  );
}
