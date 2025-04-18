import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TechnologiesSection from "@/components/technologies-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TechnologiesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
