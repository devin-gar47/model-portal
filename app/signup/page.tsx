import React from 'react'
import type { NextPage } from 'next'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
// import SignUp from '../../components/page-entry/SignUp'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function SignUpPage() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <div>Sign up</div>
            </QueryClientProvider>
        </Provider>
    )
}

