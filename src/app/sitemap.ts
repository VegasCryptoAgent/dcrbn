import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const paths = [
  "/",
  "/speed-to-scale",
  "/growth-cycle",
  "/focus-areas",
  "/advisory",
  "/venture-studio",
  "/sixframe",
  "/proof",
  "/network",
  "/about",
  "/apply",
  "/strategic-alignment",
  "/privacy",
  "/terms",
  "/lotus-trader",
  "/social-automation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
