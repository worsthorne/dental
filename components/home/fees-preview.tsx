import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";

const items = [
  ["Consultation", "From £95"],
  ["Teeth Whitening", "From £349"],
  ["Dental Implants", "From £2,400"],
  ["Emergency Visit", "From £85"],
];

export function FeesPreview() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc,#ffffff)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Fees & finance"
            title="Transparent pricing builds confidence before treatment begins."
            description="A premium practice should still make costs feel clear and approachable. This section reassures patients that they can understand fees, consultation costs, and finance options before they commit."
          />
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="space-y-4">
            {items.map(([label, price]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-stone-50 px-4 py-4"
              >
                <span className="text-sm font-medium text-slate-700">{label}</span>
                <span className="text-sm font-semibold text-slate-950">{price}</span>
              </div>
            ))}
          </div>

          <Link
            href="/fees"
            className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            View Full Fees
          </Link>
        </div>
      </div>
    </section>
  );
}