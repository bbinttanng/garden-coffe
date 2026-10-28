import React from 'react';
import { useModals } from '../../context/ModalContext';
import { useCart } from '../../context/CartContext';

export const MobileNavDrawer = ({ activePage, setActivePage }) => {
  const { isMobileNavOpen, closeMobileNav, openSearch, openReservationModal, openCart } = useModals();
  const { totals } = useCart();

  if (!isMobileNavOpen) return null;

  const links = [
    { id: 'home', label: 'Home & Cerita', icon: 'home' },
    { id: 'coffee', label: 'Specialty Coffee', icon: 'local_cafe' },
    { id: 'food', label: 'Botanical Food', icon: 'restaurant' },
    { id: 'pastry', label: 'Artisan Pastry', icon: 'bakery_dining' },
    { id: 'lokasi', label: 'Lokasi Store (14 Glasshouses)', icon: 'explore' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={closeMobileNav}
        className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <nav className="relative w-[82%] max-w-sm bg-surface shadow-2xl flex flex-col z-10 border-r border-surface-container-high animate-in slide-in-from-left duration-300">
        <div className="p-6 bg-surface-container-low border-b border-surface-container-high/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-lg">spa</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-primary tracking-tight leading-none">
                Garden Coffee
              </span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-secondary mt-0.5">
                &amp; Eatery
              </span>
            </div>
          </div>
          <button
            onClick={closeMobileNav}
            className="w-9 h-9 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto space-y-2">
          {links.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  closeMobileNav();
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl font-label-lg transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary font-bold shadow-xs'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            );
          })}

          <div className="pt-6 border-t border-surface-container-high/80 space-y-3">
            <button
              onClick={() => {
                closeMobileNav();
                openSearch();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-surface-container text-on-surface font-label-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-primary text-xl">search</span>
              <span>Cari Menu &amp; Lokasi</span>
            </button>
            <button
              onClick={() => {
                closeMobileNav();
                openReservationModal();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-secondary-container/40 text-on-secondary-fixed font-label-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-secondary text-xl">event_seat</span>
              <span>Reservasi Meja</span>
            </button>
          </div>
        </div>

        <div className="p-6 bg-surface-container-low border-t border-surface-container-high space-y-3">
          <button
            onClick={() => {
              closeMobileNav();
              openCart();
            }}
            className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">local_mall</span>
            <span>Buka Baki Pesanan</span>
            {totals.count > 0 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
                {totals.count}
              </span>
            )}
          </button>
          <p className="text-center font-body-sm text-[11px] text-on-surface-variant">
            Jakarta • Bandung • Bali Sanctuary
          </p>
        </div>
      </nav>
    </div>
  );
};
