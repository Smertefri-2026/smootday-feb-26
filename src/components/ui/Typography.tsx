// /Users/oystein/nettsider/smootday-v2-feb-26/src/components/ui/Typography.tsx
import type { ReactNode } from "react";

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("m-0 text-sm font-semibold", className)}
      style={{ color: "var(--slate)" }}
    >
      {children}
    </p>
  );
}

export function H1({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight",
        className
      )}
      style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn("text-xl sm:text-2xl font-extrabold", className)}
      style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
    >
      {children}
    </h2>
  );
}

export function P({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("mt-3 text-sm sm:text-base leading-7", className)}
      style={{ color: "var(--slate)" }}
    >
      {children}
    </p>
  );
}

export function SmallNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn("mt-4 text-xs leading-6", className)}
      style={{ color: "rgba(11, 18, 32, 0.60)" }}
    >
      {children}
    </p>
  );
}