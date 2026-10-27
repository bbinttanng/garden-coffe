import React from 'react';
import { useModals } from '../../context/ModalContext';
import { useCart } from '../../context/CartContext';

export const ReceiptModal = () => {
  const { isReceiptOpen, closeReceipt, latestOrder } = useModals();
  const { formatRupiah } = useCart();

  if (!isReceiptOpen || !latestOrder) return null;

  const handleWhatsApp = () => {
    let text = `Halo Garden Coffee & Eatery! 🌿\n\nSaya ingin konfirmasi pesanan saya:\n*Order ID:* ${latestOrder.orderId}\n*Nama:* ${latestOrder.name}\n*No. HP:* ${latestOrder.phone}\n*Layanan:* ${latestOrder.mode} (${latestOrder.location})\n*Metode Pembayaran:* ${latestOrder.paymentMethod}\n\n*Rincian Sajian:*\n`;
    latestOrder.items.forEach((i) => {
      text += `- ${i.quantity}x ${i.name} (${formatRupiah(i.price * i.quantity)})\n`;
    });
    text += `\n*Total:* ${formatRupiah(latestOrder.grandTotal)}\n*Catatan:* ${latestOrder.notes || '-'}\n\nMohon dipersiapkan. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-surface rounded-3xl max-w-md w-full p-6 lg:p-8 botanical-modal-shadow border border-surface-container-high text-center space-y-6 animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container mx-auto flex items-center justify-center animate-bounce">
          <span className="material-symbols-outlined text-3xl">check_circle</span>
        </div>

        <div>
          <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">Terima Kasih</span>
          <h3 className="font-headline-sm text-headline-sm font-serif text-primary mt-1">
            Pesanan Anda Disiapkan
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
            Nomor Pesanan: <strong className="text-primary font-mono font-bold">{latestOrder.orderId}</strong>
          </p>
        </div>

        <div className="bg-surface-container rounded-2xl p-4 text-left font-body-sm space-y-2 text-on-surface-variant">
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Pelanggan:</span>
            <strong className="text-on-surface">{latestOrder.name}</strong>
          </div>
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Layanan:</span>
            <strong className="text-on-surface capitalize">{latestOrder.mode} ({latestOrder.location})</strong>
          </div>
          <div className="flex justify-between border-b border-surface-container-high pb-2">
            <span>Pembayaran:</span>
            <strong className="text-primary">{latestOrder.paymentMethod} (Diproses)</strong>
          </div>
          <div className="pt-1">
            <span className="block text-[11px] uppercase tracking-wider text-secondary font-bold mb-1">
              Daftar Sajian:
            </span>
            <ul className="space-y-1 text-[13px] text-on-surface">
              {latestOrder.items.map((i, idx) => (
                <li key={idx}>
                  • {i.quantity}x {i.name} ({formatRupiah(i.price * i.quantity)})
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t border-surface-container-high flex justify-between font-bold text-primary">
            <span>Total:</span>
            <span>{formatRupiah(latestOrder.grandTotal)}</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={handleWhatsApp}
            className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-label-md font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Kirim Konfirmasi WhatsApp</span>
          </button>
          <button
            onClick={closeReceipt}
            className="w-full py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md font-semibold transition-all cursor-pointer"
          >
            Kembali ke Menu
          </button>
        </div>
      </div>
    </div>
  );
};
