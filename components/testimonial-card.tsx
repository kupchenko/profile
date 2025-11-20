import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">"{content}"</p>
      </CardContent>
      <CardFooter className="border-t border-border/50 p-6 pt-4">
        <div>
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </CardFooter>
    </Card>
  )
}

