export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-6 h-px w-full ${className}`.trim()}
      style={{ background: "rgba(11,18,32,0.08)" }}
    />
  );
}