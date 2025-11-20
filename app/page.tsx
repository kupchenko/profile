import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RecentWorkSection } from "@/components/recent-work-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <div className="border-t border-border/50" />
      <ExpertiseSection />
      <div className="border-t border-border/50" />
      <TestimonialsSection />
      <div className="border-t border-border/50" />
      <RecentWorkSection />
    </main>
  )
}
