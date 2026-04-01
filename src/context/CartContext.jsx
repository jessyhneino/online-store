import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // وظيفة الإضافة إلى السلة
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // 1. التحقق بالاعتماد على الـ cartId المميز (الذي يجمع رقم المنتج + اللون + المقاس)
      const existingItem = prevItems.find(
        (item) => item.cartId === product.cartId
      );

      if (existingItem) {
        // إذا كانت نفس التشكيلة موجودة، نزيد الكمية بالعدد الذي اختاره المستخدم (product.quantity)
        return prevItems.map((item) =>
          item.cartId === product.cartId
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // إذا كان منتجاً جديداً بهذه التشكيلة، نضيفه بالكامل مع الكمية المختارة
      return [...prevItems, product];
    });
  };

  // الحذف يعتمد على الـ cartId
  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter((item) => item.cartId !== cartId));
  };

  // تحديث الكمية يعتمد على الـ cartId
  const updateQuantity = (cartId, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
