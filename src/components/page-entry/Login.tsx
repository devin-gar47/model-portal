import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { storeToken } from '../../redux/reducers/user/user-information'
import Link from 'next/link'

const Login: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        const { value } = e.target
        switch (e.target.id) {
            case 'username':
                setUsername(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                return
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setIsError('')
        try {
            const data = await axios.post('http://localhost:3030/user/login', { username, password })
            const token = data.data.accessToken
            dispatch(storeToken(token))
            window.location.assign('/')
            setIsLoading(false)
        } catch (e: any) {
            console.log(e.response)
            switch (e.response.status) {
                case 400:
                    setIsError('Invalid username or password.')
                    break
                case 500:
                    setIsError('Server error. Please try again!')
                    break
                default:
                    setIsError('Something went wrong. Please try again later')
            }
            setIsLoading(false)
        }
    }

    return (
        <>
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                    background: rgb(2, 0, 36);
                    background: linear-gradient(
                        90deg,
                        rgba(2, 0, 36, 1) 0%,
                        rgba(9, 9, 121, 1) 39%,
                        rgba(0, 212, 255, 1) 100%
                    );
                }
            `}</style>

            <div className="flex flex-col justify-center items-center h-100">
                <h2 className="mb-4 text-2xl text-gray-300">Welcome to Model Project!</h2>
                {!isLoading ? (
                    <>
                        <form
                            className="flex flex-col items-center p-8 shadow-xl rounded-md bg-slate-50"
                            onSubmit={handleSubmit}
                        >
                            <p hidden={!isError} className="text-red-600 mb-3">
                                {isError}
                            </p>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={handleChange}
                                className="block p-4 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-400"
                            />
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                                className="block p-4 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-400"
                            />
                            <button className="mt-3 py-2 px-4 bg-blue-500 shadow-sm rounded-md hover:bg-emerald-500">
                                Login
                            </button>
                        </form>
                        <Link href="/signup">Need an account?</Link>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default Login
