import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Card, CtaBand, PageHero, Section } from "@/components/ui";
import { ADVISORY_CAPABILITIES, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.advisory.title, SEO.advisory.description, "/advisory");

export default function AdvisoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Advisory & Consulting", path: "/advisory" },
        ]}
      />
      <PageHero
        eyebrow="Platform area"
        title={SEO.advisory.h1}
        body="DCRBN supports founders and companies with strategy, positioning, partnerships, capital readiness, growth architecture, and operator support."
        secondary={CTA.partner}
      />
      <Section>
        <p className="max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          This is not passive advisory. It is applied strategic support designed to help the company identify the right
          constraint, activate the right resources, and move toward the next stage of growth.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ADVISORY_CAPABILITIES.map((item) => (
            <Card key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
      />
    </>
  );
}
