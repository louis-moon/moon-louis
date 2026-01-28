"use client"

// components/activity/heatmap.tsx
import * as React from "react"

type Day = {
  date: string // YYYY-MM-DD
  value: number
}

/* ──────────────────────────────────────────────
   Tunable configuration (design knobs)
────────────────────────────────────────────── */
const HEATMAP_CONFIG = {
  // Reduce this to 48 / 46 / 42 to “fill” the card more
  visibleWeeks: 36,

  // Spacing (px)
  rowGap: 5, // vertical gap between cells
  colGap: 3, // horizontal gap between weeks

  // Cell size bounds (px)
  minCell: 12,
  maxCell: 14,
} as const

/* ──────────────────────────────────────────────
   Helpers
────────────────────────────────────────────── */
function level(v: number) {
  if (v <= 0) return 0
  if (v <= 2) return 1
  if (v <= 6) return 2
  if (v <= 12) return 3
  return 4
}

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

/* ──────────────────────────────────────────────
   Heatmap
────────────────────────────────────────────── */
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
  const startDow = start.getUTCDay() // 0 = Sunday

  const padded: Day[] = []
  for (let i = 0; i < startDow; i++) {
    padded.push({ date: `pad-${i}`, value: 0 })
  }
  padded.push(...ordered)

  const allWeeks: Day[][] = []
  for (let i = 0; i < padded.length; i += 7) {
    allWeeks.push(padded.slice(i, i + 7))
  }

  // Keep the RIGHT edge anchored to the present
  const weeks = allWeeks.slice(
    Math.max(0, allWeeks.length - HEATMAP_CONFIG.visibleWeeks)
  )

  /* ──────────────────────────────────────────────
     Responsive sizing
  ────────────────────────────────────────────── */
  const columns = weeks.length
  const { colGap, rowGap, minCell, maxCell } = HEATMAP_CONFIG

  const cellSize = React.useMemo(() => {
    if (!width || columns === 0) return maxCell

    const totalGap = colGap * (columns - 1)
    const raw = Math.floor((width - totalGap) / columns)

    return Math.max(minCell, Math.min(maxCell, raw))
  }, [width, columns, colGap, minCell, maxCell])

  const needsScroll = cellSize === minCell

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
          style={{ gap: `${colGap}px` }}
        >
          {weeks.map((week, wi) => (
            <div
              key={wi}
              className="flex flex-col"
              style={{ gap: `${rowGap}px` }}
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
