import React from "react";
import { Link } from "react-router-dom";
import { useSto } from "../Context/Context";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useSto();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity + 30, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <>
          <div className="text-center">Your cart is empty</div>
          <Link to={"/"}>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Buy Now</button>
          </Link>
        </>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-lg">
                <img src={item.image} alt={item.description} className="w-24 h-24 object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{item.description}</h3>
                  <p className="text-gray-800">Price: &#8377;{item.price}</p>

                  {/* Quantity adjustment */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="px-2 py-1 bg-gray-300 rounded-lg text-lg"
                    >
                      -
                    </button>
                    <span className="mx-2 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="px-2 py-1 bg-gray-300 rounded-lg text-lg"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <button
                    className="text-red-500 mt-2 hover:text-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div>
              <p className="text-xl font-mono">Delivery Fee: &#8377;30</p>
              <p className="text-2xl font-semibold">Total: &#8377;{totalPrice}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600" onClick={clearCart}>
                Clear Cart
              </button>

              <Link to="/checkout" state={{ cart }}>
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

export default Cart;
