import { InputProps, Tag } from 'antd'

type Rol = 'Administrador' | 'Terapeuta' | 'Usuario'

const ROLES_COLOR: Record<Rol, string> = {
    Administrador: '#87d068',
    Terapeuta: '#f50',
    Usuario: '#2db7f5',
}

export const RolTag = ({ value, id }: InputProps) => (
    <Tag id={id} color={ROLES_COLOR[(value?.toString() as Rol) ?? 'Usuario']}>
        {value}
    </Tag>
)
