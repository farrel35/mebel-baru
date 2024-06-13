import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (typeof product.price !== 'number' || isNaN(product.price)) {
      console.error(`Invalid price for product with id ${product.id}:`, product.price); // Debugging: log invalid price
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    console.log(cart); // Debugging: log the cart items

    return cart.reduce((total, item) => {
      if (typeof item.price !== 'number' || isNaN(item.price)) {
        console.error(`Invalid price for item with id ${item.id}:`, item.price); // Debugging: log invalid price
        return total;
      }
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        calculateSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
