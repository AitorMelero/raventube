import { Outlet } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage'

interface Props {
  isError?: boolean
}

export const PageLayout: React.FC<Props> = ({ isError = false }) => {
  return <div className="page-layout">{isError ? <ErrorPage /> : <Outlet />}</div>
}
