import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { StatusChip } from "@/components/Placeholder";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { CONTROLLED_COMPANIES, SEO } from "@/lib/copy";
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
        body={company.oneLiner}
        secondary={{ label: "Venture Studio", href: "/venture-studio" }}
      />
      <Section>
        <StatusChip status={company.approvalStatus} />
        <dl className="mt-6 grid gap-4 md:grid-cols-2">
          <Fact label="Company name" value={company.name} />
          <Fact label="DCRBN’s role" value={company.role} />
          <Fact label="Founding / build context" value={company.founding} />
          <Fact label="Website" value={company.websiteLabel} />
          <Fact label="Relevant proof" value={company.proof} />
        </dl>
      </Section>
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
      />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <dt className="text-[12px] tracking-[0.12em] text-mute uppercase">{label}</dt>
      <dd className="mt-2 text-[16px] leading-relaxed text-hi">{value}</dd>
    </div>
  );
}
