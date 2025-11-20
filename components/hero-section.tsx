import { ContactModal } from "./contact-modal";
import { BookCallModal } from "./book-call-modal";
import { ContainerWrapper } from "./container-wrapper";
import { AvailabilityBadge } from "./availability-badge";
import { SocialLink } from "./social-link";
import Image from "next/image";
import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";

export function HeroSection() {
  return (
    <ContainerWrapper as="section" className="py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-10 lg:gap-12">
        <div className="flex flex-col justify-center space-y-5">
          <div className="space-y-3">
            <AvailabilityBadge />
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Alex Johnson
            </h1>
            <p className="text-lg font-medium text-muted-foreground sm:text-xl">
              Founding Engineer & Startup Advisor
            </p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground lg:text-base">
              I build accessible, pixel-perfect digital experiences for the web.
              My favorite work lies at the intersection of design and
              development, creating experiences that not only look great but are
              meticulously built for performance and usability.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:alex@example.com"
                className="hover:text-foreground transition-colors"
              >
                alex@example.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <SocialLink
              href="https://github.com"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://twitter.com"
              icon={Twitter}
              label="Twitter"
            />
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
    </ContainerWrapper>
  );
}
