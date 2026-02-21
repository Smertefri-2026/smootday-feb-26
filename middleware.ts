// /Users/oystein/nettsider/smootday-v2-feb-26/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/:path*"], // enkel matcher, vi filtrerer selv under
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Slipp gjennom alt som aldri skal gates:
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Slipp gjennom unlock + api
  if (pathname === "/unlock" || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Gate
  const unlocked = req.cookies.get("smooday_preview")?.value === "1";
  if (unlocked) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  return NextResponse.redirect(url);
}