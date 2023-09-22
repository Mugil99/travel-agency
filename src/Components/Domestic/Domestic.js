import React from 'react';
import './Domestic.css';
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";

function Domestic() {
  return (
    <div className='domestic'>
        <div className='domestic-title'>
            <p className='abt-left-p1'>For Native Destination Exploration</p>
            <h1 className='abt-left-h1'>Domestic Tourism</h1>
        </div>
        <div className='domestic-img'>
            
            <img src={d3}></img>
            <img src={d2}></img>
            <img src={d1} className='abs'></img>
        </div>
    </div>
  )
}

export default Domestic