import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import BlurText from '../Animation/BlurText';
import gsap from 'gsap';

const Home = () => {

  const ref = useRef()

  useEffect(() => {
    gsap.from(ref.current , {
      opacity:0,
      translateY:-1000,

    }),
    gsap.to(ref.current , {
      opacity:1,
      translateY:0,
      duration:1,
      transitionDuration:0.7,
    })
   

    
  }, [])
  

  const slides = [
    {
      id: 1,
      image: 'https://cdn.shopify.com/s/files/1/0276/8666/6376/files/Bridal_Bangle_Stack_2048x2048.jpg',
    },
    {
      id: 2,
      image: 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/877/592/new_medium/NTW-316.jpg?1558588199',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThw2tVdkG0XHITmgXxYzD0xdv-RUGRh-0_nsLh_BJQE9mSLTtLtrENHhwL7naRbUNsL0E&usqp=CAU',
    },
    {
      id: 4,
      image: 'https://cdn0.weddingwire.in/article/9416/3_2/1280/jpg/6149-marriage-bangles-dotdusk-lead.webp',
    },
    {
      id: 5,
      image: 'https://cdn.shopify.com/s/files/1/0276/8666/6376/files/Bridal_Bangle_Stack_3_2048x2048.jpg',
    },
    {
      id: 6,
      image: 'https://wp.missmalini.com/wp-content/uploads/2018/03/Bridal-Bangles.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div ref={ref} className="container my-[60px]   relative w-screen mt-2 max-w-3xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              className="w-full h-[70vh] object-cover rounded-lg"
              src={slide.image}
              alt={`Slide ${slide.id}`}
            />
            <div  className="absolute inset-0 flex items-center justify-center">
              <h2  id='text'>
                <BlurText
                
                text='RUBINA BANGLES SHOPE'
                delay={150}
                 animateBy="words"
                 direction="top"
                 className='text-5xl mx-2 font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded'
                />
                
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
