import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const writings = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    description: "Learn the best practices for architecting React apps that can grow with your business.",
    category: "React",
    date: "Jan 15, 2025",
  },
  {
    id: "2",
    title: "The Future of Web Development",
    description: "Exploring emerging trends and technologies shaping how we build for the web.",
    category: "Web Dev",
    date: "Jan 10, 2025",
  },
  {
    id: "3",
    title: "Optimizing Performance in Next.js",
    description: "Practical tips and techniques for building lightning-fast Next.js applications.",
    category: "Performance",
    date: "Jan 5, 2025",
  },
]

const projects = [
  {
    id: "taskmaster",
    title: "TaskMaster Pro",
    description: "A comprehensive project management tool for remote teams.",
  },
  {
    id: "devhub",
    title: "DevHub",
    description: "A social platform connecting developers worldwide.",
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description: "Real-time analytics for modern web applications.",
  },
]

export function BlogSection() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Writing Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Writing</h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {writings.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block space-y-2 border-l-2 border-border pl-4 transition-colors hover:border-foreground"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="font-semibold leading-tight transition-colors group-hover:text-foreground">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects#${project.id}`}
                className="group block space-y-1 border-l-2 border-border pl-4 transition-colors hover:border-foreground"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold transition-colors group-hover:text-foreground">{project.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
