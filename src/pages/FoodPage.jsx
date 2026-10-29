import { Icon } from '../components/ui/Icon';
import React, { useState } from 'react';
import { useModals } from '../context/ModalContext';
import { GARDEN_CATALOG } from '../data/catalog';

export const FoodPage = () => {
  const { openItemModal, openReservationModal } = useModals();
  const formatRupiah = (val) => 'Rp ' + Number(val).toLocaleString('id-ID');

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const foodItems = GARDEN_CATALOG.filter(item => item.category === 'Food');

  const categories = [
    { id: 'all', label: 'All Food' },
    { id: 'sandwiches', label: 'Hearth Sandwiches & Melts' },
    { id: 'toasts', label: 'Sourdough Toasts' },
    { id: 'bowls', label: 'Botanical Bowls' },
    { id: 'mains', label: 'Pastas & Mains' }
  ];

  const filteredFoods = foodItems.filter(item => {
    const subcat = (item.subcategory || '').toLowerCase();
    const text = (item.name + ' ' + (item.notes || '') + ' ' + (item.origin || '') + ' ' + item.description).toLowerCase();

    let matchCat = true;
    if (activeCategory === 'sandwiches') matchCat = subcat.includes('sandwich') || subcat.includes('melt');
    else if (activeCategory === 'toasts') matchCat = subcat.includes('toast') || subcat.includes('sourdough');
    else if (activeCategory === 'bowls') matchCat = subcat.includes('bowl');
    else if (activeCategory === 'mains') matchCat = subcat.includes('pasta') || subcat.includes('main');

    const matchQuery = !searchQuery || text.includes(searchQuery.toLowerCase().trim());

    return matchCat && matchQuery;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Storytelling Hero Banner */}
      <section className="relative w-full bg-surface-container-low pt-12 pb-16 lg:py-20 px-6 lg:px-12 overflow-hidden border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-semibold tracking-wide">
              <Icon name="restaurant" className="w-4 h-4 text-primary" />
              <span>Dapur Botani &amp; Hasil Bumi Dataran Tinggi</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.18] tracking-tight">
              Fresh From Farm &amp; Hearth. <br />
              <span className="italic font-normal text-primary">Sustainably Harvested Plates.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Setiap menu diracik dari bahan pangan organik segar yang dipanen langsung dari jaringan petani binaan Jawa Barat dan Bali. Dimasak menggunakan tungku kayu bakar api alami untuk menghasilkan cita rasa bumi yang otentik.
            </p>

            {/* Farm-to-Table 3 Specs */}
            <div className="grid grid-cols-3 gap-6 pt-2 max-w-lg border-t border-surface-container-high/80">
              <div>
                <p className="font-serif text-2xl font-bold text-primary">100%</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Bahan Panen Lokal</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-primary">Hearth</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Tungku Kayu Bakar</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-primary">Zero</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Pestisida Kimia</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('food-menu-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-sans font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Jelajahi Menu Makanan</span>
                <Icon name="arrow_downward" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Spotlight: Featured Food Bento */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface p-6 lg:p-7 border border-surface-container-high space-y-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high">
                <img
                  src="/images/img_8.jpg"
                  alt="Truffle Mushroom Brioche Melt"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-on-primary text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  Dapur Spesial Tungku
                </span>
              </div>

              <div>
                <span className="text-secondary uppercase tracking-widest font-bold text-xs">
                  Jamur Dataran Tinggi &amp; Roti Panggang Dapur
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                  Truffle Mushroom Brioche Melt
                </h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Roti brioche mentega panggang bertabur keju Gruyère leleh, tumisan jamur portobello gurih, dan aroma truffle hitam yang memikat.
                </p>
                <div className="flex flex-wrap gap-2 mt-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Portobello</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Gruyère Melt</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Black Truffle</span>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-on-surface-variant block font-medium">Porsi Santap</span>
                  <span className="font-serif text-2xl font-bold text-primary">Rp 88.000</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const item = foodItems.find(item => item.id === 'f1') || foodItems[0];
                    openItemModal(item);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface hover:bg-surface-container text-primary font-bold text-xs border border-surface-container-high transition-all shadow-xs cursor-pointer group-hover:border-primary/40"
                >
                  <span>Detail Sajian</span>
                  <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Bar */}
      <section className="sticky top-20 z-30 bg-surface/95 backdrop-blur-md border-b border-surface-container-high/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari hidangan botani..."
              className="bg-surface-container text-on-surface text-label-sm font-label-sm pl-8 pr-3 py-1.5 rounded-full border border-transparent focus:border-primary/30 focus:outline-none w-full md:w-48"
            />
            <Icon name="search" className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Culinary Menu Grid */}
      <section id="food-menu-grid" className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="group bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  onClick={() => openItemModal(food)}
                  className="relative aspect-[4/3] overflow-hidden bg-surface-container-high cursor-pointer"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 text-on-primary font-label-sm text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {food.subcategory}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="font-label-sm text-[11px] text-secondary font-bold uppercase tracking-wider block">
                    {food.origin}
                  </span>
                  <h3
                    onClick={() => openItemModal(food)}
                    className="font-headline-sm text-headline-sm font-serif text-primary hover:text-secondary transition-colors cursor-pointer"
                  >
                    {food.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-2">
                    {food.description}
                  </p>
                  {food.notes && (
                    <div className="p-2.5 rounded-xl bg-surface-container/80 border border-surface-container-high text-xs text-on-surface-variant flex items-center gap-1.5">
                      <Icon name="nature" className="w-4 h-4 text-secondary" />
                      <span className="truncate"><strong>Ingredients:</strong> {food.notes}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-surface-container flex items-center justify-between mt-4">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Porsi Santap</span>
                  <span className="font-title-lg font-serif font-bold text-primary text-xl">
                    {formatRupiah(food.price)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => openItemModal(food)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-container text-primary font-label-sm font-bold border border-surface-container-high text-xs transition-all cursor-pointer group-hover:border-primary/40"
                >
                  <span>Detail Sajian</span>
                  <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Farm-to-Table Partners */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 border-t border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Integritas Pasokan
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1">
              Our Farm-to-Table Partners
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">
              Kami bermitra erat dengan komunitas pertanian regeneratif lokal yang mendedikasikan tanah mereka tanpa pestisida kimia sintetis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-2xl p-8 shadow-sm space-y-4">
              <span className="font-label-sm text-secondary font-bold tracking-widest text-xs">01 • JAMUR ORGANIK</span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif">Bandung Highland Fungi Guild</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Kolektif petani jamur di dataran tinggi Lembang yang membudidayakan portobello liar, tiram cokelat, dan chanterelle di substrat batang kayu alami.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 shadow-sm space-y-4">
              <span className="font-label-sm text-secondary font-bold tracking-widest text-xs">02 • TERNAK UMBARAN</span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif">Bumi Lestari Free-Range Pastures</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Peternakan ayam padang rumput bebas kandang di kaki Gunung Salak dengan pakan biji-bijian organik dan rempah herbal kekebalan alami.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 shadow-sm space-y-4">
              <span className="font-label-sm text-secondary font-bold tracking-widest text-xs">03 • FERMENTASI RAGI</span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif">Wild Starter &amp; Hearth Ferment</h3>
              <p className="font-body-sm text-on-surface-variant leading-relaxed">
                Biang ragi liar berumur 6 tahun yang dipelihara di dapur kami dengan tepung gandum utuh organik dan air mata air pegunungan alami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
