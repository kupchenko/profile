import { Button } from "@/components/ui/button"
import { type LucideIcon } from "lucide-react"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  external?: boolean
}

export function SocialLink({ href, icon: Icon, label, external = true }: SocialLinkProps) {
  return (
    <Button 
      variant="outline" 
      size="sm"
      className="gap-2 bg-muted/30 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500" 
      asChild
    >
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={label}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </a>
    </Button>
  )
}

