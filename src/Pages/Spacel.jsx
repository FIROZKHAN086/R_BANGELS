import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import { products } from '../assets/CardData';

const Spacel = () => {
  // const products = [
  //   {
  //     id: 1,
  //     image: 'https://example.com/wedding-bangle.jpg',
  //     description: 'Wedding Bangle',
  //     rating: 5,
  //     price: '₹500',
  //   },
  //   {
  //     id: 2,
  //     image: 'https://example.com/diwali-bangle.jpg',
  //     description: 'Traditional Bangle',
  //     rating: 4,
  //     price: '₹300',
  //   },
  //   {
  //     id: 3,
  //     image: 'https://example.com/holi-bangle.jpg',
  //     description: 'Bangle',
  //     rating: 5,
  //     price: '₹350',
  //   },
  //   {
  //     id: 4,
  //     image: 'https://example.com/raksha-bandhan-bangle.jpg',
  //     description: 'Bandhan Bangle',
  //     rating: 4,
  //     price: '₹400',
  //   },
  //   // Add more products as needed
  // ];

  return (
    <div id="Card" className="bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-white mb-8 font-sans">Wedding Specials</h1>
      <Swiper
      modules={[ Navigation]}
        spaceBetween={20}
        slidesPerView={1.09}
        navigation
        loop
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
        className="flex items-center justify-center"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="w-64">
            <div className="group relative bg-white border-2 border-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img
                src={product.image}
                alt={product.description}
                className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.description}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                    idx < product.rating ? (
                      <FaStar key={idx} className="text-yellow-500 mr-1" />
                    ) : (
                      <FaRegStar key={idx} className="text-gray-400 mr-1" />
                    )
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                    Add to Cart
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

export default Spacel;
