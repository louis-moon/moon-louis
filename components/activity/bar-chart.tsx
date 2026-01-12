// components/activity/bar-chart.tsx
type Point = {
  label: string // e.g. "2025-12"
  value: number
}

export function BarChart({
  series,
  ariaLabel,
}: {
  series: Point[]
  ariaLabel: string
}) {
  if (!series.length) {
    return <div className="text-sm text-muted-foreground">No data available.</div>
  }

  const max = Math.max(...series.map((p) => p.value), 1)

  return (
    <div aria-label={ariaLabel} role="img" className="w-full">
      <div className="flex items-end gap-2 overflow-x-auto horizontal-scroll pb-2">
        {series.map((p) => {
          const h = Math.round((p.value / max) * 140) // px
          return (
            <div key={p.label} className="flex flex-col items-center gap-2 flex-shrink-0">
              <div
                className="w-8 rounded-lg border border-border bg-primary/30"
                style={{ height: `${h}px` }}
                title={`${p.label}: ${p.value}`}
              />
              <p className="text-[11px] text-muted-foreground whitespace-nowrap">
                {p.label.slice(2).replace("-", "’")} {/* "25’12" vibe */}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
