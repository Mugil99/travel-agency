import React from 'react'
import './ReviewCard.css'
import avatar1 from '../../../assets/avatar1.png'
import { FaStar } from 'react-icons/fa6';
function ReviewCard() {
  return (
    <div className='review-card'>
        <p className='review-card-p1'>Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours inilla neca ine the sene miss habitan.</p>
        <div className='review-card-bottom'>
          <div className='avatar'>
            <img src={avatar1}></img>
          </div>
          <div className='avatar-right'>
            <div className='star'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p>Nolan White</p>
            <p>Guest review</p>
          </div>
        </div>
    </div>
  )
}

export default ReviewCard;