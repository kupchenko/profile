import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink, Bell } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

const projects = [
  {
    id: "6",
    name: "CodeReview AI",
    description: "AI-powered code review assistant that helps teams maintain high code quality standards.",
    logo: "/code-review-ai-logo.jpg",
    link: "#",
    comingSoon: true,
  },
  {
    id: "1",
    name: "CloudSync Pro",
    description: "Enterprise-grade file synchronization and collaboration platform for distributed teams.",
    logo: "/cloud-sync-logo.jpg",
    link: "#",
    isNew: true,
    discountEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  },
  {
    id: "2",
    name: "DataViz Studio",
    description: "Advanced data visualization and analytics dashboard for business intelligence.",
    logo: "/data-visualization-logo.png",
    link: "#",
    isNew: true,
    discountEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
  },
  {
    id: "3",
    name: "DevOps Toolkit",
    description: "Comprehensive suite of tools for modern DevOps workflows and CI/CD pipelines.",
    logo: "/devops-tools-logo.jpg",
    link: "#",
    discount: 15,
  },
  {
    id: "4",
    name: "API Gateway Hub",
    description: "Centralized API management platform with rate limiting and monitoring capabilities.",
    logo: "/api-gateway-logo.jpg",
    link: "#",
    discount: 25,
  },
  {
    id: "5",
    name: "SecureAuth",
    description: "Zero-trust authentication system with multi-factor support and biometric integration.",
    logo: "/security-authentication-logo.jpg",
    link: "#",
    discount: 20,
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="container py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Featured Projects</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Explore my portfolio of successful products and solutions
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group relative flex flex-col overflow-hidden border-border/50 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {project.comingSoon ? (
                  <Badge
                    variant="default"
                    className="absolute right-4 top-4 bg-gradient-to-r from-purple-500 to-violet-500 text-xs font-semibold text-white shadow-lg"
                  >
                    Live soon
                  </Badge>
                ) : project.isNew ? (
                  <Badge
                    variant="default"
                    className="absolute right-4 top-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-xs font-semibold text-white shadow-lg"
                  >
                    New
                  </Badge>
                ) : (
                  <Badge
                    variant="default"
                    className="absolute right-4 top-4 bg-gradient-to-r from-green-500 to-emerald-500 text-xs font-semibold text-white shadow-lg"
                  >
                    {project.discount}% Discount
                  </Badge>
                )}

                <div className="flex flex-1 flex-col space-y-6">
                  <div className="flex justify-center pt-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.name} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 text-center">
                    <h3 className="text-balance text-xl font-bold">{project.name}</h3>
                    <p className="text-pretty text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  {project.isNew && project.discountEndDate && (
                    <div className="space-y-2 rounded-lg border border-border/50 bg-muted/30 p-3">
                      <p className="text-center text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Lifetime Offer Ends In
                      </p>
                      <CountdownTimer targetDate={project.discountEndDate} />
                    </div>
                  )}

                  <div className="pt-2">
                    {project.comingSoon ? (
                      <Button className="w-full" size="lg">
                        <Bell className="mr-2 h-4 w-4" />
                        Notify when live
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg">
                        Try it
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
