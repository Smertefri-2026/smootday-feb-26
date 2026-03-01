import type { ReactNode } from "react";

export function ChipRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>{children}</div>
  );
}

export function Chip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-extrabold transition ring-1"
      style={{
        background: active ? "var(--g-primary)" : "rgba(255,255,255,0.70)",
        color: active ? "#fff" : "var(--ink)",
        borderColor: active ? "transparent" : "var(--line)",
      }}
    >
      {children}
    </button>
  );
}