import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../assets/CardData.js';
import BlurText from '../Animation/BlurText.jsx';

gsap.registerPlugin(ScrollTrigger);


const Card = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            
          },
        }
      );
    });
  }, []);

  return (
    <div id='Card' className="bg-zinc-900/30 mx-auto px-4 py-8">
      <h2 className="">
        <BlurText
        text='Our Bangles Collection'
        delay={150}
            animateBy="words"
            direction="top"
        className='text-4xl capitalize font-bold text-center mb-6'
        /> </h2>
      <h1 className="text-4xl font-bold text-gray-900/80">Daily Use Purpose</h1>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        slidesPerView={1.09}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}
          className='hover:scale-[0.8] transition duration-500'>
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="border-[2px] bg-white border-black shadow-xl shadow-black rounded-xl  w-full p-3 my-3  ease-out overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.description}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                    idx < product.rating ? (
                      <FaStar key={idx} className="text-yellow-500 mr-1" />
                    ) : (
                      <FaRegStar key={idx} className="text-gray-400 mr-1" />
                    )
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-800">₹{product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
