import React from 'react'

import Slider from './Slider';
import Card from './Card';
import Home from '../Pages/Home';
import Foter from './Foter';
import Hero from '../Pages/Hero';
const Main = () => {
  return (
    <div>
     <Home/>
     <Hero/>
      <Card/>
      <Slider/>
    <Foter/>
    </div>
  )
}

export default Main