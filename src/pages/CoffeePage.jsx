import { Icon } from '../components/ui/Icon';
import React, { useState, useEffect } from 'react';
import { useModals } from '../context/ModalContext';
import { GARDEN_CATALOG } from '../data/catalog';

export const CoffeePage = () => {
  const { openItemModal } = useModals();
  const formatRupiah = (val) => 'Rp ' + Number(val).toLocaleString('id-ID');

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRoast, setActiveRoast] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const coffeeItems = GARDEN_CATALOG.filter(item => item.category === 'Coffee');

  // Auto running motion from right to left (slides advance periodically)
  useEffect(() => {
    if (isPaused || coffeeItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coffeeItems.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, coffeeItems.length]);

  const categories = [
    { id: 'all', label: 'All Roasts & Brews' },
    { id: 'espresso', label: 'Handcrafted Espresso' },
    { id: 'coldbrew', label: 'Cold Brew & Nitro Draft' },
    { id: 'pourover', label: 'Pour Over & Single Origin' },
    { id: 'botanical', label: 'Botanical Infused Sip' },
    { id: 'beans', label: 'Whole Bean Reserves' }
  ];

  const filteredCoffees = coffeeItems.filter(item => {
    const cats = (item.subcategory || '').toLowerCase();
    const roast = (item.roast || '').toLowerCase();
    const text = (item.name + ' ' + (item.notes || '') + ' ' + (item.origin || '')).toLowerCase();

    let matchCat = true;
    if (activeCategory === 'espresso') matchCat = cats.includes('espresso');
    else if (activeCategory === 'coldbrew') matchCat = cats.includes('cold brew') || cats.includes('nitro');
    else if (activeCategory === 'pourover') matchCat = cats.includes('pour-over') || cats.includes('single-origin');
    else if (activeCategory === 'botanical') matchCat = cats.includes('botanical') || item.tags?.includes('Botanical');
    else if (activeCategory === 'beans') matchCat = cats.includes('single-origin') || cats.includes('reserve');

    const matchRoast = activeRoast === 'all' || roast.includes(activeRoast.toLowerCase());
    const matchQuery = !searchQuery || text.includes(searchQuery.toLowerCase().trim());

    return matchCat && matchRoast && matchQuery;
  });



  return (
    <div className="flex flex-col w-full">
      {/* Full-Width Featured Coffee Motion Slider */}
      <section className="relative w-full bg-surface-container-low py-8 lg:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden shadow-xl bg-surface border border-surface-container-high group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Track (Running motion right to left) */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {coffeeItems.map((item, idx) => {
                const notesList = (item.notes || '')
                  .split(',')
                  .map((n) => n.trim())
                  .filter(Boolean)
                  .slice(0, 4);

                return (
                  <div
                    key={item.id}
                    className="w-full shrink-0 p-6 sm:p-8 lg:p-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      {/* Full Coffee Image with Badges */}
                      <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container-high shadow-xs">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] font-mono font-medium backdrop-blur-xs">
                          {idx + 1} / {coffeeItems.length}
                        </span>
                      </div>

                      {/* Coffee Info & Description */}
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-snug">
                            {item.name}
                          </h2>
                          <p className="font-sans text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
                            {item.description}
                          </p>

                          <div className="mt-4">
                            <span className="text-[11px] uppercase tracking-wider text-on-surface-variant/80 font-semibold block mb-2">
                              Profil Rasa &amp; Catatan Seduhan
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {notesList.map((note, nIdx) => (
                                <span
                                  key={nIdx}
                                  className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface"
                                >
                                  {note}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="pt-4 border-t border-surface-container">
                          <span className="text-[11px] uppercase tracking-wider text-on-surface-variant block font-medium">
                            Harga Seduhan
                          </span>
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                            {formatRupiah(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Controls: Running Motion Status, Dots, & Arrows */}
            <div className="px-6 sm:px-8 py-3.5 flex items-center justify-between border-t border-surface-container/60 bg-surface">
              {/* Dots with Running Indicator */}
              <div className="flex items-center gap-1.5">
                {coffeeItems.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === i
                        ? 'w-7 bg-primary'
                        : 'w-2 bg-surface-container-high hover:bg-secondary'
                    }`}
                    aria-label={`Ke slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Status & Navigation Arrows */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-on-surface-variant/80 font-mono hidden sm:inline">
                  {isPaused ? 'Jeda' : 'Otomatis'}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? coffeeItems.length - 1 : prev - 1
                      )
                    }
                    className="w-8 h-8 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Slide sebelumnya"
                  >
                    <Icon name="chevron_left" className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % coffeeItems.length)
                    }
                    className="w-8 h-8 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Slide berikutnya"
                  >
                    <Icon name="chevron_right" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main Catalog Grid */}
      <section id="coffee-menu-grid" className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-primary"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
                Tasting &amp; Craft Menu
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-serif text-on-surface">
              Curated Conservatory Offerings
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Seluruh kopi disangrai segar dengan profil pemanggangan presisi batch 5kg di kebun konservatori kami.
          </p>
        </div>

        {/* Coffee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="group bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  onClick={() => openItemModal(coffee)}
                  className="relative aspect-[4/3] overflow-hidden bg-surface-container-high cursor-pointer"
                >
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-primary/90 text-on-primary font-label-sm text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {coffee.subcategory}
                    </span>
                    {coffee.roast && (
                      <span className="px-2.5 py-1 rounded-full bg-surface/90 text-primary font-label-sm text-[11px] font-bold backdrop-blur-xs">
                        {coffee.roast} Roast
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="font-label-sm text-[11px] text-secondary font-bold uppercase tracking-wider block">
                    {coffee.origin}
                  </span>
                  <h3
                    onClick={() => openItemModal(coffee)}
                    className="font-headline-sm text-headline-sm font-serif text-primary hover:text-secondary transition-colors cursor-pointer"
                  >
                    {coffee.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    {coffee.description}
                  </p>
                  {coffee.notes && (
                    <div className="p-2.5 rounded-xl bg-surface-container/80 border border-surface-container-high text-xs text-on-surface-variant flex items-center gap-1.5">
                      <Icon name="spa" className="w-4 h-4 text-secondary" />
                      <span className="truncate"><strong>Notes:</strong> {coffee.notes}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-surface-container flex items-center justify-between mt-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Harga Seduhan</span>
                  <span className="font-title-lg font-serif font-bold text-primary text-xl">
                    {formatRupiah(coffee.price)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openItemModal(coffee)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-container text-primary font-label-sm font-bold border border-surface-container-high text-xs transition-all cursor-pointer group-hover:border-primary/40"
                >
                  <span>Detail Seduhan</span>
                  <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
