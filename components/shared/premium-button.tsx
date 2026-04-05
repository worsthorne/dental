import Link from "next/link";

type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost-light";
  className?: string;
};

export function PremiumButton({
  href,
  children,
  variant = "primary",
  className = "",
}: PremiumButtonProps) {
  const styles = {
    primary:
      "bg-slate-950 text-white shadow-xl shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-black",
    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-emerald-700 hover:text-emerald-700",
    "ghost-light":
      "border border-white/20 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}