import { Code2, Rocket, Settings, Search, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

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
    <section className="container px-4 py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">How I Can Help You</h2>
          <p className="text-sm text-muted-foreground">Expertise across the full product lifecycle</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden border-border/50 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-balance text-xl font-semibold">{item.title}</h3>
                  <p className="text-pretty text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
