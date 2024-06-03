import { Outlet } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage'

interface Props {
  isError?: boolean
}

export const PageLayout: React.FC<Props> = ({ isError = false }) => {
  return <main className="container py-4 px-3 mx-auto">{isError ? <ErrorPage /> : <Outlet />}</main>
}
