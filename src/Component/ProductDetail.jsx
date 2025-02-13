import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import { useSto } from "../Context/Context";
import { Fake } from '../assets/Revies.js';

const ProductDetail = () => {
  const { addToCart } = useSto();
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample products data
  const products = [{ 
    id: 1, 
    images: [
      'https://m.media-amazon.com/images/I/71cPQD00zmL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/81CbxCel1mL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61DRh33iGWL._AC_UY300_.jpg'
    ],
    rating: 4, 
    description: 'Bangels A', 
    price: '250' 
  },
  { 
    id: 2, 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWGGyIm9CtI8A_lTyF6x9kh96Q9Lafyo2p0u9_nU8-VIDTIXWSXZ4DvkjsHN-g2Z4yUw&usqp=CAU',
      'https://m.media-amazon.com/images/I/81GqTEXquQL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61vnMbGctiL._AC_UY300_.jpg'
    ],
    rating: 5, 
    description: 'Bangels B', 
    price: '300' 
  },
  { 
    id: 3, 
    images: [
      'https://m.media-amazon.com/images/I/71OYK4jGL1L._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/81hxB0plT3L._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61fB4AAXEQL._AC_UY300_.jpg'
    ],
    rating: 3, 
    description: 'Bangels C', 
    price: '220' 
  },
  { 
    id: 4, 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdRd0dwuSc5puUw3GOvohbP2lJC8A7mp1qw&s',
      'https://m.media-amazon.com/images/I/71OIXo1rBXL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61HpoAHL3VL._AC_UY300_.jpg'
    ],
    rating: 4, 
    description: 'Bangels D', 
    price: '280' 
  },
  { 
    id: 5, 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanNajY8738sw7NURepp3l60cCZfs8mve-wyWN1mjKuLr1IpNF_48oUgspsJvwsUdZEho&usqp=CAU',
      'https://m.media-amazon.com/images/I/81YQfzMNYqL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61cCkIrH8zL._AC_UY300_.jpg'
    ],
    rating: 5, 
    description: 'Bangels E', 
    price: '320' 
  },
  { 
    id: 6, 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxc2P5h9dfS07juMHlNKQv2Wj7bX7S0a_KlwsXnnwQsyt8b6cbO7dg9LXov2D5LRY2po&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxc2P5h9dfS07juMHlNKQv2Wj7bX7S0a_KlwsXnnwQsyt8b6cbO7dg9LXov2D5LRY2po&usqp=CAU',
      'https://m.media-amazon.com/images/I/61S2eRr5bRL._AC_UY300_.jpg'
    ],
    rating: 4, 
    description: 'Bangels F', 
    price: '270' 
  },
  { 
    id: 7, 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4hfwRFNxlGER9yyx8JpGGde3gJ9Jw-ASA4LCeavg3ERpS8nQbekFd3gl_X0BgJkVric&usqp=CAU',
      'https://m.media-amazon.com/images/I/61fEkUHX07L._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/71rMoB06hIL._AC_UY300_.jpg'
    ],
    rating: 4, 
    description: 'Bangels G', 
    price: '290' 
  },
  { 
    id: 8, 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JkcqCQRgPMgOAGxUC_MeLZb47jnVdiZLjhNRRzyccWgXI2K6QOxVMxt3JdiNcwYxXNU&usqp=CAU',
      'https://m.media-amazon.com/images/I/81ltD+UqaXL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61kxCFqIlSL._AC_UY300_.jpg'
    ],
    rating: 3, 
    description: 'Bangels H', 
    price: '230' 
  },
  { 
    id: 9, 
    images: [
      'https://m.media-amazon.com/images/I/61O9Y9eF6zL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/81Q7G3LxHXL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/71tD9FVkV8L._AC_UY300_.jpg'
    ],
    rating: 5, 
    description: 'Bangels I', 
    price: '310' 
  },
  { 
    id: 10, 
    images: [
      'https://m.media-amazon.com/images/I/71v1AMauFEL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/81lUox8h3SL._AC_UY300_.jpg',
      'https://m.media-amazon.com/images/I/61XDj7CUYxL._AC_UY300_.jpg'
    ],
    rating: 4, 
    description: 'Bangels J', 
    price: '260' 
  }
];

  // Find the product that matches the ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id));

  // If product is not found
  if (!product) {
    return <div><h2>Product not found</h2><p>Visit More</p></div>;
  }

  // State to manage the main displayed image
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */}
      <div className=" flex flex-col   md:flex-wrap">
        <div className="flex justify-center items-center max-sm:flex-wrap">
        {/* Main Image */}
        <img 
          src={mainImage} 
          alt={product.description} 
          className="w-full md:w-1/2 h-96 object-cover rounded-lg transition-all duration-300"
        />
        {/* Thumbnail Images (Click to Change Main Image) */}
        <div className=" container flex-wrap flex justify-center mt-4 space-x-4">
            {product.images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover cursor-pointer border-2 rounded-lg transition-all duration-200 ${mainImage === img ? 'border-blue-500' : 'border-gray-300'}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          </div>

        {/* Product Info */}
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold">{product.description}</h2>
          <div className="flex items-center my-2">
            {Array.from({ length: 5 }, (_, index) => (
              index < product.rating ? (
                <FaStar key={index} className="text-yellow-500 mr-1" />
              ) : (
                <FaRegStar key={index} className="text-gray-400 mr-1" />
              )
            ))}
          </div>
          <p className="text-xl font-bold text-gray-800">Price: &#8377;{product.price}</p>

          <p className="mt-4">Estimated shipping date: 2-3 business days</p>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
            onClick={() => { 
              addToCart({
                ...product, 
                image: product.images[0] 
              });
              navigate('/cart');
            }}
          >
            Add to Cart
          </button>

          
        </div>
      </div>

      {/* Reviews Section */}
      <div id="scroll" className="container max-sm:flex gap-5 overflow-x-scroll ">
        {Fake.length > 0 ? (
          Fake.map((review, index) => (
            <div key={index} className="border-[1px] mx-2 my-5 rounded-xl border-black px-3 py-4">
              <p className="font-semibold">{review.reviewer_name}</p>
              <div className="flex items-center my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  i < review.rating ? (
                    <FaStar key={i} className="text-yellow-500 mr-1" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-400 mr-1" />
                  )
                ))}
              </div>
              <p>{review.review_text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet, be the first to write a review!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
