import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; 

// 

const Slider = () => {
  return (
    <>
    
    <div className="max-w-screen-xl mx-auto my-8">
      {/* Carousel Title */}
      <h2 className="text-center text-2xl font-bold mb-4">Bridal Bangles Collection</h2>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={10} 
        slidesPerView={1} 
        
        breakpoints={{
          640: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 2, 
            
          },
          
        }}
        loop={true} // 
        autoplay={{ delay: 1 }} 
        pagination={{ clickable: true }} // ts
        
      >
        {/* Carousel Slides */}
        <SwiperSlide>
          <img
            src="https://www.shutterstock.com/image-photo/indian-bridal-showing-mehndi-design-600nw-2196884083.jpg"
            alt="Bangle 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i2.wp.com/wittyvows.com/wp-content/uploads/2019/09/Bangles-Cover.jpg?fit\u003d1200%2C630"
            alt="Bangle 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/db/a9/51/dba951833f149c26f706b554aee3e31f.jpg"
            alt="Bangle 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/578/835/new_medium/happy_frames.jpg?1540297190"
            alt="Bangle 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://sukritistore.com/cdn/shop/articles/28ecaf893616aa2af208ee7c0f3f6cbd.jpg?v=1613226626"
            alt="Bangle 5"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/db/a9/51/dba951833f149c26f706b554aee3e31f.jpg"
            alt="Bangle 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/578/835/new_medium/happy_frames.jpg?1540297190"
            alt="Bangle 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
    // Slider Compontant Was Don
  );
};

export default Slider;
