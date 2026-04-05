"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PremiumButton } from "@/components/shared/premium-button";
import Image from "next/image";

const treatmentLinks = [
  { label: "Family Dentistry", href: "/treatments/family-dentistry" },
  { label: "Dental Implants", href: "/treatments/dental-implants" },
  { label: "Orthodontics", href: "/treatments/orthodontics" },
  { label: "Cosmetic Dentistry", href: "/treatments/cosmetic-dentistry" },
  { label: "Periodontal Treatment", href: "/treatments/periodontal-treatment" },
  { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
  { label: "Root Canal Treatment", href: "/treatments/root-canal-treatment" },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/our-team" },
  { label: "Treatments", href: "/treatments" },
  { label: "Areas", href: "/areas" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
  { label: "Testimonials", href: "/testimonials" },
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
  className="flex items-center gap-3 shrink-0 transition hover:opacity-90"
>
  <div className="relative h-14 w-14 lg:h-16 lg:w-16">
    <Image
      src="/logo.png"
      alt="Worsthorne Dental Clinic"
      fill
      className="object-contain"
      priority
    />
  </div>

  <p className="text-lg font-semibold text-slate-950">
    Worsthorne Dental Clinic
  </p>
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

                <div className="invisible absolute left-0 top-full mt-4 w-80 rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-[0_25px_70px_rgba(15,23,42,0.12)] transition duration-200 group-hover:visible group-hover:opacity-100">
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

        <div className="hidden sm:block">
          <PremiumButton href="/contact">Book Appointment</PremiumButton>
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

              <div className="mt-2 rounded-[1.5rem] border border-slate-200 p-3">
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