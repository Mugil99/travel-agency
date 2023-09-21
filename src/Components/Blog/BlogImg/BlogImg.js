import React from 'react'
import './BlogImg.css';
// import img from '../../../assets/blog-img-1.jpg'
function BlogImg({img,p,h2}) {
    
  return (
    <div className='blog-img'>
        <div className='blog-img-top'>
            <h4>AUG<br/>02</h4>
        </div>
        <div className='blog-img-img'>
           <img src={img}></img>
        </div>
        <div className='blog-img-bottom'>
            <p style={{color:"#2095ae",padding:"10px 0px"}}>{p}</p>
            <h2 style={{color:"#0f2454",marginTop:"0"}}>{h2}</h2>
        </div>
    </div>
  )
}

export default BlogImg