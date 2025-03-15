import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import VerifyOtpPage from './views/verifyotp-page.jsx'
import { Outlet } from 'react-router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Outlet/>
    </>
  )
}

export default App
