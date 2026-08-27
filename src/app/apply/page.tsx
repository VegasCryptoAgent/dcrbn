import { ApplyForm } from "@/components/forms/ApplyForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { PageHero, Section } from "@/components/ui";
import { GROWTH_LAYERS, SEO } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(SEO.apply.title, SEO.apply.description, "/apply");

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Apply", path: "/apply" },
        ]}
      />
      <PageHero
        eyebrow="Apply"
        title={SEO.apply.h1}
        body="Tell us what you are building, why it matters, and how DCRBN can become a force multiplier around your next stage of growth."
        primary={{ label: "Submit Application", href: "#apply-form" }}
        secondary={{ label: "See How It Works", href: "/growth-cycle" }}
      />
      <Section>
        <p className="max-w-[68ch] text-[16.5px] leading-relaxed font-light text-soft">
          DCRBN works with founders who have traction, conviction, and the will to build. We are selective because
          meaningful support requires real alignment, clear opportunity, and a solution that inspires us.
        </p>
        <h2 className="mt-10 text-[18px] text-hi">Support options</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {GROWTH_LAYERS.map((item) => (
            <li key={item} className="rounded-full border border-line px-3 py-1.5 text-[13px] text-soft">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-3xl border border-line bg-panel p-[clamp(20px,3vw,36px)]">
          <ApplyForm />
        </div>
      </Section>
    </>
  );
}
