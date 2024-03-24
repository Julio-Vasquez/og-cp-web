import { Tiny } from '@ant-design/plots'

export const Progress = () => {
    const progress = 0.7

    const config = {
        width: 280,
        height: 20,
        autoFit: false,
        percent: progress,
        color: ['#0f0f0f', '#85f231'],
        annotations: [
            {
                type: 'text',
                style: {
                    text: `${progress * 100}%`,
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 12,
                    fontStyle: 'bold',
                },
            },
        ],
    }
    return (
        <div style={{ width: '300px' }}>
            <Tiny.Progress {...config} />
        </div>
    )
}
