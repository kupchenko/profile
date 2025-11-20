import { Code2, Rocket, Settings, Search, TrendingUp } from "lucide-react"
import { ContainerWrapper } from "./container-wrapper"
import { ExpertiseCard } from "./expertise-card"

const expertise = [
  {
    icon: Rocket,
    title: "Idea to MVP",
    description: "Starting projects from scratch and bringing your vision to life",
  },
  {
    icon: Code2,
    title: "Developer Experience",
    description: "Building high-performance developer paths and workflows",
  },
  {
    icon: Settings,
    title: "Engineering Processes",
    description: "Setting up efficient engineering processes and best practices",
  },
  {
    icon: Search,
    title: "Technical Due Diligence",
    description: "Comprehensive technical audits and code reviews",
  },
  {
    icon: TrendingUp,
    title: "Scaling Architecture",
    description: "Architecting systems designed for growth and performance",
  },
]

export function ExpertiseSection() {
  return (
    <ContainerWrapper as="section" className="py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">How I Can Help You</h2>
          <p className="text-sm text-muted-foreground">Expertise across the full product lifecycle</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </ContainerWrapper>
  )
}
