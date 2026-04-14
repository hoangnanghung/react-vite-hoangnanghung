import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './page/login.jsx'
import UserPage from './page/user.jsx'
import RegisterPage from './page/register.jsx'
import ProductPage from './page/product.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/product',
    element: <ProductPage />,
  },
])

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
