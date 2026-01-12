// components/activity/stat-pills.tsx
type Item = {
  label: string
  value: string
}

export function StatPills({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="bg-secondary border border-border rounded-lg px-4 py-2"
        >
          <p className="text-[11px] text-muted-foreground">{it.label}</p>
          <p className="text-sm font-medium text-foreground">{it.value}</p>
        </div>
      ))}
    </div>
  )
}
