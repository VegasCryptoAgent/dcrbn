import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Container, PageHero } from "@/components/ui";
import { SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta(SEO.privacy.title, SEO.privacy.description, "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title={SEO.privacy.h1}
        body="What we collect, why we collect it, and what we do with it. The short version: the only information we ask for is what we need to review your application for fit, and we do not sell it."
      />
      <Container className="prose-legal max-w-[760px] space-y-10 pb-24 text-[15.5px] leading-[1.7] font-light text-soft">
        <p className="text-mute">Effective 27 August 2026 · Last updated 27 August 2026</p>
        <Block n="01" t="Who we are and what this covers">
          <p>
            This site is operated by {SITE.legalName}, referred to here as DCRBN, we, or us. We are a Speed to Scale
            platform for founders building infrastructure in AI, blockchain, and quantum.
          </p>
          <p>
            This policy explains what information we collect through {SITE.domain}, why we collect it, who we share it
            with, how long we keep it, and the choices you have. It applies to this website and the Speed to Scale and
            Strategic Alignment applications. It does not cover the separate agreements that govern a client engagement.
          </p>
        </Block>
        <Block n="02" t="Information we collect">
          <p>
            <strong className="font-medium text-hi">Information you give us.</strong> The main places you can give us
            information are the Speed to Scale application and the Strategic Alignment form, where we collect your name,
            email, company details, and the answers you choose to provide.
          </p>
          <p>
            <strong className="font-medium text-hi">Information collected automatically.</strong> When you visit the
            site, our hosting and content delivery providers receive standard technical information including your IP
            address, browser and device type, referring page, and the pages you view.
          </p>
          <p>
            <strong className="font-medium text-hi">Information from other sources.</strong> If you tell us your company
            name or website, we may look at publicly available information about your company as part of reviewing fit.
            We do not buy personal information from data brokers.
          </p>
        </Block>
        <Block n="03" t="How we use information">
          <ul className="list-disc space-y-2 pl-5">
            <li>Review your application and assess whether a DCRBN engagement is a fit</li>
            <li>Confirm that we received your application and tell you what happens next</li>
            <li>Contact you about your application and, if there is a fit, next steps</li>
            <li>Operate, secure, and improve the site and our internal review process</li>
            <li>Meet our legal, tax, and record keeping obligations</li>
          </ul>
          <p>Every application is read by a person. We do not use your information to build advertising profiles, and we do not sell it.</p>
        </Block>
        <Block n="04" t="Cookies and similar technologies">
          <p>
            This site uses cookies and similar browser storage that are necessary for it to work. We do not currently
            run advertising cookies. Analytics load only if a measurement ID is configured by DCRBN.
          </p>
        </Block>
        <Block n="05" t="How we share information">
          <p>We share information with service providers who process it on our behalf, under contract, and only for the purposes described in this policy, including hosting, content delivery, and form routing. We do not sell your personal information, and we do not share it for cross-context behavioral advertising.</p>
        </Block>
        <Block n="06" t="How long we keep information">
          <p>
            We keep application information for as long as we are considering a fit and for a reasonable period
            afterward. If you ask us to delete it, we delete it except where we are required to keep a record.
          </p>
        </Block>
        <Block n="07" t="Your rights">
          <p>
            Depending on where you live, you may have the right to know, correct, delete, or receive a copy of personal
            information we hold, and to object to certain processing. To make a request, email{" "}
            <a className="text-blue-lt no-underline" href={`mailto:${SITE.emails.privacy}`}>
              {SITE.emails.privacy}
            </a>{" "}
            or write to us at the address below.
          </p>
        </Block>
        <Block n="08" t="How to reach us">
          <p>
            {SITE.legalName}
            <br />
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postal}, {SITE.address.country}
            <br />
            Email {SITE.emails.privacy}
            <br />
            Phone {SITE.phone}
          </p>
        </Block>
      </Container>
    </>
  );
}

function Block({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-[22px] font-medium text-hi">
        <span className="mr-3 font-mono text-[13px] text-blue-lt">{n}</span>
        {t}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
