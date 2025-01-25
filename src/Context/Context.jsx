import React, { createContext, useState, useContext } from 'react';

// Create a context with default values
export const StoreContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

// Custom hook to use cart context
export const useCart = () => useContext(StoreContext);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const itemExists = prevCart.find((item) => item.id === product.id);
      
      // If item exists, increase the quantity; otherwise, add a new item
      return itemExists
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Empty the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
