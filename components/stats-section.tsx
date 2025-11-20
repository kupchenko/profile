import { ContainerWrapper } from "./container-wrapper"
import { StatCard } from "./stat-card"

export function StatsSection() {
  const stats = [
    { value: "10+", label: "Years in the Industry" },
    { value: "50+", label: "Successful Projects" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Awards & Recognition" },
  ]

  return (
    <ContainerWrapper as="section" className="py-10 md:py-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </ContainerWrapper>
  )
}
