import React from 'react'
import './Blog.css';
import b1 from '../../assets/blog-img-1.jpg';
import b2 from '../../assets/blog-img-2.jpg';
import b3 from '../../assets/blog-img-3.jpg';
import BlogImg from './BlogImg/BlogImg';

function Blog() {
    console.log(b1);
  return (
    <div className='blog' id="Blog">
        <div className='blog-title'>
            <p style={{color:"#2095ae"}}>TRAVEL BLOG</p>
            <h1 style={{color:"#2095ae"}}>TRAVEL <span style={{color:"white"}}>EXPERIENCE</span></h1>
        </div>
        <div className='blog-container'>
            <BlogImg img={b1} p={"TRAVEL"} h2={"Information for Travelling to Egypt"} />
            <BlogImg img={b2} p={"TOURS"} h2={"Most Popular Yarch Charter Routes"}/>
            <BlogImg img={b3} p={"DESTINATIONS"} h2={"Tips Towards a Flawless Honeymoon"}/>
        </div>
    </div>
  )
}

export default Blog;