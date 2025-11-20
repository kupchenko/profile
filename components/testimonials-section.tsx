"use client";

import { ContainerWrapper } from "./container-wrapper";
import { TestimonialCard } from "./testimonial-card";
import { useLanguage } from "@/contexts/language-context";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <ContainerWrapper as="section" className="py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            {t.testimonials.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={5}
            />
          ))}
        </div>
      </div>
    </ContainerWrapper>
  );
}
