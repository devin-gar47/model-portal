import React from 'react'
import type { NextPage } from 'next'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import SignUp from '../components/page-entry/SignUp'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const SignUpPage: NextPage<{}, {}> = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <SignUp />
            </QueryClientProvider>
        </Provider>
    )
}

export default SignUpPage
