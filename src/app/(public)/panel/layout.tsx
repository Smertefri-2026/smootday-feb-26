// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function PublicGateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get("smooday_preview")?.value === "1";

  if (!unlocked) redirect("/auth");
  return <>{children}</>;
}