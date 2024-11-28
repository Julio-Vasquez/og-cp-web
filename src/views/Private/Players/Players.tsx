import { useChildren } from '../../../hooks/useChildren'

export const Players = () => {
    const { values } = useChildren()
    return <div>{JSON.stringify(values)}</div>
}

export default Players
