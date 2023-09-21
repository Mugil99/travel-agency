import React from 'react'
import './Review.css';
import { FaPhoneVolume } from 'react-icons/fa6';
import ReviewCard from './ReviewCard/ReviewCard';
function Review() {
  return (
    <div className='review'>
        <div className='review-left'>
            <h1>We Provide Top Destinations Expecially<br/> For You Book Now and Enjoy!</h1>
            <div className='about-contact'>
                <div className='abt-contact-left' style={{color:"white"}}><FaPhoneVolume/></div>
                <div className='abt-contact-right abt-left-p2'>
                    <p className='abt-left-p2' style={{color:"white"}}>For Information</p>
                    <h2 style={{color:"white"}}>855 333 4444</h2>
                </div>
            </div>
        </div>
        <div className='review-right'>
            <div className='review-right-content'>
                <p style={{color:"#2095ae"}}>TESTIMONIALS</p>
                <h1 style={{color:"#0f2454", borderBottom:"1px solid #f4f5f8",paddingBottom:"10px"}}>TRAVELERS REVIEWS</h1>
            </div>
            <ReviewCard/>
        </div>
    </div>
  )
}

export default Review