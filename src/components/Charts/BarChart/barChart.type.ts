export type BarChartMutation = { _idChildren: string; _idPhase: string }

type Progress = {
  activity: string
  pctCompleted: number
}

export type BarChartResponse = {
  phase: string
  progress: Progress[]
}

export type BarChartProps = {
  selectedChild: string
  selectedPhase: string
}
