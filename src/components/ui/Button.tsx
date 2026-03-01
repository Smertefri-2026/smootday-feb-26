// /Users/oystein/nettsider/smootday-v2-feb-26/src/components/ui/Button.tsx
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import React from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center rounded-full px-5 h-11 text-sm font-extrabold transition select-none";
const styles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "var(--g-primary)",
    color: "#fff",
    border: "1px solid transparent",
  },
  outline: {
    background: "rgba(255,255,255,0.70)",
    color: "var(--ink)",
    border: "1px solid var(--line)",
  },
};

function cn(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

type StylableProps = {
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Button
 * - variant: primary | outline
 * - asChild: lar deg style en <a> eller annen komponent uten å endre markup
 */
export function Button({
  children,
  variant = "outline",
  className,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  asChild?: boolean;
}) {
  const cls = cn(base, className);

  if (asChild) {
    if (!React.isValidElement(children)) return null;

    const child = children as ReactElement<StylableProps>;
    const childClass = cn(child.props?.className, cls);
    const childStyle: React.CSSProperties = {
      ...(child.props?.style ?? {}),
      ...(styles[variant] ?? {}),
    };

    // NB: IKKE spre button-props inn i child (<a> osv). Kun style + className.
    return React.cloneElement(child, {
      className: childClass,
      style: childStyle,
    });
  }

  return (
    <button {...props} className={cls} style={styles[variant]}>
      {children}
    </button>
  );
}

/** ✅ Alias-komponenter (slik Section2Products forventer) */
export function ButtonPrimary(
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    children: ReactNode;
    className?: string;
  }
) {
  const { children, className, ...rest } = props;
  return (
    <Button {...rest} variant="primary" className={className}>
      {children}
    </Button>
  );
}

export function ButtonOutline(
  props: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    children: ReactNode;
    className?: string;
  }
) {
  const { children, className, ...rest } = props;
  return (
    <Button {...rest} variant="outline" className={className}>
      {children}
    </Button>
  );
}

/** Link-varianter */
export function LinkPrimary({
  href,
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return (
    <a href={href} {...props} className={cn(base, className)} style={styles.primary}>
      {children}
    </a>
  );
}

export function LinkOutline({
  href,
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return (
    <a href={href} {...props} className={cn(base, className)} style={styles.outline}>
      {children}
    </a>
  );
}