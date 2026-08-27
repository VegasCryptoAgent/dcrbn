import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REDIRECTS } from "@/lib/redirects";

const CANONICAL = "https://www.dcrbn.io";

const PATH_MAP = new Map(
  REDIRECTS.filter((row) => row.source !== row.destination).map((row) => [
    row.source,
    row.destination,
  ])
);

function mappedPath(pathname: string) {
  const exact = PATH_MAP.get(pathname);
  if (exact) return exact;
  if (pathname.endsWith("/") && pathname !== "/") {
    return PATH_MAP.get(pathname.slice(0, -1)) ?? pathname;
  }
  return pathname;
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const { pathname, search } = request.nextUrl;

  if (host === "iangroup.ai" || host === "www.iangroup.ai") {
    const dest = new URL(`${CANONICAL}${mappedPath(pathname)}${search}`);
    return NextResponse.redirect(dest, 301);
  }

  if (host === "dcrbn.io") {
    const dest = new URL(`${CANONICAL}${pathname}${search}`);
    return NextResponse.redirect(dest, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|.*\\..*).*)"],
};
