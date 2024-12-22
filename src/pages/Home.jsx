import React from 'react'
import HomeSlider from '../components/sliders'
import About from './About'
import Contact from './Contact'
import { GoogleMap } from '../components/googlemao/Google'

const Home = () => {
  return (
    <div>
    
      <HomeSlider/>
      <About/>
      <Contact/>
      <GoogleMap />
    </div>
  )
}

export default Home
