export function BookingCta() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#14532d,#052e16)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Book now
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              Ready to experience a more refined standard of dental care?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Whether you are enquiring about routine care or a full treatment journey, this final
              section should feel luxurious, clear, and easy to act on.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                Call: 01282 458340
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                Email: hello@worsthornedentalpractice.co.uk
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                Mon–Thur: 8:30am–5:30pm
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                Patient-first private clinic
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white px-4 py-4 text-sm text-slate-900 outline-none"
                placeholder="Full name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white px-4 py-4 text-sm text-slate-900 outline-none"
                placeholder="Email address"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white px-4 py-4 text-sm text-slate-900 outline-none"
                placeholder="Phone number"
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-white/10 bg-white px-4 py-4 text-sm text-slate-900 outline-none"
                placeholder="Tell us how we can help"
              />
              <button className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50">
                Request Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}