import Link from "next/link";
import { CTA, FOOTER, SITE } from "@/lib/site";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-sec">
      <div className="mx-auto grid max-w-[1080px] gap-12 px-[clamp(20px,5vw,40px)] py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
            <Mark />
            <span className="text-[16px] font-semibold tracking-[0.14em] text-hi">{SITE.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-soft">{SITE.positioning}</p>
          <p className="mt-4 text-[14px] leading-relaxed text-mute">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
            <br />
            {SITE.address.country}
          </p>
          <a href={SITE.phoneHref} className="mt-3 inline-block text-[14px] text-blue-lt no-underline">
            {SITE.phone}
          </a>
        </div>
        <FooterCol title="Platform" links={FOOTER.platform} />
        <FooterCol title="Company" links={FOOTER.company} />
        <div>
          <FooterCol title="Start" links={FOOTER.start} />
          <div className="mt-8">
            <FooterCol title="Legal" links={FOOTER.legal} />
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-3 px-[clamp(20px,5vw,40px)] py-6 text-[13px] text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <Link href={CTA.primary.href} className="text-soft no-underline hover:text-hi">
            {CTA.primary.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-4 text-[13px] font-semibold tracking-[0.12em] text-hi uppercase">{title}</h2>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-[14.5px] text-soft no-underline hover:text-hi">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
