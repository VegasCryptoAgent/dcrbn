import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero, Section } from "@/components/ui";
import { NETWORK_VALUES, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import { CTA } from "@/lib/site";

export const metadata = pageMeta(SEO.network.title, SEO.network.description, "/network");

export default function NetworkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Network", path: "/network" },
        ]}
      />
      <PageHero
        eyebrow="Our Network"
        title={SEO.network.h1}
        body="Great solutions need great people around them. DCRBN brings together operators, advisors, strategists, creators, technologists, investors, and strategic partners who can help founders move faster."
        secondary={CTA.partner}
      />
      <Section>
        <p className="max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          This network is not a logo wall. It is an active growth asset designed to support visibility, partnerships,
          paid pilots, customer access, capital readiness, and company-building execution.
        </p>
        <h2 className="mt-12 text-[clamp(26px,3.4vw,36px)] font-medium text-hi">Network value</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {NETWORK_VALUES.map((item) => (
            <li key={item} className="rounded-xl border border-line bg-panel px-4 py-5 text-[15px] text-hi">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand
        title="For Partners and Investors Aligned With Purpose"
        body="DCRBN creates access to founders building infrastructure across AI, blockchain, and quantum. Explore strategic alignment if you want to help inspired founders move faster."
      />
    </>
  );
}
