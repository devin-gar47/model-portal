import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { Provider } from 'react-redux'
import Login from '../components/page-entry/Login'
import { store } from '../redux/store'

const LoginPage: NextPage<{}, {}> = () => {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    )
}

export default LoginPage
