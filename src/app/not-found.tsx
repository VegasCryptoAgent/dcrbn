import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/ui";
import { CTA } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found"
        body="The page you are looking for doesn't exist or has been moved."
        primary={CTA.primary}
        secondary={{ label: "Home", href: "/" }}
      />
      <div className="pb-24 text-center">
        <Cta href="/proof" variant="ghost">
          See Proof
        </Cta>
      </div>
    </>
  );
}
