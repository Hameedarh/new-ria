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
                    <h2>What Clients say?</h2>
                    <div className='review'>
                        <h4>My car became new. As if it came out of the factory.</h4>
                            <h4>Akan Atia</h4>
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
