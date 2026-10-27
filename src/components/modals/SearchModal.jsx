import React, { useState } from 'react';
import { useModals } from '../../context/ModalContext';
import { useCart } from '../../context/CartContext';
import { GARDEN_CATALOG } from '../../data/catalog';
import { SANCTUARIES } from '../../data/stores';

export const SearchModal = ({ setActivePage }) => {
  const { isSearchOpen, closeSearch, openItemModal, openReservationModal } = useModals();
  const { addToCart, formatRupiah } = useCart();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  if (!isSearchOpen) return null;

  const allItems = [
    ...GARDEN_CATALOG,
    ...SANCTUARIES
  ];

  const filtered = allItems.filter(item => {
    const matchCat = activeCategory === 'all' || item.category.toLowerCase() === activeCategory.toLowerCase();
    const q = query.toLowerCase().trim();
    if (!q) return matchCat;

    const matchName = item.name?.toLowerCase().includes(q);
    const matchNotes = item.notes?.toLowerCase().includes(q);
    const matchOrigin = item.origin?.toLowerCase().includes(q);
    const matchDesc = item.description?.toLowerCase().includes(q);
    const matchAddr = item.address?.toLowerCase().includes(q);

    return matchCat && (matchName || matchNotes || matchOrigin || matchDesc || matchAddr);
  });

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24">
      {/* Backdrop */}
      <div onClick={closeSearch} className="fixed inset-0" />

      <div className="relative bg-surface rounded-3xl max-w-2xl w-full botanical-modal-shadow border border-surface-container-high overflow-hidden flex flex-col max-h-[80vh] z-10 animate-in zoom-in-95 duration-200">
        {/* Search Input Header */}
        <div className="p-4 sm:p-6 bg-surface-container-low border-b border-surface-container-high flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-primary">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari kopi, makanan, pastry, atau lokasi sanctuary..."
            className="flex-1 bg-transparent font-title-lg text-title-md sm:text-title-lg text-on-surface placeholder-on-surface-variant/60 focus:outline-none"
          />
          <button
            onClick={closeSearch}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Filter Category Tabs */}
        <div className="px-4 sm:px-6 py-2.5 bg-surface-container/40 border-b border-surface-container flex items-center gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'Semua' },
            { id: 'coffee', label: 'Coffee' },
            { id: 'food', label: 'Food' },
            { id: 'pastry', label: 'Pastry' },
            { id: 'store', label: 'Sanctuary Stores' }
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-label-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-primary text-on-primary font-bold shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary font-semibold'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-on-surface-variant space-y-3">
              <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
              <p className="font-body-md">
                Tidak ada menu atau lokasi yang cocok dengan "<strong>{query}</strong>"
              </p>
              <p className="font-body-sm text-[12px]">
                Coba cari "Geisha", "Croissant", "Truffle", "Senopati", atau "Cold Brew"
              </p>
            </div>
          ) : (
            filtered.map((item) => {
              if (item.category === 'Store') {
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-surface-container/50 hover:bg-surface-container transition-all border border-surface-container-high/60 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-2xl">potted_plant</span>
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-sm text-[11px] text-secondary font-bold uppercase tracking-wider">
                          {item.subcategory}
                        </span>
                        <h4 className="font-title-md text-title-md font-serif text-primary truncate">
                          {item.name}
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant truncate">
                          {item.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          closeSearch();
                          openReservationModal(item.name);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container-highest text-primary font-label-sm font-bold border border-surface-container-high text-xs transition-all cursor-pointer"
                      >
                        Reservasi
                      </button>
                      <button
                        onClick={() => {
                          closeSearch();
                          setActivePage('lokasi');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm font-bold text-xs transition-all cursor-pointer"
                      >
                        Buka
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-surface-container/50 hover:bg-surface-container transition-all border border-surface-container-high/60 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-surface-container-high shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-[11px] text-secondary font-bold uppercase tracking-wider">
                          {item.subcategory || item.category}
                        </span>
                        {item.roast && (
                          <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-[10px] text-on-surface-variant font-mono">
                            {item.roast}
                          </span>
                        )}
                      </div>
                      <h4 className="font-title-md text-title-md font-serif text-primary truncate">
                        {item.name}
                      </h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant truncate">
                        {item.notes || item.origin}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-label-md text-primary font-bold text-sm hidden sm:inline-block">
                      {formatRupiah(item.price)}
                    </span>
                    <button
                      onClick={() => {
                        closeSearch();
                        openItemModal(item);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container-highest text-primary font-label-sm font-bold border border-surface-container-high text-xs transition-all cursor-pointer"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          category: item.category
                        });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm font-bold text-xs transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                      <span className="hidden sm:inline">Pesan</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-surface-container-low border-t border-surface-container-high/80 px-6 flex items-center justify-between text-[11px] text-on-surface-variant font-label-sm">
          <span>Tips: Ketik nama rasa (seperti <em>"honey"</em> atau <em>"truffle"</em>)</span>
          <span className="hidden sm:inline">
            Tekan <kbd className="px-1.5 py-0.5 rounded bg-surface-container-high font-mono text-primary font-bold">ESC</kbd> untuk menutup
          </span>
        </div>
      </div>
    </div>
  );
};
