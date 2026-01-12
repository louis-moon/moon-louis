// components/activity/heatmap.tsx
type Day = {
  date: string // YYYY-MM-DD
  value: number
}

function level(v: number) {
  if (v <= 0) return 0
  if (v <= 2) return 1
  if (v <= 6) return 2
  if (v <= 12) return 3
  return 4
}

export function Heatmap({
  days,
  ariaLabel,
}: {
  days: Day[]
  ariaLabel: string
}) {
  // Expect days to cover a contiguous range. Render as weeks (columns) × 7 (rows).
  // We'll pad at the beginning so the first column starts on Sunday.
  const ordered = [...days].sort((a, b) => a.date.localeCompare(b.date))

  if (ordered.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        No data available.
      </div>
    )
  }

  const start = new Date(ordered[0].date + "T00:00:00")
  const startDow = start.getUTCDay() // 0..6 (Sun..Sat)

  const padded: Day[] = []
  for (let i = 0; i < startDow; i++) {
    // pad “empty” days before start
    padded.push({ date: `pad-${i}`, value: 0 })
  }
  padded.push(...ordered)

  const weeks: Day[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }

  return (
    <div aria-label={ariaLabel} role="img" className="w-full">
      <div className="flex gap-1.5 overflow-x-auto horizontal-scroll pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1.5">
            {Array.from({ length: 7 }).map((_, di) => {
              const d = week[di]
              const v = d?.value ?? 0
              const lv = level(v)

              // Keep colors consistent with your theme: use primary/secondary + opacity.
              // (No explicit hex colors.)
              const cls =
                lv === 0
                  ? "bg-muted"
                  : lv === 1
                    ? "bg-primary/20"
                    : lv === 2
                      ? "bg-primary/35"
                      : lv === 3
                        ? "bg-primary/55"
                        : "bg-primary/75"

              return (
                <div
                  key={di}
                  className={`h-3.5 w-3.5 rounded-[4px] border border-border ${cls}`}
                  title={
                    d?.date?.startsWith("pad-")
                      ? ""
                      : `${d?.date}: ${v}`
                  }
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
