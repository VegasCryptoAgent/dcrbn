import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Container, PageHero } from "@/components/ui";
import { SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta(SEO.terms.title, SEO.terms.description, "/terms");

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title={SEO.terms.h1}
        body="The rules for using this site, what an application does and does not create, and the limits of what we promise."
      />
      <Container className="max-w-[760px] space-y-10 pb-24 text-[15.5px] leading-[1.7] font-light text-soft">
        <p className="text-mute">
          Effective 27 July 2026 · Last updated 27 August 2026. This is the DCRBN LLC terms previously published on
          iangroup.ai, updated for www.dcrbn.io and Speed to Scale. The investment, outcome, and Nevada-law provisions
          are unchanged from that live policy.
        </p>
        <Block n="01" t="Agreement to these terms">
          <p>
            These terms are a binding agreement between you and {SITE.legalName}, referred to here as DCRBN, we, or us.
            They govern your use of {SITE.domain} and everything on it, including the Speed to Scale application. By
            using this site you accept these terms.
          </p>
        </Block>
        <Block n="02" t="What this site is">
          <p>
            This site describes what DCRBN does and invites founders to apply for Speed to Scale. It is informational.
            Nothing on it is a binding offer to provide services, and nothing on it creates a client relationship, an
            advisory relationship, or a fiduciary duty.
          </p>
        </Block>
        <Block n="03" t="The Speed to Scale application">
          <ul className="list-disc space-y-2 pl-5">
            <li>Submitting an application does not create an engagement and does not obligate us to provide anything</li>
            <li>We review applications for fit and may decline them at our sole discretion</li>
            <li>You agree that the information you submit is accurate and that you have the right to share it</li>
          </ul>
        </Block>
        <Block n="04" t="Engagements are governed by separate agreements">
          <p>
            If we do work together, that work is governed by a separate written agreement covering scope, fees, term,
            ownership, confidentiality, and everything else. That agreement controls the engagement.
          </p>
        </Block>
        <Block n="05" t="No guarantee of outcomes">
          <p>
            We describe our approach and operating model. We do not promise results. Growth, fundraising, hiring, and
            scale outcomes depend on your market, your team, your capital position, your execution, and conditions
            outside anyone’s control.
          </p>
        </Block>
        <Block n="06" t="Not investment, legal, tax, or accounting advice">
          <ul className="list-disc space-y-2 pl-5">
            <li>DCRBN is not a registered broker dealer, investment adviser, or investment bank, and we do not act as one</li>
            <li>Nothing on this site is an offer to sell, or a solicitation of an offer to buy, any security</li>
            <li>We do not raise capital on your behalf, negotiate securities transactions, or receive transaction-based compensation for introductions</li>
          </ul>
        </Block>
        <Block n="07" t="Intellectual property">
          <p>
            The site and everything in it, including copy, design, code, the DCRBN name and mark, and our frameworks and
            methodology, belong to us or our licensors. You may view the site and share links to it. You may not copy it
            for commercial purposes without written permission.
          </p>
        </Block>
        <Block n="08" t="Limitation of liability">
          <p>
            To the fullest extent the law allows, {SITE.legalName} and its officers, members, employees, contractors,
            and agents are not liable for any indirect, incidental, special, consequential, exemplary, or punitive
            damages arising out of your use of this site. Our total liability for all claims relating to the site is
            limited to one hundred United States dollars.
          </p>
        </Block>
        <Block n="09" t="Governing law">
          <p>
            These terms are governed by the laws of the State of Nevada. The exclusive venue for any dispute is the
            state or federal courts located in Clark County, Nevada.
          </p>
        </Block>
        <Block n="10" t="How to reach us">
          <p>
            {SITE.legalName}
            <br />
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postal}, {SITE.address.country}
            <br />
            Email{" "}
            <a className="text-blue-lt no-underline" href={`mailto:${SITE.emails.legal}`}>
              {SITE.emails.legal}
            </a>
            <br />
            Live inbox during migration:{" "}
            <a className="text-blue-lt no-underline" href={`mailto:${SITE.emails.legalLive}`}>
              {SITE.emails.legalLive}
            </a>
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
