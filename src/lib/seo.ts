import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

export function pageMeta(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
