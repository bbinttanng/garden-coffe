import React from 'react';
import { useModals } from '../../context/ModalContext';
import { Icon } from '../ui/Icon';

export const Header = ({ activePage, setActivePage }) => {
  const { openSearch, openMobileNav, openReservationModal } = useModals();

  const navLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'coffee', label: 'Kopi' },
    { id: 'food', label: 'Makanan' },
    { id: 'pastry', label: 'Pastry' },
    { id: 'lokasi', label: 'Lokasi Kami' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-header shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Announcement Bar */}
      <div className="bg-primary-container text-on-primary font-label-sm text-label-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-on-primary/90 font-label-sm tracking-wider uppercase text-[11px]">
          <span className="truncate">
            Panen Pilihan Musim Ini: Nikmati Single-Origin Java Honey Geisha &amp; Aneka Pastry Segar Tiap Pagi
          </span>
          <div className="flex items-center gap-6 hidden sm:flex shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Jakarta • Bandung • Bali
            </span>
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
            <img
              src="/logo.png"
              alt="Garden Coffee Brand Mark"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-[20px] sm:text-[23px] text-primary tracking-tight leading-none group-hover:text-secondary transition-colors">
                Garden Coffee
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-secondary mt-1">
                &amp; Eatery
              </span>
            </div>
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
            <Icon name="search" className="w-5 h-5" />
          </button>

          {/* Reservation CTA Button */}
          <button
            type="button"
            onClick={() => openReservationModal()}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-all cursor-pointer group"
          >
            <Icon name="event" className="w-4 h-4 text-primary-fixed group-hover:scale-110 transition-transform" />
            <span>Reservasi Meja</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={openMobileNav}
            className="md:hidden w-10 h-10 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all flex items-center justify-center cursor-pointer"
            aria-label="Buka Menu Navigasi"
          >
            <Icon name="menu" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
