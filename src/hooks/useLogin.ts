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
    setIsLoading(true)

    if (username === '' || password === '') {
      setIsError(true)
      setIsLoading(false)
      return
    }

    // Simulamos una espera de 2 segundos para que parezca mas real la busqueda
    setTimeout(async () => {
      try {
        const loginCorrect = await login({ username, password })

        if (loginCorrect) {
          addToken(password)
          navigate('/')
        } else {
          setIsError(true)
        }
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }, 2000)
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
