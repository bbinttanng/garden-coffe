import React, { createContext, useContext, useState, useEffect } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStoreForReservation, setSelectedStoreForReservation] = useState('');
  const [latestOrder, setLatestOrder] = useState(null);

  const [toast, setToast] = useState({ show: false, title: '', message: '', icon: 'eco' });

  const showToast = (title, message, icon = 'eco') => {
    setToast({ show: true, title, message, icon });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3200);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  const openReceipt = (orderData) => {
    setLatestOrder(orderData);
    setIsCheckoutOpen(false);
    setIsReceiptOpen(true);
  };
  const closeReceipt = () => setIsReceiptOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openItemModal = (item) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };
  const closeItemModal = () => {
    setIsDetailOpen(false);
    setSelectedItem(null);
  };

  const openReservationModal = (storeName = '') => {
    setSelectedStoreForReservation(storeName);
    setIsReservationOpen(true);
  };
  const closeReservationModal = () => {
    setIsReservationOpen(false);
    setSelectedStoreForReservation('');
  };

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  // Keyboard shortcut listener (Ctrl+K or '/' for search, Escape for closing)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsCartOpen(false);
        setIsCheckoutOpen(false);
        setIsReceiptOpen(false);
        setIsSearchOpen(false);
        setIsDetailOpen(false);
        setIsReservationOpen(false);
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        isReceiptOpen,
        openReceipt,
        closeReceipt,
        isSearchOpen,
        openSearch,
        closeSearch,
        isDetailOpen,
        selectedItem,
        openItemModal,
        closeItemModal,
        isReservationOpen,
        selectedStoreForReservation,
        openReservationModal,
        closeReservationModal,
        isMobileNavOpen,
        openMobileNav,
        closeMobileNav,
        latestOrder,
        toast,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => useContext(ModalContext);
