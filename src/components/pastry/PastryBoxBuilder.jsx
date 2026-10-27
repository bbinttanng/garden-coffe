import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';

export const PastryBoxBuilder = () => {
  const [boxCapacity, setBoxCapacity] = useState(4);
  const [selectedItems, setSelectedItems] = useState([]);
  const { addToCart, openCart } = useCart();
  const { showToast } = useModals();

  const availablePastries = [
    'Pistachio Rose Cruffin',
    'Wild Lavender Kouign-Amann',
    'Almond Sourdough Croissant',
    'Elderflower Lemon Tart',
    'Smoked Beef & Emmental Danish',
    'Valrhona Chocolate Babka'
  ];

  const handleSelectCapacity = (cap) => {
    setBoxCapacity(cap);
    setSelectedItems(prev => prev.slice(0, cap));
  };

  const handleAddItem = (itemName) => {
    if (selectedItems.length < boxCapacity) {
      setSelectedItems(prev => [...prev, itemName]);
      showToast('Pastry Ditambahkan', `${itemName} masuk ke Slot #${selectedItems.length + 1} Gift Box.`);
    } else {
      showToast('Box Sudah Penuh', 'Kapasitas box penuh! Hapus salah satu pastry atau upgrade ke 6-piece box.', 'warning');
    }
  };

  const handleRemoveItem = (index) => {
    setSelectedItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClear = () => {
    setSelectedItems([]);
    showToast('Box Dikosongkan', 'Semua slot gift box telah dikosongkan.');
  };

  const handleCheckoutBox = () => {
    if (selectedItems.length === 0) return;
    const price = boxCapacity === 4 ? 175000 : 250000;
    addToCart({
      name: `Bespoke ${boxCapacity}-Piece Botanical Pastry Box`,
      price,
      category: 'Pastry Box',
      options: selectedItems.join(', '),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBUFBsbrDcjNwIPGpSJNB381UIyMV0eyjCEly4XAsmeHu4OcOnImh_t4AfgbUawopIN4sn-VJQyzdGyYYw-1OiaggK2kwSIWnL8B-hX-wx9gENe2Zoe5L_Klu5C5xiFbmc-ToCfyMQ3mupb-WnNNM21bTd7PQm0ys9Wck9B9m9f4iQPG7ELbnDA5h3SVaAqx-YB2NCUi8tP0R9s9JXJDO9my41M1tjnnwkh41L1Nb6O3qhtNNGaqlK'
    });
    showToast('Box Dimasukkan ke Keranjang', `Bespoke ${boxCapacity}-Piece Pastry Box telah masuk ke baki pesanan.`);
    openCart();
  };

  const isFull = selectedItems.length === boxCapacity;

  return (
    <section id="gift-box-builder" className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 scroll-mt-24">
      <div className="bg-surface-container rounded-3xl p-8 lg:p-12 border border-surface-container-high/80 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          {/* Left instructions & choices */}
          <div className="lg:w-5/12 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">featured_seasonal_and_gifts</span>
                <span>The Conservatory Gift House</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-serif text-primary">
                Curate Your Bespoke Pastry Box
              </h2>
              <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">
                Pilih kombinasi viennoiserie mentega Prancis, sourdough bakes, dan botanical tarts favorit Anda ke dalam kotak linen botanical eksklusif.
              </p>
            </div>

            {/* Box Size Toggle */}
            <div className="space-y-3">
              <span className="block font-label-sm text-secondary uppercase tracking-widest font-bold text-xs">
                1. Pilih Kapasitas Box
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectCapacity(4)}
                  className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    boxCapacity === 4
                      ? 'border-primary bg-surface shadow-xs ring-1 ring-primary'
                      : 'border-surface-container-high bg-surface-container hover:bg-surface-container-high'
                  }`}
                >
                  <div>
                    <h4 className="font-title-md font-bold text-primary">4-Piece Box</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">Rp 175.000</p>
                  </div>
                  <span className={`material-symbols-outlined ${boxCapacity === 4 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {boxCapacity === 4 ? 'radio_button_checked' : 'radio_button_unchecked'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectCapacity(6)}
                  className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    boxCapacity === 6
                      ? 'border-primary bg-surface shadow-xs ring-1 ring-primary'
                      : 'border-surface-container-high bg-surface-container hover:bg-surface-container-high'
                  }`}
                >
                  <div>
                    <h4 className="font-title-md font-bold text-primary">6-Piece Deluxe</h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">Rp 250.000</p>
                  </div>
                  <span className={`material-symbols-outlined ${boxCapacity === 6 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {boxCapacity === 6 ? 'radio_button_checked' : 'radio_button_unchecked'}
                  </span>
                </button>
              </div>
            </div>

            {/* Pastry Selector Pills */}
            <div className="space-y-3">
              <span className="block font-label-sm text-secondary uppercase tracking-widest font-bold text-xs">
                2. Pilih Varian Pastry Untuk Dimasukkan
              </span>
              <div className="flex flex-wrap gap-2">
                {availablePastries.map((pName) => (
                  <button
                    key={pName}
                    type="button"
                    onClick={() => handleAddItem(pName)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface hover:bg-primary hover:text-on-primary border border-surface-container-high font-label-sm text-[12px] text-on-surface transition-all cursor-pointer group"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary group-hover:text-on-primary">add</span>
                    <span>{pName}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Box Chamber */}
          <div className="lg:w-7/12 bg-surface rounded-2xl p-6 lg:p-8 border border-surface-container-high space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
              <div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-widest font-bold">
                  Bespoke Packaging
                </span>
                <h3 className="font-headline-sm text-title-lg font-serif text-primary">
                  {selectedItems.length} dari {boxCapacity} Pastry Terisi
                </h3>
              </div>
              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="font-label-sm text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 text-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">delete_sweep</span>
                  <span>Kosongkan</span>
                </button>
              )}
            </div>

            {/* Slots Grid */}
            <div className={`grid gap-4 ${boxCapacity === 4 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {Array.from({ length: boxCapacity }).map((_, i) => {
                const item = selectedItems[i];
                return (
                  <div
                    key={i}
                    className={`aspect-[4/3] rounded-xl p-3 flex flex-col justify-between relative transition-all ${
                      item
                        ? 'bg-secondary-container/30 border border-secondary/20 shadow-sm'
                        : 'bg-surface-container border border-dashed border-outline-variant flex items-center justify-center'
                    }`}
                  >
                    {item ? (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <span className="font-label-sm text-[11px] text-secondary font-bold">
                            Slot #{i + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(i)}
                            className="text-on-surface-variant hover:text-error transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">close</span>
                          </button>
                        </div>
                        <p className="font-label-md text-label-md text-on-surface font-semibold line-clamp-2 my-auto">
                          {item}
                        </p>
                        <span className="text-[11px] text-on-surface-variant">Siap dikemas</span>
                      </>
                    ) : (
                      <div className="text-center p-2">
                        <span className="material-symbols-outlined text-outline text-xl mb-1">add_circle_outline</span>
                        <p className="font-label-sm text-label-sm text-on-surface-variant">
                          Slot {i + 1} Kosong
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Order Action Button */}
            <div className="pt-2">
              <button
                type="button"
                disabled={!isFull}
                onClick={handleCheckoutBox}
                className={`w-full py-4 rounded-xl font-label-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  isFull
                    ? 'bg-primary hover:bg-primary-container text-on-primary shadow-md hover:shadow-lg cursor-pointer'
                    : 'bg-primary/40 text-on-primary/70 cursor-not-allowed'
                }`}
              >
                <span className="material-symbols-outlined text-lg">redeem</span>
                <span>
                  {isFull
                    ? `Pesan Box Kurasi (Rp ${boxCapacity === 4 ? '175.000' : '250.000'})`
                    : `Pilih ${boxCapacity - selectedItems.length} pastry lagi untuk melengkapi box`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
