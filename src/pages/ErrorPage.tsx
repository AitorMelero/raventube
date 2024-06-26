import { useErrorPage } from '@/hooks/useErrorPage'

export const ErrorPage = () => {
  const { errorMessage } = useErrorPage()

  return (
    <main className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occured.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </main>
  )
}
