import React, { useState, useEffect } from 'react';
import { useModals } from '../../context/ModalContext';
import { Icon } from '../ui/Icon';

export const TableReservationModal = () => {
  const { isReservationOpen, selectedStoreForReservation, closeReservationModal, showToast } = useModals();

  const [store, setStore] = useState('Senopati Conservatory Sanctuary');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('18:00 WIB');
  const [guests, setGuests] = useState('2 Tamu');
  const [area, setArea] = useState('Kubah Kaca Tropis');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  useEffect(() => {
    if (selectedStoreForReservation) {
      setStore(selectedStoreForReservation);
    }
  }, [selectedStoreForReservation]);

  if (!isReservationOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*RESERVASI MEJA SUAKA GARDEN COFFEE* 🌿\n` +
      `===================================\n` +
      `*Outlet:* ${store}\n` +
      `*Nama Pemesan:* ${name}\n` +
      `*No. WhatsApp:* ${phone}\n` +
      `*Tanggal:* ${date}\n` +
      `*Waktu Kunjungan:* ${time}\n` +
      `*Jumlah Tamu:* ${guests}\n` +
      `*Preferensi Area:* ${area}\n` +
      (specialRequest ? `*Catatan Khusus:* ${specialRequest}\n` : '') +
      `===================================\n` +
      `Mohon konfirmasi ketersediaan meja kami. Terima kasih!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');

    closeReservationModal();
    showToast(
      'Reservasi Dialihkan ke WhatsApp',
      `Membuka WhatsApp untuk mengirim data meja Anda di ${store.split(' ')[0]}.`,
      'check'
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={closeReservationModal} className="fixed inset-0" />

      <div className="relative bg-surface rounded-3xl max-w-lg w-full p-6 lg:p-8 botanical-modal-shadow border border-surface-container-high space-y-6 z-10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Garden Coffee Brand Mark"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">
                Meja Konservatori
              </span>
              <h3 className="font-headline-sm text-title-lg font-serif text-primary mt-0.5">
                Reservasi Meja Suaka Rumah Kaca
              </h3>
            </div>
          </div>
          <button
            onClick={closeReservationModal}
            className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer transition-colors"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
              Pilih Lokasi Suaka
            </label>
            <select
              value={store}
              onChange={(e) => setStore(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-sm"
            >
              <option value="Senopati Conservatory Sanctuary">Senopati Conservatory Sanctuary (Jakarta Selatan)</option>
              <option value="Menteng Heritage Glasshouse">Menteng Heritage Glasshouse (Jakarta Pusat)</option>
              <option value="BSD Green Terrace & Drive-Thru">BSD Green Terrace &amp; Drive-Thru (Tangerang)</option>
              <option value="Bandung Pine Hills Sanctuary">Bandung Pine Hills Sanctuary (Dago Atas)</option>
              <option value="Canggu Eco-Pavilion Bali">Canggu Eco-Pavilion Bali (Canggu)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
                Tanggal
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
                Waktu Kunjungan
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-sm"
              >
                <option value="10:00 WIB">10:00 WIB (Morning Brew)</option>
                <option value="13:00 WIB">13:00 WIB (Lunch Garden)</option>
                <option value="16:00 WIB">16:00 WIB (Afternoon Tea)</option>
                <option value="19:00 WIB">19:00 WIB (Evening Ambient)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
                Jumlah Tamu
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-sm"
              >
                <option value="1 Tamu">1 Tamu (Solo Focus)</option>
                <option value="2 Tamu">2 Tamu (Duo Table)</option>
                <option value="3-4 Tamu">3 - 4 Tamu (Small Group)</option>
                <option value="5-8 Tamu">5 - 8 Tamu (Family / Gathering)</option>
                <option value="> 8 Tamu">&gt; 8 Tamu (Private Event)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
                Area Duduk
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-sm"
              >
                <option value="Kubah Kaca Tropis">Kubah Kaca Indoor</option>
                <option value="Outdoor Pet Friendly">Outdoor Ramah Hewan</option>
                <option value="Bar Pour Over Geisha">Bar Meja Barista</option>
                <option value="Private Glass Studio">Private Studio Meeting</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
                Nama Pemesan
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap"
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
                No. WhatsApp
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5 font-bold text-xs">
              Catatan Khusus (Opsional)
            </label>
            <input
              type="text"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="Cth: Bawa anabul leashed, ulang tahun, kursi bayi..."
              className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-label-md font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <Icon name="whatsapp" className="w-5 h-5 text-white" />
              <span>Kirim Reservasi Langsung ke WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-on-surface-variant">
              Reservasi Anda akan langsung diteruskan ke tim resepsionis cabang suaka.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
