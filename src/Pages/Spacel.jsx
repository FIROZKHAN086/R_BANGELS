import React from 'react';

const ProductCard = ({ image, title, description, price, rating, onAddToCart }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-3 flex items-center">
          <span className="text-2xl font-bold text-gray-900">₹{price}</span>
          <button
            onClick={onAddToCart}
            className="ml-auto bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
        <div className="mt-2 flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    category: 'Wedding',
    image: 'https://m.media-amazon.com/images/I/71cPQD00zmL._AC_UY300_.jpg',
    title: 'Wedding Special Bangles',
    description: 'Elegant bangles perfect for wedding occasions.',
    price: 1500,
    rating: 4,
  },
  {
    id: 1,
    category: 'Wedding',
    image: 'https://example.com/wedding-product.jpg',
    title: 'Wedding Special Bangles',
    description: 'Elegant bangles perfect for wedding occasions.',
    price: 1500,
    rating: 4,
  },
  {
    id: 1,
    category: 'Wedding',
    image: 'https://example.com/wedding-product.jpg',
    title: 'Wedding Special Bangles',
    description: 'Elegant bangles perfect for wedding occasions.',
    price: 1500,
    rating: 4,
  },
  {
    id: 2,
    category: 'Diwali',
    image: 'https://example.com/diwali-product.jpg',
    title: 'Diwali Spacel bangels',
    description: 'Beautifully crafted  your Diwali.',
    price: 500,
    rating: 5,
  },
  // Add more products as needed
];

const Spacel = () => {
  const handleAddToCart = (product) => {
    // Implement your add to cart logic here
    console.log(`${product.title} added to cart.`);
  };

  return (
    <div className="container mx-auto p-4">
      {['Wedding', 'Diwali', 'Holi', 'Other Festivals'].map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold my-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spacel;
