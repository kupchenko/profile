"use client";

import { Code2, Rocket, Settings, Search, TrendingUp } from "lucide-react"
import { ContainerWrapper } from "./container-wrapper"
import { ExpertiseCard } from "./expertise-card"
import { useLanguage } from "@/contexts/language-context";

export function ExpertiseSection() {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: Rocket,
      title: t.expertise.items.mvp.title,
      description: t.expertise.items.mvp.description,
    },
    {
      icon: Code2,
      title: t.expertise.items.devExperience.title,
      description: t.expertise.items.devExperience.description,
    },
    {
      icon: Settings,
      title: t.expertise.items.processes.title,
      description: t.expertise.items.processes.description,
    },
    {
      icon: Search,
      title: t.expertise.items.diligence.title,
      description: t.expertise.items.diligence.description,
    },
    {
      icon: TrendingUp,
      title: t.expertise.items.scaling.title,
      description: t.expertise.items.scaling.description,
    },
  ]

  return (
    <ContainerWrapper as="section" className="py-12 md:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{t.expertise.title}</h2>
          <p className="text-sm text-muted-foreground">{t.expertise.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </ContainerWrapper>
  )
}
