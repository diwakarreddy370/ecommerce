import React, { createContext, useEffect, useState } from 'react';
import games from './intialdata';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const addToCart = (id) => {
    const gameToAdd = games.find((game) => game.id === id);
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, gameToAdd];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((cartItem) => cartItem.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const pay = () => {
    // Perform payment logic here
    // ...
    // Clear the cart after payment
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, pay }}>
      {children}
    </CartContext.Provider>
  );
};











