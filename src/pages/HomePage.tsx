import { useToken } from '@/hooks/useToken'
import { Navigate } from 'react-router-dom'

export const HomePage = () => {
  const { token } = useToken()

  return (
    <>
      {token === null ? (
        <Navigate to={'/login'} />
      ) : (
        <>
          <h1>HomePage</h1>
          <button className="btn btn-primary">Primary button</button>
        </>
      )}
    </>
  )
}
