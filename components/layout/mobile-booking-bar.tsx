import Link from "next/link";

export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 lg:hidden">
      <Link
        href="/contact"
        className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.28)] backdrop-blur"
      >
        Book Appointment
      </Link>
    </div>
  );
}