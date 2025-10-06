import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'





const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default HomePage
