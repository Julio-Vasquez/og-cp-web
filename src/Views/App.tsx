import { Error404 } from '../components/Error/Error404'
import { loginService } from '../services/Auth/auth.service'

const App = () => {
    const onCompleted = ({ data }: { data: string }) => {}
    const { execFunction: loginFetch } = loginService({ onCompleted })

    return (
        <>
            <Error404 title='el perez' redirect='home' />
        </>
    )
}

export default App
