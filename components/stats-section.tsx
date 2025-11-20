export function StatsSection() {
  const stats = [
    { value: "10+", label: "Years in the Industry" },
    { value: "50+", label: "Successful Projects" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Awards & Recognition" },
  ]

  return (
    <section className="container px-4 py-10 md:py-12">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-1">
            <div className="text-3xl font-bold tracking-tight sm:text-4xl">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
