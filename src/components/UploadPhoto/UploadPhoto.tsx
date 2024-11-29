import { Upload } from 'antd'
import { FC, useState } from 'react'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

import { UploadButton } from './components'

import { getBase64, beforeUpload } from '../../utils/upload/upload'

export const UploadPhoto: FC<UploadProps> = () => {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState<string>()

    const handleChange: UploadProps['onChange'] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as RcFile, url => {
                setLoading(false)
                setImageUrl(url)
            })
        }
    }

    return (
        <Upload
            name='avatar'
            listType='picture-circle'
            showUploadList={false}
            action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img src={imageUrl} alt='avatar' className='avatar' />
            ) : (
                <UploadButton loading={loading} />
            )}
        </Upload>
    )
}

export default UploadPhoto
