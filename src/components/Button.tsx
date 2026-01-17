import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold transition duration-200 ease-out focus-visible:ring-4 focus-visible:ring-trust-blue/20 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform-gpu will-change-transform hover:scale-[1.02] active:scale-[0.95]";

const variants: Record<Variant, string> = {
  primary:
    "bg-trust-blue text-white shadow-soft-sm hover:shadow-soft hover:bg-[#0047B3]",
  secondary:
    "bg-white text-ink-black ring-1 ring-soft-line hover:bg-clean-white",
  ghost: "text-trust-blue hover:bg-trust-blue/10",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}


