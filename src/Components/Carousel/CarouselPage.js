import React from 'react';
import './CarouselPage.css';
import Carousel from './Carousel';
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
function CarouselPage() {
  return (
    <Carousel>
      <div className='c-img'>
        <img 
          src={c1}
          alt="img1"
        />
        <div className='title'>
            <p>LETS TRAVEL THE WORLD WITH US</p>
            <h1>EXPLORE THE WORLD WITH</h1>
            <h1 className='stroke'>TRAVOL</h1>
        </div>
      </div>
      <div className='c-img'>
        <img 
          src={c2}
          alt="img2"
        />
         <div className='title'>
            <p>LETS TRAVEL THE WORLD WITH US</p>
            <h1>EXPLORE THE WORLD WITH</h1>
            <h1 className='stroke'>TRAVOL</h1>
        </div>
      </div>
      <div className='c-img'>
        <img 
          src={c3}
          alt="img3"
        />
        <div className='title'>
            <p>LETS TRAVEL THE WORLD WITH US</p>
            <h1>EXPLORE THE WORLD WITH</h1>
            <h1 className='stroke'>TRAVOL</h1>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselPage;