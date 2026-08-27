import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Placeholder, StatusChip } from "@/components/Placeholder";
import { Card, CtaBand, PageHero, Section } from "@/components/ui";
import { CONTROLLED_COMPANIES, EXECUTION_PROOF, PLACEHOLDER, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.proof.title, SEO.proof.description, "/proof");

export default function ProofPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Proof", path: "/proof" },
        ]}
      />
      <PageHero
        eyebrow="Proof"
        title={SEO.proof.h1}
        body="DCRBN’s proof should be organized by what we control, what we support, and what outcomes have been created or influenced through the platform."
        secondary={CTA.secondary}
      />
      <Section>
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Layer 1: DCRBN-Controlled Companies</h2>
        <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-soft">
          Companies where DCRBN has controlling equity, build responsibility, or company-creation involvement.
        </p>
        <div className="mt-8 grid gap-4">
          {CONTROLLED_COMPANIES.map((company) => (
            <article key={company.slug} className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-[22px] text-hi">{company.name}</h3>
                <StatusChip status={company.approvalStatus} />
              </div>
              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <ProofField label="Logo">
                  <span className="text-hi">{company.name}</span>
                </ProofField>
                <ProofField label="One-line problem / solution">{company.oneLiner}</ProofField>
                <ProofField label="DCRBN’s role">{company.role}</ProofField>
                <ProofField label="Founding / build context">{company.founding}</ProofField>
                <ProofField label="Website">
                  {company.website ? (
                    <a href={company.website} className="text-blue-lt no-underline hover:text-hi">
                      {company.websiteLabel}
                    </a>
                  ) : (
                    <Placeholder>{company.websiteLabel}</Placeholder>
                  )}
                </ProofField>
                <ProofField label="Relevant proof">{company.proof}</ProofField>
              </dl>
              <Link href={company.href} className="mt-5 inline-block text-[14px] text-blue-lt no-underline">
                Internal company page
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-ink-sec">
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Layer 2: Portfolio / Partner Companies</h2>
        <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-soft">
          Companies DCRBN helps build, advise, scale, or support, but does not necessarily control. No portfolio cards
          are published until company name, founding team, role, website, and proof are approved.
        </p>
        <div className="mt-6">
          <Placeholder>{PLACEHOLDER} — portfolio / partner company cards</Placeholder>
        </div>
      </Section>
      <Section>
        <h2 className="text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Layer 3: Execution Proof</h2>
        <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-soft">
          Outcome categories are listed. Individual metrics, client names, and stories stay unpublished until approved.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {EXECUTION_PROOF.map((item) => (
            <Card key={item.title} title={item.title} body={item.body}>
              <div className="mt-4 space-y-3">
                <StatusChip status={item.approvalStatus} />
                {item.approvalStatus === "Do not publish yet" ? (
                  <Placeholder>Not published.</Placeholder>
                ) : (
                  <p className="text-[14px] leading-relaxed text-soft">{item.evidence}</p>
                )}
              </div>
            </Card>
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

function ProofField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[12px] tracking-[0.12em] text-mute uppercase">{label}</dt>
      <dd className="mt-2 text-[15px] leading-relaxed text-soft">{children}</dd>
    </div>
  );
}
