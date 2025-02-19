import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart, FaCheckCircle } from 'react-icons/fa';
import { useSto } from '../Context/Context';

const Checkout = () => {
    const {cart, updateQuantity ,handleSizeChange ,removeFromCart} = useSto()
 

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-white text-center flex items-center gap-2">
          <FaShoppingCart className="text-yellow-400" />
          Checkout
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="text-lg text-white font-semibold">{item.name}</p>
                      <p className="text-yellow-400">₹{item.price}</p>
                    </div>
                  </div>
                  <div className='flex gap-5 max-sm:flex-col'>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="px-2 py-1 bg-gray-300 rounded-lg text-lg"
                    >
                      -
                    </button>
                    <span className="mx-2 text-white text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="px-2 py-1 bg-gray-300 rounded-lg text-lg"
                    >
                      +
                    </button>
                  </div>
                  <div>
                   
                <button
                    className="text-red-500 mx-2 mt-2 hover:text-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  </div>
                </div>
              </div>
              ))}
            </div>

            <div className="flex justify-between text-lg font-semibold border-t border-gray-700 pt-4">
              <span className='text-white' >Total:</span>
              <span className="text-yellow-400">
                ₹
                {cart
                  .reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    30
                  )
                  .toFixed(2)}
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300">
              <FaCheckCircle />
              Confirm & Pay
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
