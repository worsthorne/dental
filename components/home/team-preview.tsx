import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/data/team";

export function TeamPreview() {
  const featuredMembers = teamMembers.slice(0, 2);

  return (
    <section className="px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
            Meet the team
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
            Experienced, supportive care from a team that puts patients first
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Our practice combines clinical skill with a calm, thoughtful approach
            to patient care. Meet key members of the team and explore the people
            behind Worsthorne Dental Practice.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredMembers.map((member, index) => (
            <article
              key={member.slug || member.name || `member-${index}`}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-72 w-full sm:h-80">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name || "Team member"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain bg-white"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#f4faf4] text-sm font-medium text-slate-500">
                    Team photo coming soon
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#355b46]">
                  {index === 0
                    ? "BDS BSc (Hons) MFDS RCSEd PGCert ClinTeach"
                    : "Patient care"}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {member.name || "Team member"}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-700">
                  {member.role || ""}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {member.shortBio || ""}
                </p>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/our-team"
                    className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
                  >
                    View full team
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}