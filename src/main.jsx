import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import LoginPage from './page/login.jsx'
import UserPage from './page/user.jsx'
import RegisterPage from './page/register.jsx'
import ProductPage from './page/product.jsx'
import ToDoApp from './components/todo/ToDoApp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ToDoApp />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'user',
        element: <UserPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)