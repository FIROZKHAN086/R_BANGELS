import React, { useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa'; // Importing Font Awesome star icon
import { MdStar } from 'react-icons/md'; // Importing Material Design star icon
import BlurText from "../Animation/BlurText";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  const ref = useRef([])
  const imgref = useRef()

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
          
        },
      }
    );
    gsap.fromTo(
      imgref.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        transitionDuration:0.5,
        scrollTrigger: {
          trigger: imgref.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
          
        },
      }
    );
  }, [])
  

  return (
    <>
      {/* Hero */}
      <div  className="  max-w-[85rem] mx-auto my-[70px] px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid md:grid-cols-2  gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div >
            <div ref={ref} className='flex font-poppins  max-sm:bg-[#3cfccf] p-[3px] rounded-lg items-center justify-center flex-wrap'>
           <BlurText
           text='
              Start your Tradition with 
            '

            delay={150}
            animateBy="words"
            direction="top"
            className=' text-center text-wrap block text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight'
           /><BlurText
           text='RUBINA BANGELS'
           delay={100}
            animateBy="words"
            direction="left"
            className='block text-3xl font-bold text-[#616bf6] sm:text-3xl lg:text-5xl lg:leading-tight'
           /> 
            <p ref={ref} className="mt-3 text-lg text-gray-800">
              Hand-picked pros, crafted fine,
              Each piece shines, yours and mine.
              For dreamers bold, for ventures bright,
              Built with care, pure delight.
            </p>
            </div>

            {/* Buttons */}
            <div ref={ref} className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                href="#Card"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Get started
                <FaStar className="shrink-0 size-4" /> {/* Example icon */}
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Contact My Shope
              </a>
            </div>
            {/* End Buttons */}

            {/* Review */}
            <div ref={ref} className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
              {/* Review */}
              <div className="py-5">
                <div className="flex gap-x-1">
                  {/* Replacing SVG stars with React Icons */}
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                </div>

                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.6</span> /5 - from 12k reviews
                </p>

                <div className="mt-5">
                  {/* Example of using a Material Design star icon */}
                 <h1 className='text-xl font-sans font-semibold'>Google</h1>
                </div>
              </div>
              {/* End Review */}

              {/* Review */}
              <div ref={ref} className="py-5">
                <div className="flex gap-x-1">
                  {/* Replacing SVG stars with React Icons */}
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                  <FaStar className="size-4 text-gray-800" />
                </div>

                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.8</span> /5 - from 5k reviews
                </p>

                <div className="mt-5">
                  {/* Example of using a Material Design star icon */}
                  <h1 className='text-xl font-semibold font-'>Instagram</h1>
                </div>
              </div>
              {/* End Review */}
            </div>
            {/* End Review */}
          </div>
          {/* End Col */}

          <div className="relative  ms-4">
            <img
            ref={imgref}
              className="w-full  rounded-md"
              src="https://i.pinimg.com/736x/41/81/82/4181820c2b366836c105c210dc7b8cdd.jpg"
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>

            {/* SVG */}
            <div className="absolute bottom-0 start-0">
              {/* Example of using a React Icon as a background element */}
              <FaStar className="w-2/3 ms-auto h-auto text-white" />
            </div>
            {/* End SVG */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
