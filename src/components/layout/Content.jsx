import React from 'react'
import Products from '../sections/Products'
import HeroSection from '../sections/HeroSection'
import AboutUs from '../sections/AboutUs'

const Content = () => {
  return (
    <div id='Content'>
        <HeroSection />
        <Products />
        <AboutUs />
    </div>
  )
}

export default Content