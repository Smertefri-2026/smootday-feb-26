import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "soft";
}) {
  const base =
    "rounded-3xl border";
  const styles =
    variant === "soft"
      ? "bg-white/55 shadow-none"
      : "bg-[var(--surface)] shadow-[var(--shadow-soft)]";

  return (
    <div
      className={`${base} ${styles} ${className}`.trim()}
      style={{ borderColor: "var(--line)" }}
    >
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-7 sm:p-10 ${className}`.trim()}>{children}</div>;
}