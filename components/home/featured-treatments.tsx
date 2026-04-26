import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    title: "Family Dentistry",
    desc: "Preventive and routine care designed to support healthy smiles through every stage of life.",
    href: "/treatments/family-dentistry",
    image: "/treatments/family.jpg",
  },
  {
    title: "Hygiene & Care Plan",
    desc: "A long-term restorative solution focused on confidence, stability, and natural function.",
    href: "/treatments/hygiene-treatment",
    image: "/treatments/hygiene.jpg",
  },
  {
    title: "Orthodontics",
    desc: "Carefully planned alignment treatments to improve function, symmetry, and smile confidence.",
    href: "/treatments/orthodontics",
    image: "/treatments/ortho.jpg",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Smile-enhancing care tailored to balance, refinement, and beautifully natural-looking results.",
    href: "/treatments/cosmetic-dentistry",
    image: "/treatments/cosmetic.jpg",
  },

  {
    title: "Teeth Whitening",
    desc: "Professional whitening solutions for a brighter, fresher, and more polished smile.",
    href: "/treatments/teeth-whitening",
    image: "/treatments/whitening.jpg",
  },
  {
    title: "Root Canal Treatment",
    desc: "Sensitive, precise restorative treatment designed to relieve discomfort and save natural teeth.",
    href: "/treatments/root-canal-treatment",
    image: "/treatments/root-canal.jpg",
  },
];

export function FeaturedTreatments() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
          Treatments
        </p>

        <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          A premium treatment experience across every stage of dental care.
        </h2>

        <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
          Explore carefully presented treatments designed to help patients understand
          options quickly while still feeling the quality and depth of a private clinic.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {treatments.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold shadow">
                Popular
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}