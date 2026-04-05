import { FAQAccordion } from "@/components/shared/faq-accordion";

type TreatmentFaqsProps = {
  items: {
    question: string;
    answer: string;
  }[];
};

export function TreatmentFaqs({ items }: TreatmentFaqsProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc,#ffffff)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            FAQs
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Common questions, answered clearly
          </h2>
        </div>

        <div className="mt-12">
          <FAQAccordion items={items} />
        </div>
      </div>
    </section>
  );
}