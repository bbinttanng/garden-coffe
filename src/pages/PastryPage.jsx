import { Icon } from '../components/ui/Icon';
import React, { useState } from 'react';
import { useModals } from '../context/ModalContext';
import { GARDEN_CATALOG } from '../data/catalog';

export const PastryPage = () => {
  const { openItemModal, openReservationModal } = useModals();
  const formatRupiah = (val) => 'Rp ' + Number(val).toLocaleString('id-ID');

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const pastryItems = GARDEN_CATALOG.filter(item => item.category === 'Pastry');

  const categories = [
    { id: 'all', label: 'All Pastries (24)' },
    { id: 'laminated', label: 'Signature Croissants & Viennoiserie' },
    { id: 'tarts', label: 'Sweet Botanicals & Tarts' },
    { id: 'savory', label: 'Savory Bakes' },
    { id: 'sourdough', label: 'Sourdough Patisserie' }
  ];

  const filteredPastries = pastryItems.filter(item => {
    const sub = (item.subcategory || '').toLowerCase();
    const tags = (item.tags || []).join(' ').toLowerCase();
    const text = (item.name + ' ' + (item.notes || '') + ' ' + (item.description || '')).toLowerCase();

    let matchCat = true;
    if (activeCategory === 'laminated') matchCat = sub.includes('laminated') || sub.includes('croissant');
    else if (activeCategory === 'tarts') matchCat = sub.includes('tart') || sub.includes('confection');
    else if (activeCategory === 'savory') matchCat = sub.includes('savory') || tags.includes('savory');
    else if (activeCategory === 'sourdough') matchCat = sub.includes('sourdough');

    const matchQuery = !searchQuery || text.includes(searchQuery.toLowerCase().trim());
    return matchCat && matchQuery;
  });



  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Editorial Section */}
      <section className="relative w-full bg-surface-container-low pt-12 pb-16 lg:py-20 px-6 lg:px-12 overflow-hidden border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-semibold tracking-wide">
              <Icon name="local_fire_department" className="w-4 h-4 text-primary" />
              <span>Fermentasi Lambat • Mentega Murni Pilihan</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.18] tracking-tight">
              Baked Daily at Sunrise.<br />
              <span className="italic font-normal text-tertiary">The Botanical Viennoiserie.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Crafted across a 48-hour slow-lamination rhythm. We meld wild lavender honey infusions, botanical extracts, stone-milled sourdough starters, and golden French butter into crisp, honeycomb layers that crackle at first touch.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-2 max-w-lg border-t border-surface-container-high/80">
              <div>
                <p className="font-serif text-2xl font-bold text-primary">48h</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Fermentasi Dingin</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-primary">84%</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Kandungan Lemak Mentega</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-primary">06:00</p>
                <p className="font-sans text-xs text-on-surface-variant mt-0.5">Kloter Pertama Keluar Oven</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => scrollToSection('pastry-grid')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-sans font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Jelajahi Menu Pastry</span>
                <Icon name="arrow_downward" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Spotlight: Featured Pastry Bento */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface p-6 lg:p-7 border border-surface-container-high space-y-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high">
                <img
                  className="w-full h-full object-cover"
                  src="/images/img_20.jpg"
                  alt="Wild Lavender Honey Glaze Croissant"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-on-primary text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  Kloter Fajar #1
                </span>
              </div>

              <div>
                <span className="text-secondary uppercase tracking-widest font-bold text-xs">
                  Normandy Butter 84% • Fermentasi 48 Jam
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                  Wild Lavender Honey Glaze
                </h3>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Honeycomb lamination yang renyah dengan lelehan madu lavender liar alami dan taburan garam herbal fleur de sel pegunungan.
                </p>
                <div className="flex flex-wrap gap-2 mt-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">French Butter</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Wild Lavender</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface-container text-xs font-semibold text-on-surface">Fleur de Sel</span>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-on-surface-variant block font-medium">Harga Oven</span>
                  <span className="font-serif text-2xl font-bold text-primary">Rp 42.000</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const item = pastryItems.find(item => item.id === 'p1') || pastryItems[0];
                    openItemModal(item);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface hover:bg-surface-container text-primary font-bold text-xs border border-surface-container-high transition-all shadow-xs cursor-pointer group-hover:border-primary/40"
                >
                  <span>Detail Pastry</span>
                  <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Filter Navigation Bar */}
      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md px-6 lg:px-12 py-4 shadow-xs border-b border-surface-container">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary text-on-primary shadow-xs font-semibold'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative shrink-0 ml-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari viennoiserie..."
              className="bg-surface-container text-on-surface text-label-sm font-label-sm pl-8 pr-3 py-1.5 rounded-full border border-transparent focus:border-primary/30 focus:outline-none w-36 sm:w-48"
            />
            <Icon name="search" className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Pastry Showcase Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="pastry-grid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Kreasi Dapur Pastry</span>
            <h2 className="font-headline-md text-headline-md text-primary font-serif">Koleksi Croissant &amp; Viennoiserie</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            Dipanggang langsung dari oven batu tiga kali sehari untuk menghasilkan tekstur berlapis yang renyah dan harum mentega murni.
          </p>
        </div>

        {filteredPastries.length === 0 ? (
          <div className="text-center py-16 bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant p-8">
            <Icon name="bakery_dining" className="w-8 h-8" />
            <h3 className="font-title-md font-bold text-primary">Tidak Ada Pastry yang Cocok</h3>
            <p className="font-body-sm text-on-surface-variant mt-1">Coba gunakan kata kunci lain atau pilih kategori di atas.</p>
            <button
              type="button"
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPastries.map(item => (
              <div
                key={item.id}
                className="group rounded-2xl bg-surface-container-lowest p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container/60"
              >
                <div>
                  <div
                    onClick={() => openItemModal(item)}
                    className="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container mb-5 cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      alt={item.name}
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm shadow flex items-center gap-1">
                      <Icon name="local_fire_department" className="w-3.5 h-3.5" /> Fresh from Oven
                    </span>
                    {item.tags?.[0] && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface/90 text-on-surface font-label-sm text-label-sm">
                        {item.tags[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      onClick={() => openItemModal(item)}
                      className="font-headline-sm text-headline-sm text-on-surface font-serif hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <span className="font-title-lg text-title-lg text-primary font-semibold whitespace-nowrap">
                      {formatRupiah(item.price)}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(item.notes || '').split(',').slice(0, 2).map((note, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                        {note.trim()}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary-container font-label-sm text-label-sm">
                      Normandy Butter
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-surface-container/60">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">Harga Oven</span>
                    <span className="font-title-lg font-serif font-bold text-primary text-xl">
                      {formatRupiah(item.price)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openItemModal(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-container text-primary font-label-sm font-bold border border-surface-container-high text-xs transition-all cursor-pointer group-hover:border-primary/40"
                  >
                    <span>Detail Pastry</span>
                    <Icon name="arrow_forward" className="w-3.5 h-3.5 text-secondary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


      {/* Morning Coffee & Pastry Botanical Pairing Recommendation */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold">Botanical Sommelier Pairings</span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-serif">Harmonious Morning Rhythms</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Head Roaster dan Pâtissier kami meracik harmoni rasa antara acidity kopi single-origin dan kelembutan butter fat Prancis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pairing 1 */}
          <div className="rounded-2xl bg-surface-container p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all border border-surface-container-high/60">
            <div>
              <div className="flex items-center justify-between text-secondary mb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Pairing #01 • Floral Awakening</span>
                <Icon name="filter_vintage" className="w-4 h-4" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-serif mb-2">Pistachio Cruffin + Honey Geisha Pour Over</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                Nuansa melati dan aprikot dari Panama Honey Geisha berpadu lembut dengan krim mawar diplomatik di dalam gulungan cruffin renyah.
              </p>
              <div className="space-y-3 bg-surface p-4 rounded-xl mb-4 border border-surface-container-high/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Coffee Body</span>
                  <span className="text-primary font-semibold">Silky Light (Score 91)</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-2/5"></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Sweetness Balance</span>
                  <span className="text-primary font-semibold">Wildflower Honey &amp; Bergamot</span>
                </div>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-surface-container-high/60">
              <span className="font-title-md text-title-md text-primary font-bold">Rp 88.000</span>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Tersedia Dine-In
              </span>
            </div>
          </div>

          {/* Pairing 2 */}
          <div className="rounded-2xl bg-surface-container p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all border border-surface-container-high/60">
            <div>
              <div className="flex items-center justify-between text-secondary mb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Pairing #02 • Salted Earth &amp; Velvet</span>
                <Icon name="coffee" className="w-4 h-4" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-serif mb-2">Kouign-Amann + Oat Cortado</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                Rasio 1:1 ristretto ganda dipadu susu oat Swedia yang lembut melengkapi kerak karamel manis-asin Kouign-Amann.
              </p>
              <div className="space-y-3 bg-surface p-4 rounded-xl mb-4 border border-surface-container-high/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Coffee Body</span>
                  <span className="text-primary font-semibold">Velvety Medium</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-4/5"></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Tasting Harmony</span>
                  <span className="text-primary font-semibold">Brown Butter &amp; Lavender Salt</span>
                </div>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-surface-container-high/60">
              <span className="font-title-md text-title-md text-primary font-bold">Rp 74.000</span>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Tersedia Dine-In
              </span>
            </div>
          </div>

          {/* Pairing 3 */}
          <div className="rounded-2xl bg-surface-container p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all border border-surface-container-high/60">
            <div>
              <div className="flex items-center justify-between text-secondary mb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Pairing #03 • Dark Cocoa Symphony</span>
                <Icon name="bakery_dining" className="w-4 h-4" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-serif mb-2">Valrhona Babka + Kyoto Cold Brew</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                Tetesan dingin 12 jam Kyoto cold brew menyeimbangkan kekayaan rasa cokelat hitam Guanaja 70% dengan kesegaran cherry yang bersih.
              </p>
              <div className="space-y-3 bg-surface p-4 rounded-xl mb-4 border border-surface-container-high/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Coffee Body</span>
                  <span className="text-primary font-semibold">Crisp &amp; Winey</span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-3/5"></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-medium">Tasting Harmony</span>
                  <span className="text-primary font-semibold">70% Guanaja &amp; Black Cherry</span>
                </div>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-surface-container-high/60">
              <span className="font-title-md text-title-md text-primary font-bold">Rp 78.000</span>
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Tersedia Dine-In
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Notes & Reservation Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20">
        <div className="rounded-3xl bg-surface-container-low border border-surface-container-high/80 p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-secondary block">
              Catatan Dapur Pâtisserie
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Pastry Hangat Keluar Oven Tiap Pukul 06.00
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Dibuat dengan mentega Prancis murni 84% fat dan fermentasi ragi alami 48 jam. Ketersediaan varian dapat bervariasi setiap hari karena dipanggang dalam jumlah terbatas demi menjaga kerenyahan maksimal.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openReservationModal()}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer shrink-0"
          >
            <Icon name="event" className="w-4 h-4 text-primary-fixed" />
            <span>Reservasi Meja Suaka</span>
          </button>
        </div>
      </section>
    </div>
  );
};
export default PastryPage;
