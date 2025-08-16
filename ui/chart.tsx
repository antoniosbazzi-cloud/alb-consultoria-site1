"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Temas suportados
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & React.ComponentProps<"div">
}

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ReactNode
  }
>(({ className, children, config, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex w-full flex-col", className)} {...props}>
      {children}
    </div>
  )
})
ChartContainer.displayName = "Chart"

export function ChartTooltipContent({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: any[]
  label?: string
}) {
  if (!active || !payload) return null

  return (
    <div className="rounded-md border bg-background p-2 shadow-sm">
      <p className="font-medium">{label}</p>
      {payload.map((item, index) => (
        <div key={index} className="flex items-center justify-between gap-2">
          <span>{item.name}:</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  )
}

// Exemplo de uso no gráfico
export function Chart() {
  return (
    <RechartsPrimitive.LineChart width={400} height={300}>
      <RechartsPrimitive.Tooltip content={<ChartTooltipContent />} />
    </RechartsPrimitive.LineChart>
  )
}
