import React from 'react'
import './Destination.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Card from '../Card/Card';
import img1 from '../../assets/canada1-1.jpg';
import img2 from '../../assets/owl2.jpg';
import img3 from '../../assets/owl3.jpg';
import img4 from '../../assets/owl4.jpg';
import img5 from '../../assets/owl5.jpg';
import img6 from '../../assets/owl6.jpg';
function Destination() {
  return (
    <>
    <div className='CardiB'>
        <p>TOP DESTINATION</p>
        <h1>POPULAR  <span style={{color:"#2095AE "}}>DESTINATION</span></h1>
    </div>
   <OwlCarousel
    className='owl-theme'
    items="4"
    autoplay
    dots
    loop
   >
            <Card img={img1}/>
            <Card img={img2}/>
            <Card img={img3}/>
            <Card img={img4}/>
            <Card img={img5}/>
            <Card img={img6}/>
        
   </OwlCarousel>
   </>
  )
}

export default Destination