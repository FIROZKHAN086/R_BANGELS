import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../assets/CardData.js'


const Card = () => {



  return (
    <>
   
    <div id='Card' className=" bg-zinc-900/30   mx-auto px-4 py-8">
      <h2 className="text-4xl capitalize font-bold text-center mb-6">Our Bangles Collection</h2>
      <h1 class="text-4xl font-bold text-gray-900/80">Daily Use Purpose</h1>
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="  border-[2px] bg-white border-black shadow-xl shadow-black rounded-xl transition duration-500 w-full p-3 my-3 hover:scale-[0.8] ease-out    overflow-hidden">
              <img
                src={product.image}
                alt={product.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.description}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    index < product.rating ? (
                      <FaStar key={index} className="text-yellow-500 mr-1" />
                    ) : (
                      <FaRegStar key={index} className="text-gray-400 mr-1" />
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
        </>
  );
};

export default Card;
