import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import LoginPage from './page/login.jsx'
import UserPage from './page/user.jsx'
import RegisterPage from './page/register.jsx'
import BookPage from './page/book.jsx'
import ToDoApp from './components/todo/ToDoApp.jsx'
import ErrorPage from './page/error.jsx'
import NotFoundPage from './page/not-found.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: 'book',
        element: <BookPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
