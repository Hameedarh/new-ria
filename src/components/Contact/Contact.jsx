import React from 'react'
import './Contact.css'
import {  WhatsappLogo } from 'phosphor-react'

function Contact() {
  return (
    <div className='cont-container' id='contact'>
        <div className='cont-cont'>
            <div className='cont-flex'>
                <div className='mid-name'>
                    <div className='con-name'>
                        <h3><span>RIA</span>&nbsp;Autorefurbish</h3>
                        <div>
                            <a href="https://wa.me/2348033041929" ><WhatsappLogo size={32} color='#2d2d2d'/></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='phead'>Quick Links</p>
                    <a href="#Home" ><p>Home</p></a>
                    <a href="#about" ><p>About Us</p></a>
                    <a href="#services"><p>Services</p></a>
                </div>
                <div className='con-icons'>
                    <div>
                        <p className='phead'>Location</p>
                        <p style={{color:"#2d2d2d"}}>Plot 1486, Cadastral Zone C12 Kabusa District, Abuja</p>
                    </div>
                    <div>
                        <p className='phead'>Phone Number</p>
                       <p  className='con-info'>08124132491</p>
                    </div>
                    <div>
                        <p className='phead'>Email</p>
                        <a href="mailto:rabiuishola@gmail.com"><p className='con-info info2'>rabiuishola@gmail.com</p></a>
                    </div>
                </div>
                <div className='map'>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe className="gmap_iframe" title='ria' src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ria autorefurbishing center&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                </iframe>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
