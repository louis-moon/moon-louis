// components/activity/heatmap.tsx
"use client"

import * as React from "react"

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

/* ──────────────────────────────────────────────
   Resize observer hook
────────────────────────────────────────────── */
function useContainerWidth<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null)
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    if (!ref.current) return

    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width)
    })

    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return { ref, width }
}

export function Heatmap({
  days,
  ariaLabel,
}: {
  days: Day[]
  ariaLabel: string
}) {
  const { ref, width } = useContainerWidth<HTMLDivElement>()

  const ordered = [...days].sort((a, b) => a.date.localeCompare(b.date))

  if (ordered.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        No data available.
      </div>
    )
  }

  /* ──────────────────────────────────────────────
     Normalize into weeks × 7 days
  ────────────────────────────────────────────── */
  const start = new Date(ordered[0].date + "T00:00:00")
  const startDow = start.getUTCDay() // Sun = 0

  const padded: Day[] = []
  for (let i = 0; i < startDow; i++) {
    padded.push({ date: `pad-${i}`, value: 0 })
  }
  padded.push(...ordered)

  const weeks: Day[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7))
  }

  /* ──────────────────────────────────────────────
     Responsive sizing
  ────────────────────────────────────────────── */
  const columns = weeks.length
  const gap = 6 // px (matches gap-1.5)
  const MIN_CELL = 6
  const MAX_CELL = 14

  const cellSize = React.useMemo(() => {
    if (!width || columns === 0) return MAX_CELL

    const totalGap = gap * (columns - 1)
    const raw = Math.floor((width - totalGap) / columns)

    return Math.max(MIN_CELL, Math.min(MAX_CELL, raw))
  }, [width, columns])

  const needsScroll = cellSize === MIN_CELL

  return (
    <div
      ref={ref}
      aria-label={ariaLabel}
      role="img"
      className="w-full min-w-0"
    >
      <div
        className={`${
          needsScroll ? "overflow-x-auto" : "overflow-x-hidden"
        } pb-2`}
      >
        <div
          className="flex min-w-max"
          style={{ gap: `${gap}px` }}
        >
          {weeks.map((week, wi) => (
            <div
              key={wi}
              className="flex flex-col"
              style={{ gap: `${gap}px` }}
            >
              {Array.from({ length: 7 }).map((_, di) => {
                const d = week[di]
                const v = d?.value ?? 0
                const lv = level(v)

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
                    className={`rounded-[4px] border border-border ${cls}`}
                    style={{
                      width: `${cellSize}px`,
                      height: `${cellSize}px`,
                    }}
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
    </div>
  )
}
