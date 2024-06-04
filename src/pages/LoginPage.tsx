import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@/components/Spinner'
import { login } from '@/services/login'
import { LoginType } from '@/types/types'

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsError(false)
    setIsLoading(true)
    const dataUser: LoginType = {
      username,
      password,
    }
    try {
      await login(dataUser)
      localStorage.setItem('raventube-token', password)
      navigate('/')
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form method="post" className="login-page__form" onSubmit={handleSubmit}>
      <h1>RavenTube</h1>
      <div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control login-page__input"
            id="floatingInput"
            placeholder="username"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <label htmlFor="floatingInput" className="login-page__label">
            Username
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control login-page__input"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <label htmlFor="floatingPassword" className="login-page__label">
            Password
          </label>
        </div>
      </div>
      <button type="submit" className="login-page__button">
        {isLoading ? <Spinner /> : 'Submit'}
      </button>
    </form>
  )
}
