import { Link, useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

import CustomCard from '../../../components/Cards/CustomCard'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useQuery } from '../../../hooks/api'
import { useVisible } from '../../../hooks/useVisible'
import { DataType } from '../Statistics/statistic.type'
import { Status } from '../../../utils/constants/status.enum'
import { ACTIVITIES } from '../../../utils/mocks/mockActivities'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './ActivitiesList.scss'
export const ActivitiesList = () => {
    const params = useParams()

    const { closeDialog, openDialog, visible } = useVisible()
    const { formatMessage } = useIntl()
    const {
        APD: { etapa },
    } = ACTIVITIES

    const { data, loading } = useQuery({
        functionFetch: api.categories.allCategories,
    })

    const payload: any =
        data.status === Status.success ? data.payload : ([] as DataType[])

    return (
        <div className='activity-detail'>
            <div className='activity-detail__header'>
                <Link
                    children={<ArrowLeftOutlined />}
                    className='activity-detail__link'
                    to={RP.statistics}
                />
                <h3 style={{ margin: 'auto ' }}>
                    {formatMessage({ id: `text.activities` })}
                </h3>
            </div>
            <div className='activity-detail__container'>
                {payload.map((res: any) => {
                    return formatMessage({ id: `text.${res.nameCategory}` }) ===
                        params.id ? (
                        <CustomCard
                            key={res.key}
                            image={res.icon}
                            loading={loading}
                            description={res.description}
                            className='activity-detail__stage'
                            title={`${params.id?.toLocaleUpperCase()}`}
                        />
                    ) : null
                })}
                <div className='activity-detail__activities'>
                    {etapa.map(act => {
                        return act.name === params.id
                            ? act.activities.map(res => (
                                  <CustomCard
                                      ellipsis
                                      key={res.key}
                                      image={res.img}
                                      title={res.name}
                                      loading={loading}
                                      visible={visible}
                                      openDialog={openDialog}
                                      description={res.description}
                                      className='activity-detail__card-activity'
                                  />
                              ))
                            : null
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActivitiesList
