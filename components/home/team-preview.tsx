import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { teamMembers } from "@/lib/data/team";

export function TeamPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Our team"
          title="The people behind the care matter just as much as the treatments."
        />

        <Link href="/our-team" className="text-sm font-semibold text-emerald-700">
          View Full Team →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            <div className="mb-6 h-64 rounded-[1.5rem] bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#e2e8f0)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              {member.role}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">
              {member.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}