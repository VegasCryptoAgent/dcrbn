import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { Placeholder, StatusChip } from "@/components/Placeholder";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { CONTROLLED_COMPANIES, PLACEHOLDER, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(SEO.social.title, SEO.social.description, "/social-automation");

export default function SocialAutomationPage() {
  const company = CONTROLLED_COMPANIES.find((c) => c.slug === "social-automation")!;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Venture Studio", path: "/venture-studio" },
          { name: "Social Automation Tool", path: "/social-automation" },
        ]}
      />
      <PageHero
        eyebrow="DCRBN-controlled company"
        title={SEO.social.h1}
        body="This company is listed under DCRBN-controlled companies. The approved current name, description, and link were not provided in the handoff and are not invented here."
        secondary={{ label: "Venture Studio", href: "/venture-studio" }}
      />
      <Section>
        <StatusChip status={company.approvalStatus} />
        <div className="mt-6 space-y-4">
          <Placeholder>{PLACEHOLDER} — approved company name</Placeholder>
          <Placeholder>{PLACEHOLDER} — description</Placeholder>
          <Placeholder>{PLACEHOLDER} — logo</Placeholder>
          <Placeholder>{PLACEHOLDER} — website</Placeholder>
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
