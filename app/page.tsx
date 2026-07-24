import { SiteHeader } from '@/components/site-header'
import { AppointmentPopup } from '@/components/appointment-popup'
import { Hero } from '@/components/hero'
import { MarqueeBanner } from '@/components/marquee-banner'
import { RoyaltySection } from '@/components/royalty-section'
import { StorySection } from '@/components/story-section'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { HoursSection } from '@/components/hours-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { StatsSection } from '@/components/stats-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <AppointmentPopup />
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeBanner />
        <RoyaltySection />
        <StorySection />
        <ServicesSection />
        <GallerySection />
        <HoursSection />
        <TestimonialsSection />
        <StatsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
