import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('garden_coffee_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error reading cart from localStorage', e);
      return [];
    }
  });

  const [deliveryMode, setDeliveryMode] = useState('dine-in'); // 'dine-in' | 'takeaway' | 'delivery'
  const deliveryFee = 15000;
  const taxRate = 0.10;

  useEffect(() => {
    try {
      localStorage.setItem('garden_coffee_cart_v1', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cart]);

  const formatRupiah = (amount) => {
    if (typeof amount === 'string') {
      amount = parseInt(amount.replace(/[^0-9]/g, ''), 10) || 0;
    }
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const addToCart = (item) => {
    const numPrice = typeof item.price === 'number'
      ? item.price
      : (parseInt(String(item.price).replace(/[^0-9]/g, ''), 10) || 0);

    const optionsStr = item.options ? (typeof item.options === 'string' ? item.options : JSON.stringify(item.options)) : '';

    setCart(prev => {
      const existingIdx = prev.findIndex(i => i.name === item.name && (i.optionsStr || '') === optionsStr);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += (item.quantity || 1);
        return updated;
      } else {
        return [
          ...prev,
          {
            id: item.id || `item_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
            name: item.name,
            price: numPrice,
            category: item.category || 'Menu',
            image: item.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxy3vtevWnY_khG4iKiSs_W3FmyZq4d3coXk6wdNn1__gGFiWqejK-T_mZIpWgncGEwntiIOaWZcb26IDNQrN8Z6r9ZJG_x5I8GllzcwY9owrGOqglAkUSQ-i47DNRAvGeQIqGvJn6H9Tfk-Tsz5wKPGhL4_3UHXLNV0thflY9vvSxaTOA8kL0IR13oFQkyC5hHDHsied_FFPCQKNXDB-uxkmwxuYufOO7bw5mqt8Ts6MK40JZIHK2',
            options: item.options || null,
            optionsStr: optionsStr,
            quantity: item.quantity || 1
          }
        ];
      }
    });
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => {
      const updated = [...prev];
      if (!updated[index]) return prev;
      updated[index].quantity += delta;
      if (updated[index].quantity <= 0) {
        updated.splice(index, 1);
      }
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const count = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const tax = Math.round(subtotal * taxRate);
  const fee = deliveryMode === 'delivery' ? deliveryFee : 0;
  const grandTotal = subtotal + tax + fee;

  return (
    <CartContext.Provider
      value={{
        cart,
        deliveryMode,
        setDeliveryMode,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        formatRupiah,
        totals: { count, subtotal, tax, fee, grandTotal }
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
