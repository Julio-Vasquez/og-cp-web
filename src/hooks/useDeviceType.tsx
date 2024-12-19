import { Grid } from 'antd'

const { useBreakpoint } = Grid

type DeviceType = 'Mobile' | 'Tablet' | 'Desktop'

export const useDeviceType = (): DeviceType => {
  const breakpoints = useBreakpoint()

  if (breakpoints.xs || breakpoints.sm) return 'Mobile'

  if (breakpoints.md || breakpoints.lg) return 'Tablet'

  return 'Desktop'
}
