import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className='ser-container' id='services'>
      <div className='ser-cont'>
        <div className='ser-text'>
          <p style={{color:'rgba(52,152,219,1)'}} className="center-text">WHAT YOU GET FROM US</p>
          <p className="center-text text2">Our Services</p>
          <p>
            We use <span style={{color:"rgb(52,152,219) "}}>High-Quality</span> paints, automated baking oven, car waxing/buffing to ensure high quality of service and a glossy finish is delivered to our prestigious clients.
          </p>
        </div>
        <div className="services-div">
          <div className='serv'>
            <img src="Pictures/ria9.jpg" alt='oven'/>
          </div>
          <div className='serv'>
            <img src="Pictures/sik.jpg" alt='buffing'/>
          </div>
          <div className='serv'>
            <img src="Pictures/ria27.jpeg" alt='buffing'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
