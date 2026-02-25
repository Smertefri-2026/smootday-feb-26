// /src/app/(public)/layout.tsx
import PublicHeader from "@/components/shell/PublicHeader";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="top" />
      <PublicHeader brand="SmoDay" />
      {/* Header height = 56px (h-14) => pt-14 */}
      <div className="pt-14">{children}</div>
    </>
  );
}