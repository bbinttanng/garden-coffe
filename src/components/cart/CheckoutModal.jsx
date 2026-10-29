import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';
import { Icon } from '../ui/Icon';

export const CheckoutModal = () => {
  const { cart, deliveryMode, totals, formatRupiah, clearCart } = useCart();
  const { isCheckoutOpen, closeCheckout, openReceipt } = useModals();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [store, setStore] = useState('Senopati Conservatory Sanctuary');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('QRIS Instant');
  const [notes, setNotes] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = `#GC-${Math.floor(10000 + Math.random() * 90000)}`;

    const orderData = {
      orderId,
      name: name || 'Tamu Suaka',
      phone,
      store,
      mode: deliveryMode,
      location: location || (deliveryMode === 'dine-in' ? 'Meja Terbuka' : 'Ambil Langsung'),
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
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Garden Coffee Brand Mark"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">
                Konfirmasi Pemesanan
              </span>
              <h3 className="font-headline-sm text-title-lg font-serif text-primary mt-0.5">
                Selesaikan Pesanan Suaka
              </h3>
            </div>
          </div>
          <button
            onClick={closeCheckout}
            className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer transition-colors"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold">
              Pilih Cabang Suaka Terdekat
            </label>
            <select
              value={store}
              onChange={(e) => setStore(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              <option value="Senopati Conservatory Sanctuary">Senopati Conservatory Sanctuary (Jakarta Selatan)</option>
              <option value="Menteng Heritage Glasshouse">Menteng Heritage Glasshouse (Jakarta Pusat)</option>
              <option value="BSD Green Terrace & Drive-Thru">BSD Green Terrace &amp; Drive-Thru (Tangerang)</option>
              <option value="Bandung Pine Hills Sanctuary">Bandung Pine Hills Sanctuary (Dago Atas)</option>
              <option value="Canggu Eco-Pavilion Bali">Canggu Eco-Pavilion Bali (Canggu)</option>
            </select>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold">
              Nama Pemesan
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold">
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
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold">
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
                    ? 'Alamat lengkap & detail'
                    : deliveryMode === 'takeaway'
                    ? 'Cth. Pukul 15:00 WIB'
                    : 'Cth. Meja 07 / Bar'
                }
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold">
              Pilihan Pembayaran
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'QRIS Instant', label: 'QRIS Barista' },
                { id: 'Transfer VA', label: 'Virtual Account' },
                { id: 'Bayar di Kasir', label: 'Kasir / Tunai' }
              ].map((m) => {
                const isSelected = paymentMethod === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-3 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-2 border-primary bg-primary/10 text-primary font-bold'
                        : 'border border-surface-container-high bg-surface-container hover:bg-surface-container-highest text-on-surface-variant'
                    }`}
                  >
                    <Icon name={isSelected ? "check_circle" : "radio_button_unchecked"} className="w-4 h-4 text-primary" />
                    <span className="font-label-sm text-xs font-semibold">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold">
              Catatan untuk Barista (Opsional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Cth: Kurangi es batu, pisahkan saus, dll."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>

          <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between font-bold text-primary border border-surface-container-high/80">
            <span>Total Pembayaran:</span>
            <span className="text-lg">{formatRupiah(totals.grandTotal)}</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kirim &amp; Buat Struk Pesanan</span>
            <Icon name="arrow_forward" className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
