import React from 'react'
import './About.css'
import { Medal, ThumbsUp, Smiley} from 'phosphor-react'

function About() {
  return (
    <div className='about-container' id='about'>
      <div className='about-cont'>
        <div className='about-flex'>
          <div className='div-box'>

          </div>
          <div className="text-box">
            <div>
              <h4 style={{color:'rgba(52,152,219,1)'}}>RIA AUTOREFURBISHING CENTER</h4>
              <h2>About Us</h2>
              <p>RIA Auto Refurbishing Centre is the leading destination for vehicle refurbishment in Abuja.</p>
              <p>We use high quality sikkens products: a highly durable, high build, solvent-borne opaque that provides a satin paint-like finish on exterior surfaces.</p>
            </div>
          </div>
        </div>
        <div className='top-div'>
          <div className='top-box box1'>
            <Smiley size={32} />
            <h5>Great Customer Satisfaction</h5>
          </div>
          <div className='top-box box2'>
            <ThumbsUp size={32} />
            <h5>High Quality Paints</h5>
            <h5> effective job done</h5>
          </div>
          <div className='top-box box1'>
            <Medal size={32} />
            <h5>5 years Guarantee</h5>
          </div>
        </div>
        <img src='Pictures/ria5.jpg' width={300} height={270} alt="class" className='imgd'/>
      </div>
    </div>
  )
}

export default About
