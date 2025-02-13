import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      image: 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/877/592/new_medium/NTW-316.jpg?1558588199',
    },
    {
      id: 2,
      image: 'https://wp.missmalini.com/wp-content/uploads/2018/03/Bridal-Bangles.jpg',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThw2tVdkG0XHITmgXxYzD0xdv-RUGRh-0_nsLh_BJQE9mSLTtLtrENHhwL7naRbUNsL0E&usqp=CAU',
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
    <div className="container relative w-screen mt-2 max-w-3xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              className="w-full h-[70vh] object-cover rounded-lg"
              src={slide.image}
              alt={`Slide ${slide.id}`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 id='text' className="text-5xl mx-2 font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                RUBINA BANGLES Shop
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
