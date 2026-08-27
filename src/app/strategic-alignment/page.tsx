import { AlignForm } from "@/components/forms/AlignForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero, Section } from "@/components/ui";
import { ALIGN_PAGE_WAYS, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(SEO.alignment.title, SEO.alignment.description, "/strategic-alignment");

export default function AlignmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Strategic Alignment", path: "/strategic-alignment" },
        ]}
      />
      <PageHero
        eyebrow="Partners and investors"
        title={SEO.alignment.h1}
        body="DCRBN partners with people and organizations that want to help inspired founders move faster."
        primary={{ label: "Start the Conversation", href: "#align-form" }}
      />
      <Section>
        <p className="max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          We are building an ecosystem around founders creating infrastructure across AI, blockchain, and quantum.
          Strategic partners, advisors, investors, distribution partners, and capital partners can align with DCRBN by
          supporting founders earlier in their growth journey.
        </p>
        <h2 className="mt-12 text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Ways to Align</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {ALIGN_PAGE_WAYS.map((item) => (
            <li key={item} className="rounded-xl border border-line bg-panel px-4 py-4 text-[15px] text-hi">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-3xl border border-line bg-panel p-[clamp(20px,3vw,36px)]">
          <h2 className="mb-6 text-[22px] text-hi">Start the Conversation</h2>
          <AlignForm />
        </div>
      </Section>
    </>
  );
}
