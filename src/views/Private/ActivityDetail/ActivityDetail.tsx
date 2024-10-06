import { Link, useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import CustomCard from '../../../components/Cards/CustomCard'

import { reduceString } from '../../../utils/types/string.util'
import { ACTIVITIES } from '../../../utils/mocks/mockActivities'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './ActivityDetail.scss'

export const ActivityDetail = () => {
    const params = useParams()
    const {
        APD: { etapa },
    } = ACTIVITIES

    return (
        <div className='activity-detail'>
            <div className='activity-detail__header'>
                <Link
                    children={<ArrowLeftOutlined />}
                    className='activity-detail__link'
                    to={RP.statistics}
                />
                <h3 style={{ margin: 'auto ' }}>Actividades</h3>
            </div>
            <div className='activity-detail__container'>
                {etapa.map(res =>
                    res.name === params.id ? (
                        <CustomCard
                            key={res.key}
                            image={res.img}
                            title={`${params.id}`}
                            description={res.description}
                            reducerString={() =>
                                reduceString({
                                    value: res.description,
                                    maxLength: 400,
                                    ellipsis: true,
                                })
                            }
                            className='activity-detail__stage'
                        />
                    ) : null
                )}
                <div className='activity-detail__activities'>
                    {etapa.map(act =>
                        act.name === params.id
                            ? act.activities.map(res => {
                                  return (
                                      <CustomCard
                                          key={res.key}
                                          image={res.img}
                                          title={res.name}
                                          description={res.description}
                                          reducerString={() =>
                                              reduceString({
                                                  value: res.description,
                                                  maxLength: 40,
                                                  ellipsis: true,
                                              })
                                          }
                                          className='activity-detail__card-activity'
                                      />
                                  )
                              })
                            : null
                    )}
                </div>
            </div>
        </div>
    )
}

export default ActivityDetail
