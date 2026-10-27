import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';

export const CheckoutModal = () => {
  const { cart, deliveryMode, totals, formatRupiah, clearCart } = useCart();
  const { isCheckoutOpen, closeCheckout, openReceipt } = useModals();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('QRIS');
  const [notes, setNotes] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = `#GC-${Math.floor(10000 + Math.random() * 90000)}`;

    const orderData = {
      orderId,
      name: name || 'Tamu Sanctuary',
      phone,
      mode: deliveryMode,
      location: location || 'Area Konservatori',
      paymentMethod,
      notes,
      items: [...cart],
      grandTotal: totals.grandTotal,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    clearCart();
    openReceipt(orderData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-surface rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto botanical-modal-shadow border border-surface-container-high p-6 lg:p-8 space-y-6 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
          <div>
            <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">
              Konfirmasi Pemesanan
            </span>
            <h3 className="font-headline-sm text-title-lg font-serif text-primary mt-0.5">
              Selesaikan Pesanan Sanctuary
            </h3>
          </div>
          <button
            onClick={closeCheckout}
            className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
              Nama Pemesan
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama lengkap Anda"
              className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                No. WhatsApp
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                {deliveryMode === 'delivery'
                  ? 'Alamat Pengantaran'
                  : deliveryMode === 'takeaway'
                  ? 'Waktu Ambil'
                  : 'Nomor Meja'}
              </label>
              <input
                type="text"
                required={deliveryMode === 'delivery'}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={
                  deliveryMode === 'delivery'
                    ? 'Alamat lengkap & detail area'
                    : deliveryMode === 'takeaway'
                    ? 'Cth. Pukul 15:00 WIB'
                    : 'Cth. Meja 07 / Bar Konservatori'
                }
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
              Metode Pembayaran
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'QRIS', label: 'QRIS Instant', icon: 'qr_code_2' },
                { id: 'Virtual Account', label: 'Virtual Acc.', icon: 'account_balance' },
                { id: 'Kartu Kredit', label: 'Kartu / CC', icon: 'credit_card' }
              ].map((m) => {
                const isSelected = paymentMethod === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-3 rounded-xl text-center flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      isSelected
                        ? 'border border-primary bg-primary/5 text-primary'
                        : 'border border-surface-container-high bg-surface-container hover:bg-surface-container-highest text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{m.icon}</span>
                    <span className="font-label-sm text-[12px] font-bold">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Catatan ke barista atau juru masak..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container-high/60 space-y-2">
            <div className="flex justify-between font-label-sm text-on-surface-variant">
              <span>Item dipesan ({totals.count}):</span>
              <span className="font-bold text-on-surface">{formatRupiah(totals.subtotal)}</span>
            </div>
            <div className="flex justify-between font-label-sm text-on-surface-variant">
              <span>Pajak Restoran &amp; Layanan:</span>
              <span className="font-bold text-on-surface">{formatRupiah(totals.tax + totals.fee)}</span>
            </div>
            <div className="pt-2 border-t border-surface-container-high/80 flex justify-between font-title-md text-primary">
              <span className="font-serif font-bold">Total Akhir:</span>
              <span className="font-bold font-mono text-lg">{formatRupiah(totals.grandTotal)}</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Konfirmasi &amp; Bayar Sekarang</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
