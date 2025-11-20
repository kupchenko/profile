import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContainerWrapper } from "./container-wrapper"
import { ProjectCard } from "./project-card"
import { ArticleCard } from "./article-card"

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
    <ContainerWrapper as="section" className="py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        {/* Projects Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Projects</h2>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/projects">
                View all →
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Recent Articles</h2>
            <Button variant="link" className="text-sm" asChild>
              <Link href="/blog">
                View all →
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link href="/blog">Explore All Articles</Link>
          </Button>
        </div>
      </div>
    </ContainerWrapper>
  )
}
