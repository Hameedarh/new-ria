import React from 'react'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Services.css'
function Services() {
  return (
    <div className='ser-container' id='services'>
      <div className='ser-cont'>
        <div className='ser-text'>
          <div className='hr-center'>
            <p className="center-text text2" style={{color:'rgba(52,152,219,1)'}}>Our Services</p>
            <hr/>
          </div>
          
          <p className='ser-jus'>
            We use <span style={{color:"rgb(52,152,219) "}}>High-Quality</span> paints, automated baking oven, car waxing/buffing to ensure high quality of service and a glossy finish is delivered to our prestigious clients.
          </p>
        </div>
        <Fade>
          <div className="each-fade">
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
          <div className="each-fade">
            <div className="services-div">
                <div className='serv'>
                  <img src="Pictures/ria13.jpg" alt='oven'/>
                </div>
                <div className='serv'>
                  <img src="Pictures/ria22.jpeg" alt='buffing'/>
                </div>
                <div className='serv'>
                  <img src="Pictures/ria24.jpeg" alt='buffing'/>
                </div>
              </div>                  
          </div>
          <div className="each-fade">
            <div className="services-div">
              <div className='serv'>
                <img src="Pictures/ria12.jpg" alt='oven'/>
              </div>
              <div className='serv'>
                <img src="Pictures/ria23.jpeg" alt='buffing'/>
              </div>
              <div className='serv'>
                <img src="Pictures/ria27.jpeg" alt='buffing'/>
              </div>
            </div>
          </div>
        </Fade>
        {/* <div className="services-div">
          <div className='serv'>
            <img src="Pictures/ria9.jpg" alt='oven'/>
          </div>
          <div className='serv'>
            <img src="Pictures/sik.jpg" alt='buffing'/>
          </div>
          <div className='serv'>
            <img src="Pictures/ria27.jpeg" alt='buffing'/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Services
