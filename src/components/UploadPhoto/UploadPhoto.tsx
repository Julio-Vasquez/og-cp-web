import { Upload } from 'antd'
import { useState } from 'react'
import type { UploadChangeParam } from 'antd/es/upload'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

import { getBase64, beforeUpload } from '../../utils/upload/upload'

const UploadPhoto = () => {
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

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )
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
                uploadButton
            )}
        </Upload>
    )
}

export default UploadPhoto
