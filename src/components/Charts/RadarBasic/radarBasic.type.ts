import propTypes from 'prop-types'

export const RadarBasicPropTypes = {
    data: propTypes.arrayOf(propTypes.any.isRequired).isRequired,
    xField: propTypes.string.isRequired,
    yField: propTypes.string.isRequired,
    area: propTypes.shape({
        style: propTypes.shape({
            fillOpacity: propTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
    scale: propTypes.shape({
        x: propTypes.shape({
            padding: propTypes.number.isRequired,
            align: propTypes.number.isRequired,
        }).isRequired,
        y: propTypes.shape({
            nice: propTypes.bool.isRequired,
            tickCount: propTypes.number,
            domainMax: propTypes.number,
        }).isRequired,
    }).isRequired,
    axis: propTypes.shape({
        x: propTypes.shape({
            title: propTypes.bool.isRequired,
            grid: propTypes.bool.isRequired,
        }).isRequired,
        y: propTypes.shape({
            gridAreaFill: propTypes.string.isRequired,
            label: propTypes.bool.isRequired,
            title: propTypes.bool.isRequired,
            zIndex: propTypes.number,
        }).isRequired,
    }),

    style: propTypes.shape({
        lineWidth: propTypes.number,
    }),
    colorField: propTypes.string,
    shapeField: propTypes.string,
}

export const RadarBasicDefaultProps = {}

export type RadarBasicProps = propTypes.InferProps<typeof RadarBasicPropTypes>
