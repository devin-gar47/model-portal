import axios from 'axios'
import React, { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import Link from 'next/link'

interface PayloadData {
    username: string
    password: string
    role: string
}

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setPasswordsMatch(true)
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

    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault()
        setSuccess(false)
        setError('')

        if (password !== confirmPassword) {
            setPasswordsMatch(false)
            return
        }

        setIsLoading(true)
        const userInfo: PayloadData = {
            username,
            password,
            role: 'ADMIN',
        }

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, userInfo)
            setSuccess(true)
        } catch (e: any) {
            const statusCode = e?.response?.status
            switch (statusCode) {
                case 400:
                    setError('Invalid username or password.')
                    break
                case 500:
                    setError('Server error. Please try again!')
                    break
                default:
                    setError('Something went wrong. Please try again later')
            }
        }
        setIsLoading(false)
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

            <div className="flex flex-col justify-center items-center h-100">
                {!isLoading ? (
                    <>
                        <form className="flex flex-col items-center p-8 shadow-xl rounded-md" onSubmit={handleSubmit}>
                            <p hidden={!success} className="text-green-600 mb-3">
                                User added successfully!
                            </p>
                            <p hidden={!error} className="text-red-600 mb-3">
                                {error}
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
                            <small hidden={passwordsMatch} className="text-red-600">
                                Passwords must match.
                            </small>
                            <button className="mt-3 py-2 px-4 bg-emerald-400 shadow-sm rounded-md hover:bg-emerald-500">
                                Sign up
                            </button>
                        </form>
                        <div className="mt-3">
                            <Link href="/login">Have an account?</Link>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default SignUp
