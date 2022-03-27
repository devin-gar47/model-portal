import axios from 'axios'
import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { useMutation } from 'react-query'
import Link from 'next/link'

interface PayloadData {
    username: string
    password: string
    role: string
}

const SignUp: React.FC = () => {
    const { isError, isSuccess, isLoading, error, mutate } = useMutation((userInfo: PayloadData) => {
        const headers = new Headers()
        headers.append('Origin', 'https://alex-model-project.herokuapp.com')
        return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, userInfo, {
            withCredentials: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
        })
    })

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

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
            case 'confirm_password':
                setConfirmPassword(value)
                break
            default:
                return
        }
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        const userInfo: PayloadData = {
            username,
            password,
            role: 'ADMIN',
        }
        mutate(userInfo)
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
                }
            `}</style>

            <div className="flex justify-center items-center h-100">
                {!isLoading ? (
                    <>
                        <form className="flex flex-col items-center p-8 shadow-xl rounded-md" onSubmit={handleSubmit}>
                            <p hidden={!isSuccess} className="text-green-600 mb-3">
                                User added successfully!
                            </p>
                            <p hidden={!isError} className="text-red-600 mb-3">
                                User already exists!
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
                            <input
                                type="password"
                                id="confirm_password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleChange}
                                className="block p-4 border-b-2 border-cyan-400 focus:outline-none focus:border-blue-400"
                            />
                            <button className="mt-3 py-2 px-4 bg-emerald-400 shadow-sm rounded-md hover:bg-emerald-500">
                                Sign up
                            </button>
                        </form>
                        <Link href="/login">Have an account?</Link>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default SignUp
