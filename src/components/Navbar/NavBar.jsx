import React from 'react'
import './NavBar.css'
import Hamburger from '../Hamburger/Hamburger'
function NavBar() {
  return (
    <div className='nav-container'>
        <div className='nav-cont'>
            <div className='name-logo'>
                <img src='Pictures/train.png' alt='logo'/>
                <h3><span>RIA</span>&nbsp;Autorefurbish</h3>
            </div>
            <nav className='navbar'>
                <ul>
                    <a href='#Home'><li>Home</li></a>
                    <a href='#services'><li>Service</li></a>
                    <a href='#gallery'><li>Gallery</li></a>
                    <a href='#contact'><li>Contact</li></a>
                </ul>
            </nav>
            <div className='ham'>
                <Hamburger/>
            </div>
        </div>
    </div>
  )
}

export default NavBar
