import React from 'react'
import type { NextPage } from 'next'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import App from '../components/App'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Home: NextPage<{}, {}> = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Provider>
    )
}

export default Home
