import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useModals } from '../context/ModalContext';
import { GARDEN_CATALOG } from '../data/catalog';

export const CoffeePage = () => {
  const { addToCart, formatRupiah, totals } = useCart();
  const { openCart, openItemModal, showToast } = useModals();

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRoast, setActiveRoast] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');

  const coffeeItems = GARDEN_CATALOG.filter(item => item.category === 'Coffee');

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

  const handleSubscribe = () => {
    addToCart({
      name: 'Whole Bean Coffee Subscription',
      price: 115000,
      category: 'Coffee Subscription',
      options: `Pengiriman dua mingguan • Gilingan: ${selectedGrind}`,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxy3vtevWnY_khG4iKiSs_W3FmyZq4d3coXk6wdNn1__gGFiWqejK-T_mZIpWgncGEwntiIOaWZcb26IDNQrN8Z6r9ZJG_x5I8GllzcwY9owrGOqglAkUSQ-i47DNRAvGeQIqGvJn6H9Tfk-Tsz5wKPGhL4_3UHXLNV0thflY9vvSxaTOA8kL0IR13oFQkyC5hHDHsied_FFPCQKNXDB-uxkmwxuYufOO7bw5mqt8Ts6MK40JZIHK2'
    });
    showToast('Langganan Ditambahkan', 'Whole Bean Coffee Subscription berhasil masuk ke baki.');
    openCart();
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Editorial Top Banner */}
      <section className="relative w-full bg-surface-container-low pt-12 pb-20 px-6 lg:px-12 overflow-hidden border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Story & Editorial Header */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">local_cafe</span>
              <span>Terroir Sangrai Botani • Panen Musim Semi 2025</span>
            </div>
            <h1 className="font-display text-headline-lg lg:text-display font-serif text-on-surface leading-tight tracking-tight">
              Artisanal Coffee &amp; <br />
              <span className="italic text-primary font-normal">Single-Origin Roastery</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Diseduh dari biji arabika pegunungan vulkanik nusantara yang ditanam di ketinggian 1.400–1.700 mdpl. Melalui proses fermentasi lambat terkontrol dan sangraian drum batch 5kg untuk menonjolkan spektrum rasa floral dan buah segar.
            </p>

            {/* Roast Dial Spectrum */}
            <div className="pt-4 max-w-md space-y-3">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                <span>Light (Floral)</span>
                <span>Medium (Caramelized)</span>
                <span>Dark (Smoked Wood)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-surface-container-high relative overflow-hidden flex">
                <div className="w-1/3 h-full bg-[#E8C288]"></div>
                <div className="w-1/3 h-full bg-[#B26A37]"></div>
                <div className="w-1/3 h-full bg-[#4A2E18]"></div>
              </div>
            </div>
          </div>

          {/* Right Spotlight: Java Preanger Honey Geisha Bento */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface p-6 lg:p-8 border border-surface-container-high space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxy3vtevWnY_khG4iKiSs_W3FmyZq4d3coXk6wdNn1__gGFiWqejK-T_mZIpWgncGEwntiIOaWZcb26IDNQrN8Z6r9ZJG_x5I8GllzcwY9owrGOqglAkUSQ-i47DNRAvGeQIqGvJn6H9Tfk-Tsz5wKPGhL4_3UHXLNV0thflY9vvSxaTOA8kL0IR13oFQkyC5hHDHsied_FFPCQKNXDB-uxkmwxuYufOO7bw5mqt8Ts6MK40JZIHK2"
                  alt="Java Preanger Honey Geisha Pour Over"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-on-primary font-label-sm text-[11px] font-bold uppercase tracking-wider">
                  Featured Roaster Reserve
                </span>
              </div>

              <div>
                <span className="font-label-sm text-secondary uppercase tracking-widest font-bold text-xs">
                  Pangalengan, West Java • 1.650 mdpl
                </span>
                <h3 className="font-headline-sm text-headline-sm font-serif text-primary mt-1">
                  Java Preanger Honey Geisha
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Seduhan v60 lambat dengan profil aroma melati liar, madu hutan, jeruk bergamot segar, dan akhir rasa buah persik matang yang lembut di lidah.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Jasmine</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Bergamot</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Wild Honey</span>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-on-surface-variant block">Harga Per Cangkir</span>
                  <span className="font-title-lg font-bold text-primary">Rp 65.000</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    addToCart({
                      name: 'Java Preanger Honey Geisha',
                      price: 65000,
                      category: 'Coffee',
                      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxy3vtevWnY_khG4iKiSs_W3FmyZq4d3coXk6wdNn1__gGFiWqejK-T_mZIpWgncGEwntiIOaWZcb26IDNQrN8Z6r9ZJG_x5I8GllzcwY9owrGOqglAkUSQ-i47DNRAvGeQIqGvJn6H9Tfk-Tsz5wKPGhL4_3UHXLNV0thflY9vvSxaTOA8kL0IR13oFQkyC5hHDHsied_FFPCQKNXDB-uxkmwxuYufOO7bw5mqt8Ts6MK40JZIHK2'
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">local_mall</span>
                  <span>Pesan Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter & Search Bar */}
      <section className="sticky top-20 z-30 bg-surface/95 backdrop-blur-md border-b border-surface-container-high/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap cursor-pointer ${
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

          {/* Quick Filters: Roast & Search */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kopi..."
                className="bg-surface-container text-on-surface text-label-sm font-label-sm pl-8 pr-3 py-1.5 rounded-lg border border-transparent focus:border-primary/30 focus:outline-none w-36 sm:w-48"
              />
              <span className="material-symbols-outlined text-sm text-on-surface-variant absolute left-2.5 top-2 pointer-events-none">
                search
              </span>
            </div>

            <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs">
              <span className="hidden sm:inline">Roast:</span>
              <select
                value={activeRoast}
                onChange={(e) => setActiveRoast(e.target.value)}
                className="bg-surface-container text-on-surface text-label-sm font-label-sm px-3 py-1.5 rounded-lg focus:outline-none cursor-pointer"
              >
                <option value="all">Semua Sangrai</option>
                <option value="Light">Light Roast</option>
                <option value="Medium">Medium Roast</option>
                <option value="Dark">Dark Roast</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
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
                      <span className="material-symbols-outlined text-secondary text-sm">spa</span>
                      <span className="truncate"><strong>Notes:</strong> {coffee.notes}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-surface-container flex items-center justify-between mt-4">
                <span className="font-title-lg font-bold text-primary">
                  {formatRupiah(coffee.price)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openItemModal(coffee)}
                    className="px-3 py-2 rounded-lg bg-surface hover:bg-surface-container text-primary font-label-sm font-bold border border-surface-container-high text-xs transition-all cursor-pointer"
                  >
                    Detail
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart({
                        id: coffee.id,
                        name: coffee.name,
                        price: coffee.price,
                        image: coffee.image,
                        category: 'Coffee'
                      });
                    }}
                    className="px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm font-bold text-xs transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                    <span>Pesan</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fortnightly Roastery Subscription Card */}
      <section id="subscription" className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 scroll-mt-24">
        <div className="bg-primary text-on-primary rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">cycle</span>
              <span>Roastery Subscription Club</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-serif">
              Biji Kopi Segar Diantar ke Pintu Rumah Anda Tiap Dua Minggu
            </h2>
            <p className="font-body-md text-on-primary/80 leading-relaxed">
              Nikmati rotasi biji kopi arabika pilihan dari perkebunan organik terbaik Indonesia. Disangrai khusus sesuai tanggal pesanan Anda dengan opsi gilingan yang dapat disesuaikan.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Whole Bean', 'Filter (Medium)', 'Espresso (Fine)'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGrind(g)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedGrind === g
                      ? 'bg-primary-fixed text-on-primary-fixed font-bold'
                      : 'bg-primary-container/60 text-on-primary hover:bg-primary-container'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-surface text-on-surface rounded-2xl p-6 lg:p-8 w-full max-w-sm space-y-4 shadow-lg shrink-0">
            <span className="font-label-sm text-secondary uppercase tracking-widest font-bold text-xs">
              Keanggotaan Terpilih
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-md font-serif text-primary font-bold">Rp 115.000</span>
              <span className="font-body-sm text-on-surface-variant">/ dua minggu (250g)</span>
            </div>
            <ul className="space-y-2 font-body-sm text-xs text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check</span>
                <span>Gratis ongkir Jabodetabek &amp; Bandung</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check</span>
                <span>Kartu catatan sensori &amp; panduan seduh eksklusif</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check</span>
                <span>Dapat dijeda atau dibatalkan kapan saja</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={handleSubscribe}
              className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Mulai Berlangganan</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
