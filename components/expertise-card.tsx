import { Card, CardContent } from "@/components/ui/card"
import { type LucideIcon } from "lucide-react"

interface ExpertiseCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ExpertiseCard({ icon: Icon, title, description }: ExpertiseCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
      <CardContent className="p-6 space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 transition-colors group-hover:bg-blue-500/20">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-balance text-xl font-semibold">{title}</h3>
          <p className="text-pretty text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

