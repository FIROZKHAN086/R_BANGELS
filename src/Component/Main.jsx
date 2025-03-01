import React from 'react'
import Slider from './Slider';
import Home from '../Pages/Home';
import Foter from './Foter';
import Hero from '../Pages/Hero';
import Display from './Display.jsx';
import Tasting from './Tasting.jsx';
const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Hero />
      <Tasting/>
      <Display />
      <Slider />
      
    </div>
  )
}

export default Main