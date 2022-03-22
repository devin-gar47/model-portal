import React from 'react'
import type { NextPage } from 'next'
import { store, persistor } from '../redux/store'
import { Provider, useSelector } from 'react-redux'
import App from '../components/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient()

const Home: NextPage<{}, {}> = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </QueryClientProvider>
        </Provider>
    )
}

export default Home
