import React, { useState } from 'react';
import './Process.css';
import f1 from '../../assets/airplane.png';
import f2 from '../../assets/home.png';
import f3 from '../../assets/ship.png';
import f4 from '../../assets/pricing.png';
import arrow1 from '../../assets/arrow-right.png';
import arrow2 from '../../assets/arrow-right (1).png';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
function Process() {
    const[counterOn,setCounterOn]=useState(false);
  return (
    <div className='process'>
        <div className='process1'>
            <div className='flat-icon'>
                <div className='flat-icon-inner'>
                    <img src={f1}></img>
                </div>
            </div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <h2>
                  { counterOn &&
                   <CountUp 
                        start={0} 
                        end={600} 
                        duration={2} 
                        delay={0}
                    />
                  } +
                </h2>
            </ScrollTrigger>
            <h3>Flight Booking</h3>
        </div>
        <div className='process2'>
            <img src={arrow1}></img>
        </div>
        <div className='process1'>
            <div className='flat-icon'>
                <div className='flat-icon-inner'>
                    <img src={f2}></img>
                </div>
            </div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <h2>
                  { counterOn &&
                   <CountUp 
                        start={0} 
                        end={250} 
                        duration={2} 
                        delay={0}
                    />
                  } +
                </h2>
            </ScrollTrigger>
            <h3>Flight Booking</h3>
        </div>
        <div className='process2' style={{marginBottom:"70px"}}>
            <img src={arrow2}></img>
        </div>
        <div className='process1'>
            <div className='flat-icon'>
                <div className='flat-icon-inner'>
                    <img src={f3}></img>
                </div>
            </div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <h2>
                  { counterOn &&
                   <CountUp 
                        start={0} 
                        end={100} 
                        duration={2} 
                        delay={0}
                    />
                  } +
                </h2>
            </ScrollTrigger>
            <h3>Flight Booking</h3>
        </div>
        <div className='process2'>
            <img src={arrow1}></img>
        </div>
        <div className='process1'>
            <div className='flat-icon'>
                <div className='flat-icon-inner'>
                    <img src={f4}></img>
                </div>
            </div>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <h2>
                  { counterOn &&
                   <CountUp 
                        start={0} 
                        end={100} 
                        duration={2} 
                        delay={0}
                    />
                  } +
                </h2>
            </ScrollTrigger>
            <h3>Flight Booking</h3>
        </div>
    
    </div>
  )
}

export default Process