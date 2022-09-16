import React from 'react'
import Footer from '../components/Footer'
import About from '../components/landingpage/About'
import ContentBlock from '../components/landingpage/ContentBlock'
import Hero from '../components/landingpage/Hero'
import NewBlogs from '../components/landingpage/NewBlogs'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div>
     <Hero/>
    <About/>
     <NewBlogs/>
    </div>
  )
}

export default Home