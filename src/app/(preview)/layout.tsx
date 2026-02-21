// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(preview)/layout.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get("smooday_preview")?.value === "1";

  if (!unlocked) redirect("/auth");
  return <>{children}</>;
}