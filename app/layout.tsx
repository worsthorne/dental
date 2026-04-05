import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileBookingBar } from "@/components/layout/mobile-booking-bar";
import { LocalBusinessSchema } from "@/components/schema/local-business-schema";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = buildMetadata({
  title: "Worsthorne Dental Clinic | Premium Dental Care in Lancashire",
  description:
    "Worsthorne Dental Clinic offers premium dental care for patients in Burnley, Blackburn, Preston, Manchester, and across North West England. Explore family dentistry, implants, whitening, cosmetic dentistry, and more.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} bg-stone-50 font-sans text-slate-900 antialiased`}
      >
        <LocalBusinessSchema />
        <div className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_22%),linear-gradient(to_bottom,#fafaf9,#ffffff)]">
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileBookingBar />
        </div>
      </body>
    </html>
  );
}