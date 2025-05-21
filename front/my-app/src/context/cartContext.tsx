"use client";
import { Product } from "@/interfaces/Product";
import React, { createContext, useEffect, useState } from "react";

interface CartContext {
  cart: Product[];
  setCart: (cart: Product[]) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContext>({
  cart: [],
  setCart: () => { },
  clearCart: () => { },
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(localCart ? JSON.parse(localCart) : []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
