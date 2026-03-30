import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { ProductFamilySection } from "@/components/product-family-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      <HighlightsSection />
      <AboutSection />

      <ValuesSection />
      <ProductFamilySection />
      <ContactSection />
            <Footer />
    </main>
  )
}
