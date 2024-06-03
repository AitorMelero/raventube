import { PageLayout } from '@/layouts/PageLayout'
import { HomePage } from '@/pages/HomePage'
import { LoginPage } from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router-dom'

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
