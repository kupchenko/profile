import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  href?: string
}

export function ProjectCard({ id, title, description, tags, href }: ProjectCardProps) {
  const linkHref = href || `/projects#${id}`
  
  return (
    <Card className="group transition-all hover:border-foreground/20 hover:bg-muted/30">
      <Link href={linkHref}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg transition-colors group-hover:text-foreground">
              {title}
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}

