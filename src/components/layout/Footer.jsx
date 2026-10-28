import React from 'react';
import { useModals } from '../../context/ModalContext';

export const Footer = ({ setActivePage }) => {
  const { openCart, showToast } = useModals();

  return (
    <footer className="w-full bg-surface-container-low mt-20 border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl text-primary tracking-tight leading-none">
                Garden Coffee
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-secondary mt-1">
                &amp; Eatery
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
              Tempat singgah hijau di tengah kota menyajikan kopi terbaik dari petani lokal dan hidangan dapur segar dalam nuansa alam yang asri.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => showToast('Instagram', 'Ikuti @gardencoffee.eatery untuk info dan promo terbaru.')}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                title="Instagram"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </button>
            </div>
          </div>

          {/* Menu Col */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-4">Kurasi Menu</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button onClick={() => setActivePage('coffee')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Specialty Coffee
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('food')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Makanan &amp; Hidangan
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('pastry')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Aneka Pastry Segar
                </button>
              </li>
            </ul>
          </div>

          {/* Tentang Kami Col */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-4">Tentang Kami</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button onClick={() => setActivePage('lokasi')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Lokasi Toko Kami
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Filosofi Brand
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Komitmen Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Layanan Col */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button onClick={openCart} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Keranjang Pesanan
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('lokasi')} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Kunjungan &amp; Acara
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-left inline-block"
                >
                  Hubungi Barista Kami
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Center Links & Copyright */}
        <div className="pt-8 border-t border-surface-container-high/60 flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center justify-center gap-6 font-label-md text-label-md text-on-surface-variant">
            <button
              onClick={() => showToast('Privasi', 'Data tamu aman dan hanya digunakan untuk layanan kenyamanan santap Anda.')}
              className="hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              Kebijakan Privasi
            </button>
            <span className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
            <button
              onClick={() => showToast('Layanan', 'Layanan berlaku di seluruh gerai Garden Coffee & Eatery.')}
              className="hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              Ketentuan Layanan
            </button>
          </div>
          <p className="text-on-surface-variant/80 font-body-sm text-xs mt-1">
            &copy; 2025 Garden Coffee &amp; Eatery. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
