"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeSwitcher } from "./theme-switcher"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "./ui/button"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[80%] mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            {t.navigation.portfolio}
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={pathname === "/" ? "default" : "ghost"}
              size="sm"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname !== "/" && "hover:text-primary"
              )}
              asChild
            >
              <Link href="/">
                {t.navigation.home}
              </Link>
            </Button>
            <Button
              variant={pathname === "/projects" ? "default" : "ghost"}
              size="sm"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname !== "/projects" && "hover:text-primary"
              )}
              asChild
            >
              <Link href="/projects">
                {t.navigation.projects}
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
