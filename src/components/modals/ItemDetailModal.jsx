import React from 'react';
import { Icon } from '../ui/Icon';
import { useModals } from '../../context/ModalContext';

export const ItemDetailModal = () => {
  const { isDetailOpen, selectedItem, closeItemModal, openReservationModal } = useModals();

  if (!isDetailOpen || !selectedItem) return null;

  const formatRupiah = (val) => 'Rp ' + Number(val).toLocaleString('id-ID');

  const getPreparationNote = () => {
    if (selectedItem.category === 'Coffee') {
      return 'Diseduh segar dari biji pilihan sangrai terkontrol. Anda dapat menyesuaikan preferensi suhu (dingin/hangat) dan level kemanisan saat dilayani di meja suaka.';
    }
    if (selectedItem.category === 'Food') {
      return 'Diracik dari hasil panen bumi segar petani binaan lokal Jawa Barat & Bali, dimasak menggunakan tungku api alami saat Anda memesan di lokasi.';
    }
    return 'Dipanggang segar setiap fajar dengan teknik fermentasi lambat 48 jam dan mentega murni Prancis 84% fat demi kerenyahan lapisan sempurna.';
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
                  {selectedItem.subcategory || selectedItem.origin || selectedItem.category}
                </span>
                <button
                  type="button"
                  onClick={closeItemModal}
                  className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary flex items-center justify-center cursor-pointer"
                  title="Tutup Modal"
                >
                  <Icon name="close" className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-headline-sm text-headline-sm font-serif text-primary mt-1">
                {selectedItem.name}
              </h3>

              <p className="font-title-lg text-2xl font-serif font-bold text-primary mt-1">
                {formatRupiah(selectedItem.price)}
              </p>

              <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.notes && (
                <div className="mt-3.5 p-3 rounded-xl bg-surface-container/70 border border-surface-container-high flex items-start gap-2.5">
                  <Icon name="spa" className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    <strong className="text-on-surface">Karakter Rasa / Pairing:</strong> {selectedItem.notes}
                  </span>
                </div>
              )}

              <div className="mt-3 p-3 rounded-xl bg-surface-container-low border border-surface-container-high/60 flex items-start gap-2.5">
                <Icon name="info" className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-[11.5px] text-on-surface-variant/90 leading-relaxed">
                  {getPreparationNote()}
                </p>
              </div>
            </div>

            {/* Bottom Modal Actions */}
            <div className="pt-4 border-t border-surface-container-high flex items-center gap-3">
              <button
                type="button"
                onClick={closeItemModal}
                className="px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md font-bold text-xs transition-all cursor-pointer"
              >
                Tutup Menu
              </button>
              <button
                type="button"
                onClick={() => {
                  closeItemModal();
                  openReservationModal();
                }}
                className="flex-1 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icon name="event" className="w-4 h-4 text-primary-fixed" />
                <span>Reservasi Meja Suaka</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
