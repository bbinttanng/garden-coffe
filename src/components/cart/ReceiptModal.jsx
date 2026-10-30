import React from 'react';
import { useModals } from '../../context/ModalContext';
import { useCart } from '../../context/CartContext';
import { Icon } from '../ui/Icon';

export const ReceiptModal = () => {
  const { isReceiptOpen, closeReceipt, latestOrder } = useModals();
  const { formatRupiah } = useCart();

  if (!isReceiptOpen || !latestOrder) return null;

  const handleWhatsApp = () => {
    let text = `*PESANAN GARDEN COFFEE & EATERY* 🌿\n`;
    text += `================================\n`;
    text += `*No. Pesanan:* ${latestOrder.orderId}\n`;
    text += `*Outlet Tujuan:* ${latestOrder.store || 'Senopati'}\n`;
    text += `*Nama Tamu:* ${latestOrder.name}\n`;
    text += `*WhatsApp:* ${latestOrder.phone}\n`;
    text += `*Layanan:* ${latestOrder.mode?.toUpperCase()} (${latestOrder.location})\n`;
    text += `*Metode Bayar:* ${latestOrder.paymentMethod}\n`;
    text += `================================\n\n`;
    text += `*Rincian Sajian:*\n`;

    latestOrder.items.forEach((item, index) => {
      text += `${index + 1}. ${item.quantity}x ${item.name} (${formatRupiah(item.price * item.quantity)})\n`;
      if (item.options) text += `   _Detail: ${item.options}_\n`;
    });

    text += `\n*Total Bayar:* ${formatRupiah(latestOrder.grandTotal)}\n`;
    if (latestOrder.notes) {
      text += `*Catatan:* ${latestOrder.notes}\n`;
    }
    text += `\nMohon konfirmasi pesanan saya ya barista. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    // Direct WhatsApp send
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-surface rounded-3xl max-w-md w-full p-6 lg:p-8 botanical-modal-shadow border border-surface-container-high text-center space-y-6 animate-in zoom-in-95 duration-200">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/logo.png"
            alt="Garden Coffee Brand Mark"
            className="w-14 h-14 object-contain mx-auto drop-shadow-xs"
          />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-primary text-xs font-bold uppercase tracking-wider">
            <Icon name="check_circle" className="w-4 h-4 text-primary" />
            <span>Pesanan Terdaftar Resmi</span>
          </div>
        </div>

        <div>
          <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">Pesanan Terdaftar</span>
          <h3 className="font-headline-sm text-headline-sm font-serif text-primary mt-1">
            Siap Dikirim ke Barista
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
            Nomor Tiket: <strong className="text-primary font-mono font-bold">{latestOrder.orderId}</strong>
          </p>
        </div>

        <div className="bg-surface-container rounded-2xl p-4 text-left font-body-sm space-y-2 text-on-surface-variant border border-surface-container-high">
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Outlet Suaka:</span>
            <strong className="text-primary truncate max-w-[190px]">{latestOrder.store || 'Senopati'}</strong>
          </div>
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Pemesan:</span>
            <strong className="text-on-surface">{latestOrder.name} ({latestOrder.phone})</strong>
          </div>
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Layanan:</span>
            <strong className="text-on-surface capitalize">{latestOrder.mode} ({latestOrder.location})</strong>
          </div>
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Pembayaran:</span>
            <strong className="text-primary">{latestOrder.paymentMethod}</strong>
          </div>
          <div className="pt-1">
            <span className="block text-[11px] uppercase tracking-wider text-secondary font-bold mb-1">
              Rincian Menu:
            </span>
            <ul className="space-y-1 text-xs text-on-surface">
              {latestOrder.items.map((i, idx) => (
                <li key={idx}>
                  • {i.quantity}x {i.name} ({formatRupiah(i.price * i.quantity)})
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t border-surface-container-high flex justify-between font-bold text-primary text-base">
            <span>Total Akhir:</span>
            <span>{formatRupiah(latestOrder.grandTotal)}</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-label-md font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Icon name="whatsapp" className="w-5 h-5 text-white" />
            <span>Kirim Pesanan ke WhatsApp Barista</span>
          </button>

          <button
            type="button"
            onClick={closeReceipt}
            className="w-full py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md font-semibold transition-all cursor-pointer text-sm"
          >
            Tutup &amp; Kembali ke Menu
          </button>
        </div>
      </div>
    </div>
  );
};
