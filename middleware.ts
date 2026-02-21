// /Users/oystein/nettsider/smootday-v2-feb-26/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  // Kjør middleware på "vanlige" routes, men ikke på Next internfiler / statiske filer.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Tillat alltid unlock-siden
  if (pathname === "/unlock") return NextResponse.next();

  // ✅ Tillat alltid API-ruter (hvis du legger til senere)
  if (pathname.startsWith("/api")) return NextResponse.next();

  // ✅ Hvis cookie finnes: slipp gjennom
  const unlocked = req.cookies.get("smooday_preview")?.value === "1";
  if (unlocked) return NextResponse.next();

  // Ellers: redirect til /unlock
  const url = req.nextUrl.clone();
  url.pathname = "/unlock";
  return NextResponse.redirect(url);
}