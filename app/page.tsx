import { HeroSection } from "@/components/hero-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Separator } from "@/components/ui/separator";
import { ContainerWrapper } from "@/components/container-wrapper";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <ContainerWrapper>
        <Separator className="bg-border/50" />
      </ContainerWrapper>
      <ExpertiseSection />
      <ContainerWrapper>
        <Separator className="bg-border/50" />
      </ContainerWrapper>
      <TestimonialsSection />
    </main>
  );
}
