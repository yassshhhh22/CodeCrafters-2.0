import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import App from './App.jsx'
import VerifyOtp from './views/verifyotp-page.jsx'
import Dashboard from './views/Dashboard.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children:[
      {
        element: <Login/>,
        path: "/signin"
      },
      {
        element: <Register/>,
        path: "/signup"
      },
      {
        element: <VerifyOtp/>,
        path: "/verify-email"
      },
      {
        element: <Dashboard/>,
        path: "/dashboard"
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
 
  </StrictMode>,
)
