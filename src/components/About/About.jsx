import React from 'react'
import './About.css'
import { Medal, ThumbsUp, Smiley} from 'phosphor-react'

function About() {
  return (
    <div className='about-container' id='about'>
      <div className='about-cont'>
        <div className='about-flex'>
          <div className='div-box'>
            <img src='Pictures/ria5.jpg' alt="class" className='imgd'/>
          </div>
          <div className="text-box">
            <div>
              <div className="about-hr">
                <p className='about-flexhead' style={{color:'rgba(52,152,219,1)'}}>About Us</p>
                <hr/>
              </div>
              <p className='about-flexp'>RIA Auto Refurbishing Centre is the leading destination for vehicle refurbishment in Abuja.
              We use high quality sikkens products: a highly durable, high build, solvent-borne opaque that provides a satin paint-like finish on exterior surfaces.</p>
            </div>
          </div>
        </div>
        <div className='top-div'>
          <div className='top-box box1'>
            <Smiley size={45} />
            <h5>Great Customer Satisfaction</h5>
          </div>
          <div className='top-box box1'>
            <ThumbsUp size={45} />
            <h5>High Quality Paints</h5>
            <h5> effective job done</h5>
          </div>
          <div className='top-box box1'>
            <Medal size={45} />
            <h5>5 years Guarantee</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
