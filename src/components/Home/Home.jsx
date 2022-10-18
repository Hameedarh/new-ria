import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='Home-container' id='Home'>
        <img src='Pictures/ria6.jpg' alt='painting'/>
        <div className='text-div'>
            <h1>
                RIA AutoRefurbishing
            </h1>
            <h1> Centre</h1>
            <p>RIA Auto Refurbishing Centre is the leading destination for vehicle refurbishment in Abuja.</p> 
            <div className='top-but'>
                <button><a href="#services">Read More</a></button>
                <button><a href="#contact">Contact us</a></button>
            </div>
        </div>
    </div>
  )
}

export default Home
