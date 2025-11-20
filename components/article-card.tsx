import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface ArticleCardProps {
  id: string
  title: string
  date: string
  readTime: string
  href?: string
}

export function ArticleCard({ id, title, date, readTime, href }: ArticleCardProps) {
  const linkHref = href || `/blog/${id}`
  
  return (
    <Card className="group transition-all hover:border-foreground/20 hover:bg-muted/30" asChild>
      <Link href={linkHref}>
        <CardHeader className="p-4">
          <CardTitle className="text-base font-semibold leading-tight transition-colors group-hover:text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="flex items-center gap-2 text-xs">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  )
}

