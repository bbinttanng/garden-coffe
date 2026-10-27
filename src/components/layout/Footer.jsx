import React from 'react';
import { useModals } from '../../context/ModalContext';

export const Footer = ({ setActivePage }) => {
  const { openSearch, openReservationModal, openCart, showToast } = useModals();

  return (
    <footer className="w-full bg-surface-container-low mt-20 border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">potted_plant</span>
              <span className="font-headline-sm text-headline-sm text-primary font-serif">
                Garden Coffee &amp; Eatery
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
              Suaka botani hidup yang menyatukan sangraian kopi micro-lot Indonesia, hidangan segar dapur kayu, dan ketenangan arsitektur rumah kaca tropis.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => showToast('Instagram', 'Ikuti @gardencoffee.eatery untuk cerita botani terbaru.')}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </button>
              <button
                onClick={openSearch}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">search</span>
              </button>
              <button
                onClick={() => openReservationModal()}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">event_seat</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-4">Kurasi Menu</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button onClick={() => setActivePage('coffee')} className="hover:text-primary transition-colors cursor-pointer">
                  Specialty Coffee &amp; Roastery
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('food')} className="hover:text-primary transition-colors cursor-pointer">
                  Farm-to-Table Kitchen
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('pastry')} className="hover:text-primary transition-colors cursor-pointer">
                  Artisan Viennoiserie
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('pastry')} className="hover:text-primary transition-colors cursor-pointer">
                  Pastry Gift Box Builder
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-4">Sanctuary &amp; Cerita</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button onClick={() => setActivePage('lokasi')} className="hover:text-primary transition-colors cursor-pointer">
                  Direktori Lokasi Store
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-primary transition-colors cursor-pointer">
                  Filosofi &amp; Sejarah
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-primary transition-colors cursor-pointer">
                  Komitmen Regeneratif
                </button>
              </li>
              <li>
                <button onClick={() => openReservationModal()} className="hover:text-primary transition-colors cursor-pointer">
                  Reservasi Meja Sanctuary
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-4">Layanan &amp; Acara</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button onClick={openCart} className="hover:text-primary transition-colors cursor-pointer">
                  Pesan Online / Tray
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('lokasi')} className="hover:text-primary transition-colors cursor-pointer">
                  Private Glasshouse Gathering
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('coffee')} className="hover:text-primary transition-colors cursor-pointer">
                  Coffee Bean Subscription
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Hubungi Barista Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 bg-surface-container-high/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-2xl">eco</span>
            <p className="font-body-sm text-body-sm text-on-surface">
              <span className="font-semibold">Ikrar Botani Kami:</span> Setiap biji kopi disangrai dengan netral emisi dan bersumber dari tanah terawat binaan langsung.
            </p>
          </div>
          <div className="flex items-center gap-6 font-label-md text-label-md text-on-surface-variant">
            <button onClick={() => showToast('Privasi', 'Data tamu aman dan hanya digunakan untuk layanan santap Anda.')} className="hover:text-primary transition-colors cursor-pointer">
              Kebijakan Privasi
            </button>
            <button onClick={() => showToast('Layanan', 'Layanan berlaku di 14 sanctuary Garden Coffee.')} className="hover:text-primary transition-colors cursor-pointer">
              Ketentuan Layanan
            </button>
          </div>
        </div>

        <div className="pt-8 text-center text-on-surface-variant font-body-sm text-body-sm">
          &copy; 2025 Garden Coffee &amp; Eatery. Hak cipta dilindungi. Dirancang untuk ritme hidup yang bermakna.
        </div>
      </div>
    </footer>
  );
};
