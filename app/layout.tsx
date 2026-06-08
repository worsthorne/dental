import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <link
          rel="stylesheet"
          href="https://sitora-widget.vercel.app/sitora-receptionist-widget.css"
        />
      </head>

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

        <Script
          id="sitora-receptionist-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.SitoraReceptionistConfig = {
  clinicId: "worsthorne-dental",
  clinicName: "Worsthorne Dental Clinic",
  clinicEmail: "admin@worsthornedentalpractice.com",
  apiUrl: "/api/receptionist/enquiry",

  sector: "dental",
  assistantLabel: "Digital Receptionist",
  headerTitle: "Dental enquiry",
  bubbleText: "Ask SAM",

  customerLabel: "patient",
  businessLabel: "practice",
  enquiryLabel: "dental enquiry",

  services: [
    "Check-up",
    "Emergency appointment",
    "Hygiene / clean",
    "Fillings",
  
    "Teeth Straightening",
    "Teeth whitening",
    "White Filling",
    "Crowns",
    "Veneers",
    "Implants",
    "Dentures",
    "Bridge",
    "Facial aesthetics",
    "I'm not sure"
  ],

  customerTypes: ["New patient", "Existing patient"],

  preferredTimes: ["Morning", "Afternoon", "After 5pm", "Anytime"],

  urgencyOptions: ["Today / urgent", "This week", "Next week", "Flexible"],

  welcomeMessages: [
    " Welcome to Worsthorne Dental Practice.",
    "My name is Sam, and I can help pass your enquiry to the practice team.",
    "This should only take around 60 seconds."
  ],

  serviceQuestion: "What treatment are you interested in?",
  customerTypeQuestion: "Are you a new or existing patient?",
  preferredTimeQuestion: "When would you prefer the practice to contact you or arrange an appointment?",
  urgencyQuestion: "How soon do you need help?",
  detailsQuestion: "Please leave your details so the practice team can contact you.",

  safetyMessage: "If your symptoms become severe, or you have swelling affecting breathing or swallowing, uncontrolled bleeding, or serious trauma, please seek urgent medical help immediately.",

  appointmentDisclaimer: "This is not a confirmed appointment. The practice team will contact you to confirm availability.",

  consentText: "I consent to the practice contacting me about this enquiry.",

  submitButtonText: "Send enquiry to practice",

  confirmationMessages: [
    "Your enquiry has been sent to the practice team.",
    "They will contact you to confirm the next available option.",
    "Please remember this is not a confirmed appointment until the practice contacts you."
  ],

  requiredFieldsMessage: "Please add your name, a valid mobile number, a valid email address, and consent before sending."
};
            `,
          }}
        />

        <Script
          src="https://sitora-widget.vercel.app/receptionist.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}