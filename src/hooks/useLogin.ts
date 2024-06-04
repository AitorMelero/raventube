import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/services/login'
import { useToken } from './useToken'

interface LoginHook {
  isLoading: boolean
  isError: boolean
  username: string
  password: string
  changeUsername: (event: React.FormEvent<HTMLInputElement>) => void
  changePassword: (event: React.FormEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const useLogin = (): LoginHook => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const { addToken } = useToken()
  const navigate = useNavigate()

  const changeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const changePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsError(false)

    if (username === '' || password === '') {
      setIsError(true)
      return
    }

    try {
      setIsLoading(true)
      await login({ username, password })
      addToken(password)
      navigate('/')
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    isError,
    username,
    password,
    changeUsername,
    changePassword,
    handleSubmit,
  }
}
