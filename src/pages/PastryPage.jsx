import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useModals } from '../context/ModalContext';
import { GARDEN_CATALOG } from '../data/catalog';
import { PastryBoxBuilder } from '../components/pastry/PastryBoxBuilder';

export const PastryPage = () => {
  const { addToCart, formatRupiah } = useCart();
  const { openCart, openItemModal, showToast } = useModals();

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

  const handleAddCombo = (name, price, desc) => {
    addToCart({
      name,
      price,
      category: 'Pastry Pairing',
      options: desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBUFBsbrDcjNwIPGpSJNB381UIyMV0eyjCEly4XAsmeHu4OcOnImh_t4AfgbUawopIN4sn-VJQyzdGyYYw-1OiaggK2kwSIWnL8B-hX-wx9gENe2Zoe5L_Klu5C5xiFbmc-ToCfyMQ3mupb-WnNNM21bTd7PQm0ys9Wck9B9m9f4iQPG7ELbnDA5h3SVaAqx-YB2NCUi8tP0R9s9JXJDO9my41M1tjnnwkh41L1Nb6O3qhtNNGaqlK'
    });
    showToast('Paket Pairing Masuk Baki', `${name} berhasil ditambahkan ke keranjang pesanan.`);
    openCart();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Editorial Section */}
      <section className="relative w-full bg-surface-container-low px-6 lg:px-12 py-16 lg:py-24 overflow-hidden border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">local_fire_department</span>
              <span>Slow Fermentation • Pure Normandy Butter</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight leading-tight">
              Baked Daily at Sunrise.<br />
              <span className="italic font-normal text-tertiary">The Botanical Viennoiserie.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Crafted across a 48-hour slow-lamination rhythm. We meld wild lavender honey infusions, botanical extracts, stone-milled sourdough starters, and golden French butter into crisp, honeycomb layers that crackle at first touch.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollToSection('pastry-grid')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all cursor-pointer"
              >
                <span>Explore Oven Harvest</span>
                <span className="material-symbols-outlined text-lg">arrow_downward</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('gift-box-builder')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container text-primary font-label-lg text-label-lg shadow-xs hover:bg-surface-container-high transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">redeem</span>
                <span>Curate Gift Box</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg border-t border-surface-container-high/80">
              <div>
                <p className="font-headline-md text-headline-md text-primary font-serif">48h</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Cold Ferment Proof</p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary font-serif">84%</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Charentes Butter Fat</p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary font-serif">06:00</p>
                <p className="font-label-md text-label-md text-on-surface-variant">First Oven Pull Daily</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVe1DDQn1TM25SvFI_nPKf9DZFoiCvKLjCd6nL-iuFB7bMKv_KBlpd2eE2y7aQoRpsePMZ-oG7PYh01QVFqzoBw5PLCDMaSrsYsFpgRRDK4BAS9aPNt69qTmrFx_URnP9YV4eIyDm2-1Ub0ERoJJFxLFLYR181cvDTN3zF0ArCdELh-lWxDDipLY7Zg8ji0OF_0Xooqs2ynqcxwQ-yrzelU7I4McixKEmP0OokmO5-fie5vbnQfiBZ"
                alt="Wild Lavender Honey Glaze Croissant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 text-on-primary">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">Morning Batch #1</span>
                <h3 className="font-headline-sm text-headline-sm font-serif">Wild Lavender Honey Glaze</h3>
                <p className="font-body-sm text-body-sm text-on-primary-container">Crisped with raw organic honeycomb &amp; Alpine herb fleur de sel.</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-5 rounded-xl shadow-lg max-w-xs flex items-center gap-4 border border-surface-container">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">local_fire_department</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-bold">Oven Timer Active</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Batch Kouign-Amann segar keluar oven tiap 20 menit.</p>
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
            <span className="material-symbols-outlined text-sm text-on-surface-variant absolute left-2.5 top-2 pointer-events-none">search</span>
          </div>
        </div>
      </section>

      {/* Pastry Showcase Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="pastry-grid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">La Pâtisserie de la Serre</span>
            <h2 className="font-headline-md text-headline-md text-primary font-serif">Curated Viennoiserie &amp; Bakes</h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            Dipanggang dari stone-deck oven tiga kali sehari. Mentega Normandy 84% fat untuk tekstur berlapis yang renyah sempurna.
          </p>
        </div>

        {filteredPastries.length === 0 ? (
          <div className="text-center py-16 bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant p-8">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">bakery_dining</span>
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
                      <span className="material-symbols-outlined text-xs">local_fire_department</span> Fresh from Oven
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

                <div className="pt-4 flex items-center gap-3 border-t border-surface-container/60">
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(item);
                      showToast('Pastry Ditambahkan', `${item.name} berhasil masuk ke baki pesanan.`);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                    <span>+ Add to Order</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openItemModal(item)}
                    className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors flex items-center justify-center cursor-pointer"
                    title="Detail Pastry"
                  >
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Interactive Custom Pastry Box & Hamper Builder */}
      <PastryBoxBuilder />

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
                <span className="material-symbols-outlined">filter_vintage</span>
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
              <button
                type="button"
                onClick={() => handleAddCombo('Pairing #1: Pistachio Cruffin + Honey Geisha', 88000, 'Silky Light Pour Over & Rose diplomat cruffin')}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-xs cursor-pointer"
              >
                Order Combo
              </button>
            </div>
          </div>

          {/* Pairing 2 */}
          <div className="rounded-2xl bg-surface-container p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all border border-surface-container-high/60">
            <div>
              <div className="flex items-center justify-between text-secondary mb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Pairing #02 • Salted Earth &amp; Velvet</span>
                <span className="material-symbols-outlined">coffee</span>
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
              <button
                type="button"
                onClick={() => handleAddCombo('Pairing #2: Kouign-Amann + Oat Cortado', 74000, 'Salted caramel pastry & Velvety oat cortado')}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-xs cursor-pointer"
              >
                Order Combo
              </button>
            </div>
          </div>

          {/* Pairing 3 */}
          <div className="rounded-2xl bg-surface-container p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all border border-surface-container-high/60">
            <div>
              <div className="flex items-center justify-between text-secondary mb-4">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Pairing #03 • Dark Cocoa Symphony</span>
                <span className="material-symbols-outlined">bakery_dining</span>
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
              <button
                type="button"
                onClick={() => handleAddCombo('Pairing #3: Valrhona Babka + Cold Brew', 78000, 'Dark Valrhona brioche & 12h Kyoto drip coffee')}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-xs cursor-pointer"
              >
                Order Combo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PastryPage;
