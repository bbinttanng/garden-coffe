import React from 'react';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';

export const Header = ({ activePage, setActivePage }) => {
  const { totals } = useCart();
  const { openCart, openSearch, openMobileNav } = useModals();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'food', label: 'Food' },
    { id: 'pastry', label: 'Pastry' },
    { id: 'lokasi', label: 'Lokasi Store' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Announcement Bar */}
      <div className="bg-primary-container text-on-primary font-label-sm text-label-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-on-primary/90 font-label-sm tracking-wider uppercase text-[11px]">
          <span className="truncate">
            Spring Conservatory Harvest: Discover our Single-Origin Honey Geisha &amp; Wild Lavender Scones
          </span>
          <div className="flex items-center gap-6 hidden sm:flex shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Jakarta • Bandung • Bali
            </span>
            <button
              onClick={() => setActivePage('coffee')}
              className="underline underline-offset-4 hover:text-primary-fixed transition-colors lowercase cursor-pointer"
            >
              est. 2021 • explore seasonal notes
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <button
            onClick={() => setActivePage('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-2xl">potted_plant</span>
            </div>
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-serif">
              Garden Coffee &amp; Eatery
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  className={`font-label-lg text-label-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Search */}
          <button
            type="button"
            onClick={openSearch}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center cursor-pointer"
            title="Cari Menu &amp; Lokasi (Ctrl+K)"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          {/* Cart Button with Count Badge */}
          <button
            type="button"
            onClick={openCart}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center relative cursor-pointer"
            title="Baki Pesanan"
          >
            <span className="material-symbols-outlined text-xl">local_mall</span>
            {totals.count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center shadow-xs">
                {totals.count}
              </span>
            )}
          </button>

          {/* Order Online Button */}
          <button
            type="button"
            onClick={openCart}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg shadow-sm transition-all cursor-pointer"
          >
            Pesan Online
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={openMobileNav}
            className="md:hidden w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center cursor-pointer"
            aria-label="Buka Menu Navigasi"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
