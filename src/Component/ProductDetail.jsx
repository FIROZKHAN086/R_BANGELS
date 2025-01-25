import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import { useCart } from "../Context/Context";

const ProductDetail = () => {
  const { addToCart } = useCart();
  // Getting product ID from the URL
  const { id } = useParams();

  // Sample products data (same as in Card component)
  const products = [
    { id: 1, image: "https://m.media-amazon.com/images/I/71cPQD00zmL._AC_UY300_.jpg", rating: 4, description: "Bangels A", price: "250" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWGGyIm9CtI8A_lTyF6x9kh96Q9Lafyo2p0u9_nU8-VIDTIXWSXZ4DvkjsHN-g2Z4yUw&usqp=CAU", rating: 5, description: "Bangels B", price: "300" },
    { id: 3, image: "https://5.imimg.com/data5/YW/GE/AM/SELLER-88021997/bridal-thread-bangle-500x500.jpg", rating: 3, description: "Bangels C", price: "220" },
    // Add the remaining products here
  ];

  // Find the product that matches the ID from URL
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.description} className="w-full md:w-1/2 h-96 object-cover rounded-lg" />
        
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

          {/* Shipping info */}
          <p className="mt-4">Estimated shipping date: 2-3 business days</p>

          {/* Add to Cart / Buy Now button/ make after this fac */}
          <button
                className="bg-blue-500 text-white w-full py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
                onClick={() => addToCart(product)} // Add to cart on click
              >
                Add to Cart
              </button>
        </div>
      </div>

      {/* Similar Products or Other Sections */}
      <h3 className="text-2xl mt-8">Customer Reviews</h3>
      <p>No reviews yet, be the first to write a review!</p>

      {/* Old Month Purchasers */}
      <h3 className="text-2xl mt-8">Purchased by</h3>
      <ul>
        <li>John Doe</li>
        <li>Jane Smith</li>
        {/* Add more purchasers */}
      </ul>
    </div>
    // Produt Compontant Was Don
  );
};

export default ProductDetail;
