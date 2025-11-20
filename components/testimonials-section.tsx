import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStartup Inc",
    content:
      "Alex's technical expertise and strategic thinking helped us scale from 0 to 100k users in just 6 months. His guidance was invaluable.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, DataFlow",
    content:
      "Working with Alex was a game-changer. He not only delivered exceptional code but also mentored our entire engineering team.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager, CloudSync",
    content:
      "Alex has an incredible ability to translate business requirements into elegant technical solutions. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="container px-4 py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">What Clients Say</h2>
          <p className="text-sm text-muted-foreground">Trusted by founders and engineering leaders</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{testimonial.content}"</p>
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
