import React from 'react'
import './Blog.css';
import BlogImg from './BlogImg/BlogImg';

function Blog() {
  return (
    <div className='blog'>
        <div className='blog-title'>
            <p style={{color:"#2095ae"}}>TRAVEL BLOG</p>
            <h1 style={{color:"#2095ae"}}>TRAVEL <span style={{color:"white"}}>EXPERIENCE</span></h1>
        </div>
        <div className='blog-container'>
            <BlogImg/>
            <BlogImg/>
            <BlogImg/>
        </div>
    </div>
  )
}

export default Blog;