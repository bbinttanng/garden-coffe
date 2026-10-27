import React from 'react';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';

export const CartDrawer = ({ setActivePage }) => {
  const { cart, deliveryMode, setDeliveryMode, updateQuantity, removeFromCart, clearCart, formatRupiah, totals } = useCart();
  const { isCartOpen, closeCart, openCheckout } = useModals();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Drawer */}
      <aside className="relative w-full max-w-md bg-surface shadow-2xl flex flex-col z-10 border-l border-surface-container-high animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 bg-surface-container-low border-b border-surface-container-high/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">local_mall</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-title-lg font-serif text-primary">Baki Pesanan</h3>
              <p className="font-label-sm text-label-sm text-secondary tracking-wider uppercase">
                Garden Sanctuary Order
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="p-4 bg-surface-container/50 border-b border-surface-container">
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-surface-container-high rounded-xl text-center font-label-sm text-label-sm font-semibold">
            {['dine-in', 'takeaway', 'delivery'].map((mode) => {
              const labels = { 'dine-in': 'Dine-In', 'takeaway': 'Takeaway', 'delivery': 'Antar Santai' };
              const isActive = deliveryMode === mode;
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setDeliveryMode(mode)}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-xs font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {labels[mode]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-on-surface-variant space-y-4">
              <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
                <span className="material-symbols-outlined text-4xl">nest_heat_link_gen</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-title-md font-serif text-primary">
                  Baki Pesanan Masih Kosong
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 max-w-xs">
                  Jelajahi sajian kopi spesialti, hidangan segar dapur botani, dan artisan bakes kami.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2 w-full max-w-xs">
                <button
                  onClick={() => {
                    closeCart();
                    setActivePage('coffee');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all cursor-pointer"
                >
                  Jelajahi Menu Kopi
                </button>
                <button
                  onClick={() => {
                    closeCart();
                    setActivePage('pastry');
                  }}
                  className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all cursor-pointer"
                >
                  Jelajahi Artisan Pastry
                </button>
              </div>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={item.id || idx}
                className="flex gap-4 p-3.5 rounded-2xl bg-surface-container/60 hover:bg-surface-container transition-all border border-surface-container-high/60 group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container-high shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-label-sm text-[11px] text-secondary font-bold uppercase tracking-wider">
                        {item.category || 'Specialty'}
                      </span>
                      <h4 className="font-title-md text-title-md text-primary font-serif truncate">
                        {item.name}
                      </h4>
                      {item.options && (
                        <p className="font-body-sm text-[12px] text-on-surface-variant truncate mt-0.5">
                          {typeof item.options === 'string' ? item.options : JSON.stringify(item.options)}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)}
                      className="text-on-surface-variant/60 hover:text-error transition-colors p-1 cursor-pointer"
                      title="Hapus"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-label-md text-label-md text-primary font-bold">
                      {formatRupiah(item.price * item.quantity)}
                    </span>

                    <div className="flex items-center gap-2 bg-surface rounded-lg p-1 border border-surface-container-high shadow-2xs">
                      <button
                        onClick={() => updateQuantity(idx, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-xs">remove</span>
                      </button>
                      <span className="font-label-sm text-label-sm font-bold w-4 text-center text-on-surface">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(idx, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-xs">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer Summary */}
        {cart.length > 0 && (
          <div className="p-6 bg-surface-container-low border-t border-surface-container-high space-y-4">
            <div className="space-y-2 text-on-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center justify-between">
                <span>Subtotal ({totals.count} sajian)</span>
                <span className="font-semibold text-on-surface">{formatRupiah(totals.subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>PB1 Sanitasi &amp; Layanan Resto (10%)</span>
                <span className="font-semibold text-on-surface">{formatRupiah(totals.tax)}</span>
              </div>
              {deliveryMode === 'delivery' && (
                <div className="flex items-center justify-between">
                  <span>Kurir Ramah Lingkungan</span>
                  <span className="font-semibold text-on-surface">{formatRupiah(totals.fee)}</span>
                </div>
              )}
              <div className="pt-3 border-t border-surface-container-high flex items-center justify-between text-on-surface font-title-lg text-title-lg">
                <span className="font-serif">Total Pembayaran</span>
                <span className="font-bold text-primary">{formatRupiah(totals.grandTotal)}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={clearCart}
                className="px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface-variant text-label-sm font-bold transition-all cursor-pointer"
              >
                Kosongkan
              </button>
              <button
                onClick={openCheckout}
                className="flex-1 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lanjut Pesan ({formatRupiah(totals.grandTotal)})</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
