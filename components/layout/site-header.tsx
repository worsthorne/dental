"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PremiumButton } from "@/components/shared/premium-button";
import Image from "next/image";

const treatmentLinks = [
  { label: "Family Dentistry", href: "/treatments/family-dentistry" },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Hygiene Treatment", href: "/treatments/hygiene-treatment" },
  { label: "Orthodontics", href: "/treatments/orthodontics" },
  { label: "Cosmetic Dentistry", href: "/treatments/cosmetic-dentistry" },
  { label: "Periodontal Treatment", href: "/treatments/periodontal-treatment" },
  { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
  { label: "Root Canal Treatment", href: "/treatments/root-canal-treatment" },
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition hover:opacity-90"
        >
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
            <Image
              src="/logo+png"
              alt="Worsth,rne Dental Clinic"
              fill
              className="object-contain"
              priority
              sizes="144px"
            />
          </div>

          <p className="text-lg font-semibold text-slate-950"></p>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {mainLinks.map((link) =>
            link.label === "Treatments" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive(pathname, link.href)
                      ? "text-emerald-700"
                      : "text-slate-700 hover:text-emerald-700"
                  }`}
                >
                  Treatments
                </Link>

                <div className="invisible pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                  <div className="w-80 rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                    <div className="grid gap-1">
                      {treatmentLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
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
                className={`text-sm font-medium transition ${
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

        <div className="ml-3 whitespace-nowrap rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22352b]">
          <PremiumButton href="/contact">Book Now</PremiumButton>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive(pathname, link.href)
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="rounded-[1.5rem] border border-slate-200 p-3">
                <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Treatments
                </p>
                <div className="grid gap-1">
                  {treatmentLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <PremiumButton href="/contact" className="mt-3">
                Book Appointment
              </PremiumButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}