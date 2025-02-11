// src/components/Cartjsx
import React from 'react';

import { Link } from 'react-router-dom';
import { useCart } from '../Context/Context';


const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cart.length === 0 ? (
       <> <div className="text-center">Your cart is empty</div>
       <Link to={'/'}> <button className='bg-black text-white'>Buy Now</button></Link></>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-lg">
                <img src={item.image} alt={item.description} className="w-24 h-24 object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{item.description}</h3>
                  <p className="text-gray-800">Price: &#8377;{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <button
                    className="text-red-500 mt-2 hover:text-red-600"
                    onClick={() => removeFromCart(item.id)} // Remove item from cart
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-semibold">Total: &#8377;{totalPrice}</p>

            <div>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg mr-4 hover:bg-blue-600"
                onClick={clearCart} // Clear the cart
              >
                Clear Cart
              </button>

              <Link to="/checkout">
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart
