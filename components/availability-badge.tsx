import { Badge } from "@/components/ui/badge"

interface AvailabilityBadgeProps {
  available?: boolean
  text?: string
}

export function AvailabilityBadge({ 
  available = true, 
  text = "Available for new projects" 
}: AvailabilityBadgeProps) {
  return (
    <Badge variant="outline" className="inline-flex items-center gap-2 rounded-full border-border bg-muted/50 px-3 py-1 text-xs font-medium w-fit">
      <div className={`h-1.5 w-1.5 rounded-full ${available ? "bg-green-500" : "bg-gray-500"}`} />
      {text}
    </Badge>
  )
}

