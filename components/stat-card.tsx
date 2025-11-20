interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center space-y-1">
      <div className="text-3xl font-bold tracking-tight sm:text-4xl">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

