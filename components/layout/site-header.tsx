"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PremiumButton } from "@/components/shared/premium-button";

const treatmentLinks = [
  { label: "Family Dentistry", href: "/treatments/family-dentistry" },
  { label: "Hygiene Treatment", href: "/treatments/hygiene-treatment" },
  { label: "Orthodontics", href: "/treatments/orthodontics" },
  { label: "Cosmetic Dentistry", href: "/treatments/cosmetic-dentistry" },
  { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
  { label: "Root Canal Treatment", href: "/treatments/root-canal-treatment" },
  { label: "Periodontal Treatment", href: "/treatments/periodontal-treatment" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Team", href: "/our-team" },
  { label: "Fees", href: "/fees" },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Smilecare Plan", href: "/smilecare-plan" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const secondaryMobileLinks = [
  { label: "Out of Hours", href: "/out-of-hours" },
  { label: "FAQs", href: "/faq" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center transition hover:opacity-90"
          aria-label="Worsthorne Dental Practice home"
        >
          <div className="relative h-16 w-28 sm:h-20 sm:w-36 lg:h-24 lg:w-44">
            <Image
              src="/logo.png"
              alt="Worsthorne Dental Practice"
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {mainLinks.map((link) =>
            link.label === "Treatments" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition ${
                    isActive(pathname, link.href)
                      ? "text-emerald-700"
                      : "text-slate-700 hover:text-emerald-700"
                  }`}
                >
                  Treatments
                </Link>

                <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                  <div className="w-80 rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
                    <div className="mb-2 px-3 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Treatments
                      </p>
                    </div>

                    <div className="grid gap-1">
                      {treatmentLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  isActive(pathname, link.href)
                    ? "text-emerald-700"
                    : "text-slate-700 hover:text-emerald-700"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <PremiumButton href="/contact">Book Now</PremiumButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl font-semibold text-slate-900 shadow-sm lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <div className="grid gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    isActive(pathname, link.href)
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-3">
                <p className="px-2 pb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                  Treatments
                </p>

                <div className="grid gap-1">
                  {treatmentLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-emerald-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                {secondaryMobileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold transition ${
                      isActive(pathname, link.href)
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <PremiumButton href="/contact" className="w-full">
                  Book Appointment
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}