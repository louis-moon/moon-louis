// app/professional/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional — Louis Moon",
  description: "Turning ideas into real change",
}

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
