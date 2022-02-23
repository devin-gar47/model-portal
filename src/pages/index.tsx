import type { NextPage } from 'next'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import App from '../components/App'

const Home: NextPage<{}, {}> = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Home
