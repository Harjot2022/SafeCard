import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <main>
        {<Outlet/>}
      </main>
      <Footer/>
    </>
  )
}

export default App
