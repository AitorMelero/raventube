import { Form } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <Form className="login-page__form">
      <h1>RavenTube</h1>
      <div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control login-page__input"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput" className="login-page__label">
            Email address
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control login-page__input"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword" className="login-page__label">
            Password
          </label>
        </div>
      </div>
      <button className="login-page__button">Submit</button>
    </Form>
  )
}
