import React from 'react'
import './Review.css'
function Review() {
  return (
    <div className='review-container'>
      <div className='review-cont'>
        <div className='rev-flex'>
            <div className='rev-img'>
                <img src='Pictures/rev.jpeg' alt='rev'/>
            </div>   
            <div className='rev-text'>
                <div>
                    <p className='rev-head'>What Clients say?</p>
                    <div className='review'>
                        <p>My car became new. As if it came out of the factory.</p>
                            <p>Akan Atia</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review
