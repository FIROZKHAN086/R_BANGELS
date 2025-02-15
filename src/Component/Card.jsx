import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSto } from '../Context/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Card = () => {
  const { addToCart } = useSto();

  const products = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/71cPQD00zmL._AC_UY300_.jpg',
      rating: 4,
      description: 'Elegant Gold-Plated Bangles',
      price: '250',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWGGyIm9CtI8A_lTyF6x9kh96Q9Lafyo2p0u9_nU8-VIDTIXWSXZ4DvkjsHN-g2Z4yUw&usqp=CAU',
      rating: 5,
      description: 'Traditional Kundan Bangles',
      price: '300',
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/71OYK4jGL1L._AC_UY300_.jpg',
      rating: 3,
      description: 'Simple Silver Bangles',
      price: '220',
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdRd0dwuSc5puUw3GOvohbP2lJC8A7mp1qw&s',
      rating: 4,
      description: 'Designer Pearl Bangles',
      price: '280',
    },
    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanNajY8738sw7NURepp3l60cCZfs8mve-wyWN1mjKuLr1IpNF_48oUgspsJvwsUdZEho&usqp=CAU',
      rating: 5,
      description: 'Antique Bridal Bangles',
      price: '320',
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxc2P5h9dfS07juMHlNKQv2Wj7bX7S0a_KlwsXnnwQsyt8b6cbO7dg9LXov2D5LRY2po&usqp=CAU',
      rating: 4,
      description: 'Colorful Glass Bangles Set',
      price: '270',
    },
    {
      id: 7,
      image: '',
      rating: 4,
      description: 'Elegant Gold-Plated Bangles',
      price: '250',
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWGGyIm9CtI8A_lTyF6x9kh96Q9Lafyo2p0u9_nU8-VIDTIXWSXZ4DvkjsHN-g2Z4yUw&usqp=CAU',
      rating: 5,
      description: 'Traditional Kundan Bangles',
      price: '300',
    },
    {
      id: 9,
      image: 'https://m.media-amazon.com/images/I/71OYK4jGL1L._AC_UY300_.jpg',
      rating: 3,
      description: 'Simple Silver Bangles',
      price: '220',
    },
    {
      id: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdRd0dwuSc5puUw3GOvohbP2lJC8A7mp1qw&s',
      rating: 4,
      description: 'Designer Pearl Bangles',
      price: '280',
    },
    {
      id: 11,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanNajY8738sw7NURepp3l60cCZfs8mve-wyWN1mjKuLr1IpNF_48oUgspsJvwsUdZEho&usqp=CAU',
      rating: 5,
      description: 'Antique Bridal Bangles',
      price: '320',
    },
    {
      id: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxc2P5h9dfS07juMHlNKQv2Wj7bX7S0a_KlwsXnnwQsyt8b6cbO7dg9LXov2D5LRY2po&usqp=CAU',
      rating: 4,
      description: 'Colorful Glass Bangles Set',
      price: '270',
    },
    {
      id: 13,
      image: 'https://m.media-amazon.com/images/I/71cPQD00zmL._AC_UY300_.jpg',
      rating: 4,
      description: 'Elegant Gold-Plated Bangles',
      price: '250',
    },
    {
      id: 14,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWGGyIm9CtI8A_lTyF6x9kh96Q9Lafyo2p0u9_nU8-VIDTIXWSXZ4DvkjsHN-g2Z4yUw&usqp=CAU',
      rating: 5,
      description: 'Traditional Kundan Bangles',
      price: '300',
    },
    {
      id: 15,
      image: 'https://m.media-amazon.com/images/I/71OYK4jGL1L._AC_UY300_.jpg',
      rating: 3,
      description: 'Simple Silver Bangles',
      price: '220',
    },
    {
      id: 16,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdRd0dwuSc5puUw3GOvohbP2lJC8A7mp1qw&s',
      rating: 4,
      description: 'Designer Pearl Bangles',
      price: '280',
    },
    {
      id: 17,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanNajY8738sw7NURepp3l60cCZfs8mve-wyWN1mjKuLr1IpNF_48oUgspsJvwsUdZEho&usqp=CAU',
      rating: 5,
      description: 'Antique Bridal Bangles',
      price: '320',
    },
  ];
  

  return (
    <div id='Card' className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Bangels Collection</h2>
      
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white hover:shadow-slate-900 rounded-lg shadow-lg hover:scale-110 transition-all overflow-hidden">
            <img src={product.image} alt={product.description} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.description}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  index < product.rating ? <FaStar key={index} className="text-yellow-500 mr-1" /> : <FaRegStar key={index} className="text-gray-400 mr-1" />
                ))}
              </div>
              <p className="text-lg font-semibold text-gray-800"> &#8377;{product.price}</p>   
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                  View details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper for small screens */}
      <div className="sm:hidden">
        <Swiper 
          modules={[Pagination]} 
          pagination={{ clickable: true }} 
          spaceBetween={20} 
          slidesPerView={1.1}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" border-[2px] border-black rounded-lg shadow-lg overflow-hidden">
                <img src={product.image} alt={product.description} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.description}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      index < product.rating ? <FaStar key={index} className="text-yellow-500 mr-1" /> : <FaRegStar key={index} className="text-gray-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-gray-800"> &#8377;{product.price}</p>   
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-[#000000] text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
                      View details
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Card;
