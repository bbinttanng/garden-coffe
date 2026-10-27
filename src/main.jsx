import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CartProvider>
  </React.StrictMode>
);
