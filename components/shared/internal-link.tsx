import Link from "next/link";

export function InternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-medium text-emerald-700 underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}