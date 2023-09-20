import React from 'react'
import './About.css';
import abt from '../../assets/about.jpeg';
import sqdots from '../../assets/sq-dots.jpg';
import { FaCheckCircle,  } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
function About() {
  return (
    <div className='about'>
       <div className='about-left'>
            <p className='abt-left-p1'>THE BEST TRAVEL AGENCY</p>
            <h1 className='abt-left-h1'>DISCOVER THE <span>WORLD</span> WITH OUR GUIDE</h1>
            <p className='abt-left-p2'>You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
            <p className='abt-left-p2'>Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
            <div className='tick-content'>
                <div className="tick-content-1">
                <div className='check'><FaCheckCircle/></div>
                    <p className='abt-left-p2'>20 Years of Experience</p>
                </div>
                <div className="tick-content-1">
                    <div className='check'><FaCheckCircle/></div>
                    <p className='abt-left-p2' >150+ Tour Destinations</p>
                </div>
            </div>
            <div className='about-contact'>
                <div className='abt-contact-left'><FaPhoneVolume/></div>
                <div className='abt-contact-right abt-left-p2'>
                    <p className='abt-left-p2'>For Information</p>
                    <h2>855 333 4444</h2>
                </div>
            </div>
       </div>
       <div className='about-right'>
            <div className='abt-img'>
                <img className="sq-dots" src={sqdots}></img>
                <img src={abt} className='girl'></img>
                <div className='abt-bg'></div>
            </div>
       </div>
    </div>
  )
}

export default About