import React from 'react'
import { FaInstagram, FaMapLocationDot, FaPhone, FaPhoneVolume, FaPinterestP, FaXTwitter } from 'react-icons/fa6';
import { BiLogoGmail, } from "react-icons/bi";
import { GrMapLocation,} from "react-icons/gr";
import './ContactBody.css';
import logo from '../../../assets/logo-light.png'
import { FaFacebookF } from 'react-icons/fa';
function ContactBody() {
  return (
    <div className='contact-body' id="Contact">
        <div className='contact-body-sec1'>
            <div className='contact-body-sec1-div'>
                <div className='contact-icon-sec1'>
                    <FaPhoneVolume/>
                </div>
                <div className='contact-content-sec1'>
                    <h3>Call us</h3>
                    <p>+1 123-456-0606</p>
                </div>
            </div>
            <div className='contact-body-sec1-div'>
                <div className='contact-icon-sec1'>
                    <BiLogoGmail/>
                </div>
                <div className='contact-content-sec1'>
                    <h3>Write to us</h3>
                    <p>info@travolagency.com</p>
                </div>
            </div>
            <div className='contact-body-sec1-div'>
                <div className='contact-icon-sec1'>
                    <FaMapLocationDot/>
                </div>
                <div className='contact-content-sec1'>
                    <h3>Address</h3>
                    <p>24 King St, SC 29401 USA</p>
                </div>
            </div>
        </div>
        <div className='contact-body-sec2'>
            <div className='contact-body-sec2-div1'>
                <div className='logo'><img src={logo}></img></div>
                <p>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
                <div className='contact-icon-sec2'>
                    <div><FaFacebookF/></div>
                    <div><FaXTwitter/></div>
                    <div><FaPinterestP/></div>
                    <div><FaInstagram/></div>
                </div>
            </div>
            <div className='contact-body-sec2-div2'>
                <h2>Quick Links</h2>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Tours</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div className='contact-body-sec2-div3'>
            <h2>Subscribe</h2>
            <p>Sign up for our monthly blogletter to stay informed about travel and tours</p>
            <div className='contact-input-sec2'>
                <input type="email" className='input'></input>
                <button className='button'>Send</button>
            </div>
            </div>
        </div>
        <div className='contact-body-sec3'>
            <p>©2023 <span style={{color:"#2095AE"}}>webRedox</span>. All rights reserved</p>
        </div>
    </div>
  )
}

export default ContactBody;