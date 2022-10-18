import React from 'react'
import './Contact.css'
import {  WhatsappLogo, FacebookLogo } from 'phosphor-react'

function Contact() {
  return (
    <div className='cont-container' id='contact'>
        <div className='cont-cont'>
            <div className='cont-flex'>
                <div className='mid-name'>
                    <div className='con-name'>
                        <h3><span>RIA</span>&nbsp;Autorefurbish</h3>
                        <div>
                            <FacebookLogo size={32} color='#2d2d2d'/>
                            <WhatsappLogo size={32} color='#2d2d2d'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="#Home" ><p>Home</p></a>
                    <a href="#about" ><p>About Us</p></a>
                    <a href="#services"><p>Services</p></a>
                </div>
                <div className='con-icons'>
                    <div>
                        <h4>Location</h4>
                        <p style={{color:"#2d2d2d"}}>Plot 1486, Cadastral Zone C12 Kabusa District, Abuja</p>
                    </div>
                    <div>
                        <h4>Phone Number</h4>
                        <a href="https://wa.me/08033041929" ><p  className='con-info'>08033041929</p></a>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <a href="mailto:abisolahamidat@gmail.com"><p className='con-info info2'>abisolahamidat@gmail.com</p></a>
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
