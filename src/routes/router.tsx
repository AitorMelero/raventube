import { createBrowserRouter } from 'react-router-dom'
import { PageLayout } from '@/layouts/PageLayout'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'

export const routesConfig = [
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <PageLayout isError={true} />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]

export const router = createBrowserRouter(routesConfig)
