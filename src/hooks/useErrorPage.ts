import { useEffect, useState } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export const useErrorPage = () => {
  const error = useRouteError()
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      setErrorMessage(error.statusText)
    } else if (error instanceof Error) {
      setErrorMessage(error.message)
    } else if (typeof error === 'string') {
      setErrorMessage(error)
    } else {
      console.error(error)
      setErrorMessage('Unknown error')
    }
  }, [error])

  return {
    errorMessage,
  }
}
