import React from 'react';
import ScrollVelocity from '../Animation/ScrollVelocity';


const Tasting = () => {

  const velocity = 100; 


  const customTexts = ['Come On This site And Enjoing It ', 'Cheked This And Give Gaune reviwe '];

  return (
    <div className='bg-rose-200 my-8 capitalize'>
      <ScrollVelocity
        texts={customTexts} 
        velocity={velocity} 
        className="custom-scroll-text lg:m-2 sm:flex gap-4 "
      />
    </div>
  );
};

export default Tasting;
