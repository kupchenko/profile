"use client";

import { ContainerWrapper } from "./container-wrapper";
import { StatCard } from "./stat-card";
import { useLanguage } from "@/contexts/language-context";

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t.stats.yearsIndustry },
    { value: "20+", label: t.stats.successfulProjects },
    { value: "20+", label: t.stats.happyClients },
    { value: "5+", label: t.stats.awards },
  ];

  return (
    <ContainerWrapper as="section" className="py-10 md:py-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </ContainerWrapper>
  );
}
