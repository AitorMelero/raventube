import { useLogin } from '@/hooks/useLogin'
import { Spinner } from '@/components/Spinner'

export const LoginPage = () => {
  const { username, password, isLoading, changeUsername, changePassword, handleSubmit } = useLogin()

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
            onChange={changeUsername}
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
            onChange={changePassword}
          />
          <label htmlFor="floatingPassword" className="login-page__label">
            Password
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`${isLoading ? 'login-page__button--loading' : 'login-page__button--base'}`}
      >
        {isLoading ? <Spinner /> : 'Submit'}
      </button>
    </form>
  )
}
