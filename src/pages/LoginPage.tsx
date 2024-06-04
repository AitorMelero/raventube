import { Navigate } from 'react-router-dom'
import { useLogin } from '@/hooks/useLogin'
import { Spinner } from '@/components/Spinner'
import { useToken } from '@/hooks/useToken'

export const LoginPage = () => {
  const { username, password, isLoading, isError, changeUsername, changePassword, handleSubmit } =
    useLogin()
  const { token } = useToken()

  return (
    <>
      {token !== null ? (
        <Navigate to={'/'} />
      ) : (
        <section className="login-page">
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
              <div className="form-floating mb-3">
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
              {isError && <span className="login-page__error">Login with a correct user</span>}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${isLoading ? 'login-page__button--loading' : 'login-page__button--base'}`}
            >
              {isLoading ? <Spinner /> : 'Submit'}
            </button>
          </form>
        </section>
      )}
    </>
  )
}
