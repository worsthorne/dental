import { HeroSection } from "@/components/home/hero-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { IntroSection } from "@/components/home/intro-section";
import { FeaturedTreatments } from "@/components/home/featured-treatments";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TeamPreview } from "@/components/home/team-preview";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { FeesPreview } from "@/components/home/fees-preview";
import { NewsPreview } from "@/components/home/news-preview";
import { BookingCta } from "@/components/home/booking-cta";
import { AboutEstablished } from "@/components/home/about-established";
import { TrustStats } from "@/components/home/trust-stats";
import { EntryGate } from "@/components/entry-gate";
export default function HomePage() {
  return (
    <main>
      <EntryGate />
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <AboutEstablished />
       <TrustStats />
      <FeaturedTreatments />
      <WhyChooseUs />
      <TeamPreview />
      <CaseStudiesPreview />
      <TestimonialsPreview />
      <FeesPreview />
      <NewsPreview />
      <BookingCta />
    </main>
  );
}