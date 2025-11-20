import { cn } from "@/lib/utils"

interface ContainerWrapperProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "main"
}

export function ContainerWrapper({ 
  children, 
  className, 
  as: Component = "div" 
}: ContainerWrapperProps) {
  return (
    <Component className={cn("w-full max-w-[80%] mx-auto px-4", className)}>
      {children}
    </Component>
  )
}

