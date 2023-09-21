import React from 'react'
import './ContactHeader.css'
import ct1 from '../../../assets/ct-img1.png';
import ct2 from '../../../assets/ct-img2.png';
import ct3 from '../../../assets/ct-img3.png';
import ct4 from '../../../assets/ct-img4.png';
function ContactHeader() {
  return (
    <div className='contact-header'>
        <img src={ct1}></img>
        <img src={ct2}></img>
        <img src={ct3}></img>
        <img src={ct4}></img>
    </div>
  )
}

export default ContactHeader;