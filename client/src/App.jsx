import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './views/login.jsx'
import Register from './views/register.jsx'
import VerifyOtpPage from './views/verifyotp-page.jsx'
import { Outlet } from 'react-router'
import Header from './Components/Common/Header.jsx'
import Footer from './Components/Common/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
