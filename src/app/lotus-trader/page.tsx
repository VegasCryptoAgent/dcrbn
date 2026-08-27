import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Placeholder, StatusChip } from "@/components/Placeholder";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { CONTROLLED_COMPANIES, PLACEHOLDER, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(SEO.lotus.title, SEO.lotus.description, "/lotus-trader");

export default function LotusTraderPage() {
  const company = CONTROLLED_COMPANIES.find((c) => c.slug === "lotus-trader")!;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Venture Studio", path: "/venture-studio" },
          { name: "Lotus Trader", path: "/lotus-trader" },
        ]}
      />
      <PageHero
        eyebrow="DCRBN-controlled company"
        title={SEO.lotus.h1}
        body="Lotus Trader is listed as a DCRBN-controlled company. Approved description, logo, website, founding context, and proof have not been supplied and are not invented here."
        secondary={{ label: "Venture Studio", href: "/venture-studio" }}
      />
      <Section>
        <StatusChip status={company.approvalStatus} />
        <div className="mt-6 space-y-4">
          <Placeholder>{PLACEHOLDER} — company description</Placeholder>
          <Placeholder>{PLACEHOLDER} — logo</Placeholder>
          <Placeholder>{PLACEHOLDER} — website</Placeholder>
          <Placeholder>{PLACEHOLDER} — DCRBN role details beyond “controlled company”</Placeholder>
          <Placeholder>{PLACEHOLDER} — founding / build context</Placeholder>
          <Placeholder>{PLACEHOLDER} — relevant proof</Placeholder>
        </div>
      </Section>
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
      />
    </>
  );
}
