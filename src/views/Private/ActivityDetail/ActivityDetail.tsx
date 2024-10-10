import { Link, useParams } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import CustomCard from '../../../components/Cards/CustomCard'

import { ACTIVITIES } from '../../../utils/mocks/mockActivities'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './ActivityDetail.scss'
import { Modal } from 'antd'
import { useVisible } from '../../../hooks/useVisible'

export const ActivityDetail = () => {
    const params = useParams()
    const { closeDialog, openDialog, visible } = useVisible()

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
                                          visible={visible}
                                          openDialog={openDialog}
                                          key={res.key}
                                          image={res.img}
                                          title={res.name}
                                          description={res.description}
                                          ellipsis
                                          className='activity-detail__card-activity'
                                      />
                                  )
                              })
                            : null
                    )}
                </div>
            </div>
            <Modal
                open={visible}
                onCancel={closeDialog}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
            >
                <h1>modal</h1>
            </Modal>
        </div>
    )
}

export default ActivityDetail
