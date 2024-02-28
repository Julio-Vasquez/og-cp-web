export const funcShapeLiquid = (x: number, y: number, r: number) => {
    const path = []
    const w = r * 2

    for (let i = 0; i < 5; i++) {
        path.push([
            i === 0 ? 'M' : 'L',
            (Math.cos(((18 + i * 72) * Math.PI) / 180) * w) / 2 + x,
            (-Math.sin(((18 + i * 72) * Math.PI) / 180) * w) / 2 + y,
        ])
        path.push([
            'L',
            (Math.cos(((54 + i * 72) * Math.PI) / 180) * w) / 4 + x,
            (-Math.sin(((54 + i * 72) * Math.PI) / 180) * w) / 4 + y,
        ])
    }
    path.push(['Z'])
    return path
}

export const funcAreaChart = (d: any) => new Date(d?.date)
