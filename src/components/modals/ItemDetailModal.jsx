import React, { useState } from 'react';
import { useModals } from '../../context/ModalContext';
import { useCart } from '../../context/CartContext';

export const ItemDetailModal = () => {
  const { isDetailOpen, selectedItem, closeItemModal, showToast } = useModals();
  const { addToCart, formatRupiah } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedTemp, setSelectedTemp] = useState('Iced');
  const [selectedSweetness, setSelectedSweetness] = useState('Normal Sweet');

  if (!isDetailOpen || !selectedItem) return null;

  const handleAddToCart = () => {
    let options = [];
    if (selectedItem.category === 'Coffee') {
      options.push(selectedTemp);
      options.push(selectedSweetness);
    }

    addToCart({
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      image: selectedItem.image,
      category: selectedItem.category,
      options: options.length ? options.join(' • ') : null,
      quantity
    });

    showToast('Pesanan Ditambahkan', `${selectedItem.name} (${quantity}x) berhasil masuk ke baki.`);
    closeItemModal();
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={closeItemModal} className="fixed inset-0" />

      <div className="relative bg-surface rounded-3xl max-w-2xl w-full p-6 lg:p-8 botanical-modal-shadow border border-surface-container-high max-h-[92vh] overflow-y-auto z-10 animate-in zoom-in-95 duration-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Image */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-surface-container-high aspect-square md:aspect-auto">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-primary/90 text-on-primary text-[11px] font-bold tracking-wider uppercase backdrop-blur-xs">
                {selectedItem.category}
              </span>
              {selectedItem.roast && (
                <span className="px-2.5 py-1 rounded-full bg-surface/90 text-primary text-[11px] font-bold backdrop-blur-xs">
                  {selectedItem.roast} Roast
                </span>
              )}
            </div>
          </div>

          {/* Right Config */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-secondary uppercase tracking-widest font-bold text-xs">
                  {selectedItem.subcategory || selectedItem.origin}
                </span>
                <button
                  onClick={closeItemModal}
                  className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-serif text-primary mt-1">
                {selectedItem.name}
              </h3>
              <p className="font-title-lg text-title-lg font-bold text-primary mt-1">
                {formatRupiah(selectedItem.price)}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2.5 leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.notes && (
                <div className="mt-3 p-3 rounded-xl bg-surface-container/60 border border-surface-container-high flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">spa</span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    <strong className="text-on-surface">Sensory Notes:</strong> {selectedItem.notes}
                  </span>
                </div>
              )}
            </div>

            {/* Options if Coffee */}
            {selectedItem.category === 'Coffee' && (
              <div className="space-y-3 pt-2 border-t border-surface-container-high">
                <div>
                  <label className="block font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5">
                    Suhu Seduhan
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-center font-label-sm font-semibold">
                    {[
                      { id: 'Iced', label: 'Dingin (Iced & Refreshing)' },
                      { id: 'Hot', label: 'Hangat (Hot & Fragrant)' }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTemp(t.id)}
                        className={`py-2 rounded-lg transition-all cursor-pointer ${
                          selectedTemp === t.id
                            ? 'bg-primary text-on-primary shadow-xs font-bold'
                            : 'bg-surface-container text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider mb-1.5">
                    Tingkat Kemanisan
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-center font-label-sm text-[12px]">
                    {[
                      { id: 'Normal Sweet', label: 'Normal' },
                      { id: 'Less Sweet (50%)', label: 'Less (50%)' },
                      { id: 'No Sugar (0%)', label: 'Tanpa Gula' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSweetness(s.id)}
                        className={`py-1.5 rounded-lg transition-all cursor-pointer ${
                          selectedSweetness === s.id
                            ? 'bg-primary text-on-primary font-bold'
                            : 'bg-surface-container text-on-surface-variant hover:text-primary font-medium'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add Button */}
            <div className="pt-3 border-t border-surface-container-high flex items-center gap-4">
              <div className="flex items-center gap-3 bg-surface-container rounded-xl p-1.5 border border-surface-container-high">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="font-label-md font-bold w-6 text-center text-primary">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">local_mall</span>
                <span>Tambah ke Baki Pesanan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
