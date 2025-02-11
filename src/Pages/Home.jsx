import React, { useState } from "react";
import '../App.css'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/000/877/592/new_medium/NTW-316.jpg?1558588199",
      
    },
    {
      id: 2,
      image: "https://wp.missmalini.com/wp-content/uploads/2018/03/Bridal-Bangles.jpg",
      
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThw2tVdkG0XHITmgXxYzD0xdv-RUGRh-0_nsLh_BJQE9mSLTtLtrENHhwL7naRbUNsL0E&usqp=CAU",
      
    },
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div  className=" container relative w-screen mt-2 max-w-3xl mx-auto">
      <div className=" relative overflow-hidden rounded-lg shadow-lg flex  justify-center">
        <h2 id="Home" className=" font-Poppins py-12 text-[#000000]  mx-4 absolute text-4xl font-light ">Wellcome To <span className="text-5xl text-[#ffffff]  underline font-semibold ">Rubina Bangels</span> Shope</h2>
        <img
          className=" container h-[70vh]"
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <button onClick={goToPrevSlide} className="bg-black bg-opacity-50 p-2 rounded-full">
            &#10094;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <button onClick={goToNextSlide} className="bg-black bg-opacity-50 p-2 rounded-full">
            &#10095;
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
