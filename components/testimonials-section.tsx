import { ContainerWrapper } from "./container-wrapper"
import { TestimonialCard } from "./testimonial-card"

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
    <ContainerWrapper as="section" className="py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">What Clients Say</h2>
          <p className="text-sm text-muted-foreground">Trusted by founders and engineering leaders</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </ContainerWrapper>
  )
}
