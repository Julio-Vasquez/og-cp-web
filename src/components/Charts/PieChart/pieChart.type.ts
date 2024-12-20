export type PieChartProps = {
  selectedChild: string
  selectedPhase: string
}

export type PieChartMutation = {
  _idChildren: string
  _idPhase: string
}

export type PieChartResponse = { name: string; pct: number }
