import { ContactModal } from "./contact-modal"
import { BookCallModal } from "./book-call-modal"
import Image from "next/image"
import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container px-4 py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-10 lg:gap-12">
        <div className="flex flex-col justify-center space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Available for new projects
            </div>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Alex Johnson</h1>
            <p className="text-lg font-medium text-muted-foreground sm:text-xl">Founding Engineer & Startup Advisor</p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground lg:text-base">
              I build accessible, pixel-perfect digital experiences for the web. My favorite work lies at the
              intersection of design and development, creating experiences that not only look great but are meticulously
              built for performance and usability.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <a href="mailto:alex@example.com" className="hover:text-foreground transition-colors">
                alex@example.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
              <span>Twitter</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ContactModal />
            <BookCallModal />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:items-end">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl lg:h-80 lg:w-80">
            <Image
              src="/software-engineer-headshot.png"
              alt="Alex Johnson - Software Engineer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
