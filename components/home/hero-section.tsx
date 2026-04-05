import { PremiumButton } from "@/components/shared/premium-button";
import { Reveal } from "@/components/shared/reveal";
import { QuickBooking } from "@/components/contact/quick-booking";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_40%)]" />
      <div className="absolute left-[-10%] top-12 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute right-[-8%] top-24 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        <Reveal>
          <div>
            <div className="inline-flex rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-sm text-emerald-800 shadow-sm backdrop-blur">
              Trusted care. Beautiful results. Calm experience.
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.94] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Advanced dental treatments with a truly premium feel.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A refined private dental experience built around comfort, precision,
              and confidence. From routine family care to implants, orthodontics,
              whitening, and cosmetic dentistry, every detail is designed to feel considered.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>✔ Trusted by patients across Lancashire</span>
              <span>✔ Established since 1998</span>
              <span>✔ Serving Burnley families and wider local community</span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PremiumButton href="/contact">Book Consultation</PremiumButton>
              <PremiumButton href="/treatments" variant="secondary">
                Explore Treatments
              </PremiumButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Experienced clinical team",
                "Modern technology",
                "Patient-first environment",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="transition-transform duration-500 hover:-translate-y-2">
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                    Private Dental Clinic
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    Care that feels expertly designed
                  </h2>
                </div>

                <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white/90">
                  5★ Reviews
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                  <p className="text-sm text-white/70">Most requested</p>
                  <p className="mt-2 text-lg font-semibold">Dental Implants</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Precision-led tooth replacement with lasting function and natural aesthetics.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                  <p className="text-sm text-white/70">Patient promise</p>
                  <p className="mt-2 text-lg font-semibold">Clear, calm, considered</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Every consultation is focused on clarity, comfort, and confidence.
                  </p>
                </div>
              </div>

              <QuickBooking />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}