import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "taskmaster",
    title: "TaskMaster Pro",
    description: "A comprehensive project management tool for remote teams with real-time collaboration.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "devhub",
    title: "DevHub",
    description: "A social platform connecting developers worldwide with code sharing and mentorship.",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with custom visualizations and reporting tools.",
    tags: ["React", "D3.js", "AWS"],
  },
]

const articles = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    date: "Jan 15, 2025",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "The Future of Web Development",
    date: "Jan 10, 2025",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Optimizing Performance in Next.js",
    date: "Jan 5, 2025",
    readTime: "10 min read",
  },
]

export function RecentWorkSection() {
  return (
    <section className="container px-4 py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects#${project.id}`}
                className="group block space-y-3 rounded-lg border border-border/50 p-5 transition-all hover:border-foreground/20 hover:bg-muted/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-lg transition-colors group-hover:text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Recent Articles</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group block space-y-2 rounded-lg border border-border/50 p-4 transition-all hover:border-foreground/20 hover:bg-muted/30"
              >
                <h3 className="font-semibold leading-tight transition-colors group-hover:text-foreground">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/blog">Explore All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
