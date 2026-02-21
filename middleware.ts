import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!_next|api|unlock|favicon.ico|robots.txt|sitemap.xml).*)"],
};

export function middleware(req: NextRequest) {
  const unlocked = req.cookies.get("smooday_preview")?.value === "1";
  if (unlocked) return NextResponse.next();

  // redirect to /unlock for all pages except allowed ones in matcher
  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  return NextResponse.redirect(url);
}