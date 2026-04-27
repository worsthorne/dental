import Link from "next/link";
import {
  Users,
  Sparkles,
  ScanLine,
  WandSparkles,
  ShieldPlus,
  Smile,
  Activity,
  HeartPulse,
} from "lucide-react";

type TreatmentCardProps = {
  title: string;
  description: string;
  href: string;
};

const treatmentIcons: Record<
  string,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  "Family Dentistry": Users,
  "Dental Hygiene": Sparkles,
  Orthodontics: ScanLine,
  "Cosmetic Dentistry": WandSparkles,
  "Periodontal Treatment": ShieldPlus,
  "Teeth Whitening": Smile,
  "Root Canal Treatment": Activity,
  "Facial Aesthetics": HeartPulse,
};

export function TreatmentCard({
  title,
  description,
  href,
}: TreatmentCardProps) {
  const Icon = treatmentIcons[title];

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#10b981,#0f172a)] opacity-0 transition group-hover:opacity-100" />

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
        {Icon ? (
          <Icon className="h-6 w-6" strokeWidth={2} />
        ) : (
          <span className="text-lg font-semibold">{title.charAt(0)}</span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <span className="mt-6 inline-flex text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1">
        Learn More →
      </span>
    </Link>
  );
}