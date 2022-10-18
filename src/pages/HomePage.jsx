import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import NavBar from '../components/Navbar/NavBar'
import Review from '../components/Review/Review'
import Services from '../components/Services/Services'
import './HomePage.css'

function HomePage() {
  return (
    <div className='home-page'>
        <NavBar/>
        <Home/>
        <About/>
        <Services/>
        <Review/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage
