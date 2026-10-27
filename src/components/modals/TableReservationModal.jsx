import React, { useState, useEffect } from 'react';
import { useModals } from '../../context/ModalContext';

export const TableReservationModal = () => {
  const { isReservationOpen, selectedStoreForReservation, closeReservationModal, showToast } = useModals();

  const [store, setStore] = useState('Senopati Conservatory Sanctuary');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('18:00 WIB');
  const [guests, setGuests] = useState('2 Tamu');
  const [area, setArea] = useState('Kubah Kaca Tropis');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (selectedStoreForReservation) {
      setStore(selectedStoreForReservation);
    }
  }, [selectedStoreForReservation]);

  if (!isReservationOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    closeReservationModal();
    showToast(
      'Reservasi Terkirim',
      `Terima kasih ${name || 'Tamu'}, meja Anda di ${store} (${date}, ${time}) telah terkonfirmasi.`,
      'event_seat'
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={closeReservationModal} className="fixed inset-0" />

      <div className="relative bg-surface rounded-3xl max-w-lg w-full p-6 lg:p-8 botanical-modal-shadow border border-surface-container-high space-y-6 z-10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
          <div>
            <span className="font-label-sm text-secondary uppercase tracking-widest font-bold">
              Meja Konservatori
            </span>
            <h3 className="font-headline-sm text-title-lg font-serif text-primary mt-0.5">
              Reservasi Sanctuary Garden
            </h3>
          </div>
          <button
            onClick={closeReservationModal}
            className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
              Pilih Lokasi Sanctuary
            </label>
            <select
              value={store}
              onChange={(e) => setStore(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md border border-transparent focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
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
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                Tanggal
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                Waktu Kunjungan
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
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
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                Jumlah Tamu
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="1-2 Tamu">1 - 2 Tamu (Intimate)</option>
                <option value="3-4 Tamu">3 - 4 Tamu (Small Group)</option>
                <option value="5-8 Tamu">5 - 8 Tamu (Family Table)</option>
                <option value="8+ Tamu">8+ Tamu (Private Gathering)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                Area Favorit
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="Kubah Kaca Tropis">Kubah Kaca Tropis</option>
                <option value="Slow Coffee Bar">Slow Coffee Bar</option>
                <option value="Taman Terbuka / Pet Friendly">Taman Terbuka (Pet-Friendly)</option>
                <option value="Indoor AC Nyaman">Indoor AC Nyaman</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                Nama Pemesan
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama lengkap Anda"
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                No. WhatsApp
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 rounded-xl bg-surface-container text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">check_circle</span>
              <span>Kirim Permintaan Reservasi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
