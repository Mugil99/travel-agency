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
  const options={
    items:1,
    loop:true,
    autoplay:true,
    nav:false,
    dot:true,
    responsive:{
      650:{
        items:3
      }
    }
  }
  return (
    <div className='destination' id="Destination">
    <div className='CardiB'>
        <p>TOP DESTINATION</p>
        <h1>POPULAR  <span style={{color:"white "}}>DESTINATION</span></h1>
    </div>
   <OwlCarousel
    className='owl-theme'
    {...options}
    
   >
            <Card img={img1} place={"CANADA"}/>
            <Card img={img2} place={"DUBAI"}/>
            <Card img={img3} place={"ITALY"}/>
            <Card img={img4} place={"PARIS"}/>
            <Card img={img5} place={"MALDIVES"}/>
            <Card img={img6} place={"GREECE"}/>
        
   </OwlCarousel>
   </div>
  )
}

export default Destination