import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Placeholder, StatusChip } from "@/components/Placeholder";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { CONTROLLED_COMPANIES, PLACEHOLDER, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";


export const metadata = pageMeta(SEO.sixframe.title, SEO.sixframe.description, "/sixframe");

export default function SixframePage() {
  const company = CONTROLLED_COMPANIES.find((c) => c.slug === "sixframe")!;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Venture Studio", path: "/venture-studio" },
          { name: "Sixframe", path: "/sixframe" },
        ]}
      />
      <PageHero
        eyebrow="DCRBN-controlled company"
        title={SEO.sixframe.h1}
        body="Sixframe is DCRBN’s AI Film Studio focused on AI-powered creative production, storytelling, entertainment, and commercial content."
        secondary={{ label: "Visit Sixframe", href: company.website! }}
      />
      <Section>
        <div className="mb-6">
          <StatusChip status={company.approvalStatus} />
        </div>
        <dl className="grid gap-6 md:grid-cols-2">
          <Fact label="Company name" value={company.name} />
          <Fact label="One-line problem / solution" value={company.oneLiner} />
          <Fact label="DCRBN’s role" value={company.role} />
          <Fact
            label="Website"
            value={
              company.website ? (
                <a href={company.website} className="text-blue-lt no-underline hover:text-hi">
                  {company.websiteLabel}
                </a>
              ) : (
                PLACEHOLDER
              )
            }
          />
        </dl>
        <div className="mt-8 space-y-4">
          <div>
            <h2 className="mb-2 text-[15px] text-hi">Founding / build context</h2>
            <Placeholder>{company.founding}</Placeholder>
          </div>
          <div>
            <h2 className="mb-2 text-[15px] text-hi">Logo</h2>
            <Placeholder>{PLACEHOLDER}</Placeholder>
          </div>
          <div>
            <h2 className="mb-2 text-[15px] text-hi">Relevant proof</h2>
            <Placeholder>{company.proof}</Placeholder>
          </div>
        </div>
      </Section>
      <CtaBand
        title="Building Infrastructure That Inspires Us?"
        body="If you are a founder building in AI, blockchain, or quantum with traction, conviction, and a problem worth solving, DCRBN may be the force multiplier around your next stage of growth."
        secondary={false}
      />
    </>
  );
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <dt className="text-[12px] tracking-[0.12em] text-mute uppercase">{label}</dt>
      <dd className="mt-2 text-[16px] text-hi">{value}</dd>
    </div>
  );
}
