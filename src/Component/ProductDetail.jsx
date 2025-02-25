import React, { useRef, useState ,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import { useSto } from "../Context/Context";
import { Fake } from '../assets/Revies.js';
import {products} from '../assets/Produt.js'
import gsap from "gsap";

const ProductDetail = () => {
  const { addToCart } = useSto();
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useRef()
  const [size, setSize] = useState('Select Size');

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 , scale:0},
      {
        opacity: 1,
        y: 0,
        scale:1,
        duration: 1,
        
      }
    );
   
  }, [])

  


  // Find the product that matches the ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id));

  // If product is not found
  if (!product) {
    return <div><h2>Product not found</h2><p>Visit More</p></div>;
  }

  // State to manage the main displayed image
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div ref={ref} className="container   mx-auto px-4 py-8">
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
                className={`w-24 h-24 object-cover m-2 cursor-pointer border-2 rounded-lg transition-all duration-200 ${mainImage === img ? 'border-blue-500' : 'border-gray-300'}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          </div>

        {/* Product Info */}
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold">{product.description}</h2>
          <div ref={ref} className="flex items-center my-2">
            {Array.from({ length: 5 }, (_, index) => (
              index < product.rating ? (
                <FaStar key={index} className="text-yellow-500 mr-1" />
              ) : (
                <FaRegStar key={index} className="text-gray-400 mr-1" />
              )
            ))}
          </div>
          <p className="text-xl font-bold text-gray-800">Price: &#8377;{product.price}</p>
          <div>
          <div className="flex items-center space-x-4">
      <select
        id="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5"
      >
        <option value=" Select Size"> Select Size:</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>
          </div>
          

          <p className="mt-4">Estimated shipping date: 2-3 business days</p>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
            onClick={() => { 
              addToCart({
                ...product, 
                image: product.images[0] 
              });
              navigate('/checkout');
            }}
          >
            Add to Cart
          </button>

          
        </div>
      </div>

      {/* Reviews Section */}
        <div className="text-xl my-3 font-bold underline" >Some People Give Our Reviews</div>
      <div id="scroll" className="container  text-[#313131] mx-2 my-5 max-sm:flex gap-5 overflow-x-scroll  ">
        {Fake.length > 0 ? (
          Fake.map((review, index) => (
            <div key={index} className="border-[1px] mx-2 bg-gradient-to-r from-[#33CCFF]/30 to-[#FF9933]/30 my-5 max-sm:flex-row rounded-xl  border-black px-3 py-4">
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
              <p className="font-mono">{review.review_text}</p>
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
