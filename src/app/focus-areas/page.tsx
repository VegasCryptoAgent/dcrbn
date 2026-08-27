import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Card, CtaBand, PageHero, Section } from "@/components/ui";
import { FOCUS_AREAS, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.focusAreas.title, SEO.focusAreas.description, "/focus-areas");

export default function FocusAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Focus Areas", path: "/focus-areas" },
        ]}
      />
      <PageHero
        eyebrow="Focus Areas"
        title={SEO.focusAreas.h1}
        body="DCRBN partners with founders building the foundational systems behind the next era of technology."
        secondary={CTA.partner}
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <Card key={area.title} title={area.title} body={area.body} />
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
