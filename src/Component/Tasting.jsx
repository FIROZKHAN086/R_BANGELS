import React, { useEffect, useRef } from 'react';
import ScrollVelocity from '../Animation/ScrollVelocity';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Tasting = () => {
  gsap.registerPlugin(ScrollTrigger)

  const velocity = 100; 
  const ref = useRef()

  useEffect(() => {
   gsap.fromTo(ref.current , {
    opacity:0,
    scale:0,
   },{
    opacity:1,
    scale:1,
    duration:1,
    scrollTrigger: {
      trigger: ref.current,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse',
      
    },
   })
  }, [])
  


  const customTexts = ['Come On This site And Enjoing It ', 'Cheked This And Give Gaune reviwe '];

  return (
    <div ref={ref} className=' font-inter bg-gradient-to-t from-black/60 to-gray-950 text-white my-8 capitalize'>
      <ScrollVelocity
        texts={customTexts} 
        velocity={velocity} 
        className="custom-scroll-text lg:m-2 sm:flex gap-4 "
      />
    </div>
  );
};

export default Tasting;
