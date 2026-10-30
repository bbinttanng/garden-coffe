import { Icon } from '../components/ui/Icon';
import React, { useState } from 'react';
import { useModals } from '../context/ModalContext';
import { SANCTUARIES } from '../data/stores';

export const LokasiPage = () => {
  const { openReservationModal, showToast } = useModals();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeAmenity, setActiveAmenity] = useState('all');
  const [activeStore, setActiveStore] = useState(SANCTUARIES[0]);
  const [mapZoom, setMapZoom] = useState(14);

  const amenities = [
    { id: 'all', label: 'Semua Fasilitas', icon: 'apps' },
    { id: 'glasshouse', label: 'Indoor Conservatory', icon: 'nest_eco_leaf' },
    { id: 'pet-friendly', label: 'Outdoor Pet-Friendly', icon: 'pets' },
    { id: 'slow-bar', label: 'Pour-Over Slow Bar', icon: 'coffee_maker' },
    { id: 'meeting-room', label: 'Private Glass Studio', icon: 'meeting_room' },
    { id: 'drive-thru', label: 'Garden Drive-Thru', icon: 'directions_car' }
  ];

  const filteredStores = SANCTUARIES.filter(store => {
    const text = (store.name + ' ' + store.address + ' ' + store.subcategory + ' ' + (store.description || '')).toLowerCase();
    const matchQuery = !searchQuery || text.includes(searchQuery.toLowerCase().trim());
    const matchRegion = selectedRegion === 'all' || store.region === selectedRegion;
    const matchAmenity = activeAmenity === 'all' || (store.tags && store.tags.includes(activeAmenity));
    return matchQuery && matchRegion && matchAmenity;
  });

  const handleGpsLocate = () => {
    showToast('GPS Lokasi Aktif', 'Mendeteksi koordinat terdekat... Menampilkan Senopati Conservatory Sanctuary (1.2 km).');
    setActiveStore(SANCTUARIES[0]);
  };

  const handleFocusMarker = (store) => {
    setActiveStore(store);
    showToast('Peta Difokuskan', `Navigasi diarahkan ke ${store.name}`);
  };

  const handleOpenDirections = (store) => {
    const query = encodeURIComponent(`${store.name} ${store.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Sanctuary Banner / Atmospheric Header */}
      <section className="relative w-full bg-surface-container-low px-6 lg:px-12 pt-12 pb-16 overflow-hidden border-b border-surface-container-high/60">
        <div className="absolute right-0 top-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 -mb-20 w-80 h-80 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mb-4 shadow-xs">
                <Icon name="eco" className="w-4 h-4" />
                <span>Direktori Suaka Kaca • Indonesia</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif mb-4">
                Temukan Suaka Rumah Kaca Terdekat Anda
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Kunjungi ruang suaka rumah kaca kami di Jakarta, Tangerang, Bandung, dan Bali. Tempat bertemunya racikan seduh kopi micro-lot dengan rimbunnya flora tropis hidup.
              </p>
            </div>

            {/* Quick Summary Stats Widget */}
            <div className="flex items-center gap-6 p-4 rounded-xl bg-surface-container shadow-xs self-start lg:self-auto border border-surface-container-high/80">
              <div className="text-left pr-4">
                <div className="font-headline-md text-headline-md text-primary font-serif">{SANCTUARIES.length}</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Suaka Aktif</div>
              </div>
              <div className="w-px h-10 bg-outline-variant/60"></div>
              <div className="text-left pr-4">
                <div className="font-headline-md text-headline-md text-primary font-serif">3</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Wilayah Utama</div>
              </div>
              <div className="w-px h-10 bg-outline-variant/60"></div>
              <div className="text-left">
                <div className="font-headline-md text-headline-md text-secondary font-serif">100%</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ramah Hewan</div>
              </div>
            </div>
          </div>

          {/* Live Search & Interactive Filter Controls */}
          <div className="w-full bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-surface-container-high/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* District Search Field */}
              <div className="lg:col-span-6 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                  <Icon name="location_on" className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari distrik, area, atau kota (cth. Senopati, Canggu, Bandung, Menteng)..."
                  className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-surface-container text-on-surface font-body-md text-body-md placeholder-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  >
                    <Icon name="close" className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Region Quick Select */}
              <div className="lg:col-span-3">
                <div className="relative">
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full appearance-none pl-4 pr-10 py-3.5 rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer border border-transparent focus:border-primary/20"
                  >
                    <option value="all">Semua Wilayah (All Regions)</option>
                    <option value="jakarta">DKI Jakarta</option>
                    <option value="tangerang">Tangerang / BSD</option>
                    <option value="bandung">Bandung</option>
                    <option value="bali">Bali</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-on-surface-variant">
                    <Icon name="expand_more" className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Quick Action: Detect GPS */}
              <div className="lg:col-span-3 flex gap-2">
                <button
                  type="button"
                  onClick={handleGpsLocate}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg shadow-xs transition-all cursor-pointer"
                >
                  <Icon name="near_me" className="w-5 h-5" />
                  <span>Terdekat Saya</span>
                </button>
              </div>
            </div>

            {/* Filter Chips Pills */}
            <div className="mt-6 pt-5 border-t border-surface-container flex flex-wrap items-center gap-2.5">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-2 font-semibold">Fasilitas Khusus:</span>
              {amenities.map(chip => (
                <button
                  key={chip.id}
                  type="button"
                  onClick={() => setActiveAmenity(chip.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                    activeAmenity === chip.id
                      ? 'bg-primary text-on-primary font-semibold shadow-xs'
                      : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">{chip.icon}</span>
                  <span>{chip.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dual Split-View Screen */}
      <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-headline-sm text-headline-sm text-primary font-serif">Available Sanctuaries</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
              {filteredStores.length} Lokasi Ditemukan
            </span>
          </div>

          <div className="text-on-surface-variant font-body-sm text-body-sm">
            Klik pin peta atau kartu toko untuk melihat detail dan navigasi rute langsung.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Directory Cards (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            {filteredStores.length === 0 ? (
              <div className="text-center py-16 bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant p-8">
                <Icon name="storefront" className="w-8 h-8" />
                <h3 className="font-title-md font-bold text-primary">Tidak Ada Sanctuary yang Cocok</h3>
                <p className="font-body-sm text-on-surface-variant mt-1">Coba sesuaikan kata kunci pencarian atau ganti filter wilayah.</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedRegion('all'); setActiveAmenity('all'); }}
                  className="mt-4 px-4 py-2 bg-primary text-on-primary rounded-lg text-label-md"
                >
                  Reset Filter Lokasi
                </button>
              </div>
            ) : (
              filteredStores.map(store => {
                const isSelected = activeStore?.id === store.id;
                return (
                  <article
                    key={store.id}
                    onClick={() => setActiveStore(store)}
                    className={`group rounded-2xl p-6 transition-all duration-300 relative border cursor-pointer ${
                      isSelected
                        ? 'bg-surface-container-lowest border-primary ring-2 ring-primary/20 shadow-lg'
                        : 'bg-surface-container-lowest border-surface-container-high/80 shadow-xs hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-5/12 relative overflow-hidden rounded-xl aspect-[4/3] md:aspect-auto bg-surface-container">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={store.image}
                          alt={store.name}
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                          <span>{store.status} • {store.hours}</span>
                        </div>
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-surface/90 backdrop-blur-md text-primary font-label-md text-label-md font-semibold shadow-xs">
                          {store.distance}
                        </div>
                      </div>

                      <div className="md:w-7/12 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                              {store.subcategory}
                            </span>
                            <div className="flex items-center gap-1 text-tertiary font-label-sm text-label-sm font-semibold">
                              <Icon name="star" className="w-4 h-4" />
                              <span>{store.rating}</span>
                            </div>
                          </div>

                          <h2 className="font-headline-sm text-headline-sm text-primary font-serif mb-2 group-hover:text-primary-container transition-colors">
                            {store.name}
                          </h2>

                          <p className="font-body-sm text-body-sm text-on-surface-variant flex items-start gap-1.5 mb-3">
                            <Icon name="pin_drop" className="w-4 h-4" />
                            <span>{store.address}</span>
                          </p>

                          {/* Amenities Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {store.features.map((feat, fIdx) => (
                              <span key={fIdx} className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                                {feat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-surface-container">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenDirections(store);
                            }}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all text-center cursor-pointer"
                          >
                            <Icon name="directions" className="w-4 h-4" />
                            <span>Petunjuk Arah</span>
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openReservationModal(store.name);
                            }}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-md text-label-md transition-all cursor-pointer"
                          >
                            <Icon name="table_bar" className="w-4 h-4" />
                            <span>Reservasi Meja</span>
                          </button>
                          <a
                            href="tel:+62215582991"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
                            title="Hubungi Barista Sanctuary"
                          >
                            <Icon name="call" className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {/* Right Column: Interactive Map Canvas Explorer (5 Columns - Sticky) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="rounded-2xl bg-surface-container-lowest p-4 shadow-sm overflow-hidden border border-surface-container-high/80">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <Icon name="map" className="w-5 h-5 text-primary" />
                  <span className="font-title-md text-title-md text-primary font-bold">Sanctuary Map Navigator</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full truncate max-w-[200px]">
                  Fokus: {activeStore?.name?.split(' ')[0] || 'Sanctuary'}
                </span>
              </div>

              {/* Authentic Interactive Map Embed with OSM and Directions Action */}
              <div className="relative w-full h-[520px] rounded-xl overflow-hidden bg-surface-container border border-surface-container-high shadow-inner">
                {activeStore ? (
                  <iframe
                    title={`Peta Lokasi ${activeStore.name}`}
                    className="w-full h-full border-0 rounded-xl"
                    loading="lazy"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${activeStore.lng - 0.015}%2C${activeStore.lat - 0.012}%2C${activeStore.lng + 0.015}%2C${activeStore.lat + 0.012}&layer=mapnik&marker=${activeStore.lat}%2C${activeStore.lng}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-on-surface-variant font-label-md">
                    Memuat peta suaka...
                  </div>
                )}

                {/* Floating Active Sanctuary Overlay Card */}
                {activeStore && (
                  <div className="absolute top-4 left-4 right-4 p-4 rounded-xl bg-surface/95 backdrop-blur-md shadow-md flex items-center justify-between gap-3 z-30 border border-surface-container-high/80">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-xs">
                        <Icon name="location_on" className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-label-sm text-[11px] text-secondary font-bold uppercase tracking-wider">Sanctuary Aktif</p>
                        <p className="font-label-md text-label-md font-semibold text-primary truncate">{activeStore.name}</p>
                        <p className="text-[11px] text-on-surface-variant truncate">{activeStore.address}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOpenDirections(activeStore)}
                      className="px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Icon name="directions" className="w-4 h-4" />
                      <span>Buka Maps</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Real Map Legend & Info */}
              <div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                  <span>Fokus GPS Aktif ({activeStore?.name?.split(' ')[0]})</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="verified" className="w-4 h-4" />
                  <span>OpenStreetMap Live Data</span>
                </span>
              </div>
              <div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm border-t border-surface-container">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
                  <span>Sanctuary Aktif</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block"></span>
                  <span>Heritage &amp; Outdoor</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container inline-block"></span>
                  <span>Drive-Thru</span>
                </span>
              </div>
            </div>

            {/* Glasshouse Operating Protocols Note */}
            <div className="p-5 rounded-2xl bg-surface-container-high/60 flex items-start gap-3 border border-surface-container-high">
              <Icon name="info" className="w-6 h-6 text-secondary" />
              <div>
                <h4 className="font-label-lg text-label-lg text-on-surface font-semibold mb-1">Kunjungan Ramah Hewan &amp; Workspace</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Seluruh area outdoor dan glasshouse terrace terbuka untuk hewan peliharaan (leashed). Dilengkapi colokan listrik di setiap meja sudut dan jaringan fiber optik 150 Mbps berkecepatan tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botanical Glasshouse Event & Private Gathering Booking Section */}
      <section className="w-full bg-surface-container px-6 lg:px-12 py-20 mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-on-primary shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 md:p-14 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm mb-6">
                  <Icon name="celebration" className="w-4 h-4" />
                  <span>Intimate Celebrations &amp; Work Retreats</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary font-serif tracking-tight mb-4">
                  Host Your Intimate Gathering at Our Glasshouse
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mb-8 leading-relaxed">
                  Dari pesta pernikahan berkonsep botanical intimate, bridal brunch, hingga offsite kreatif kantor dan lokakarya kopi private, rumah kaca kami menyajikan suasana suaka hidup yang tak terlupakan.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8 text-on-primary">
                  <div>
                    <div className="font-headline-sm text-headline-sm font-serif mb-1">15 - 120</div>
                    <div className="font-label-sm text-label-sm text-on-primary-container">Guest Capacity</div>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm font-serif mb-1">Farm-to-Table</div>
                    <div className="font-label-sm text-label-sm text-on-primary-container">Bespoke Catering</div>
                  </div>
                  <div>
                    <div className="font-headline-sm text-headline-sm font-serif mb-1">Full AV &amp; Acoustic</div>
                    <div className="font-label-sm text-label-sm text-on-primary-container">Private Audio Suite</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => openReservationModal('Private Event Gathering')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface text-primary hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-all cursor-pointer font-bold"
                  >
                    <span>Inquire Private Space</span>
                    <Icon name="arrow_forward" className="w-5 h-5" />
                  </button>
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Garden%20Coffee,%20saya%20ingin%20info%20paket%20Private%20Glasshouse%20Gathering."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container hover:bg-primary-container/80 text-on-primary font-label-lg text-label-lg transition-all"
                  >
                    <Icon name="chat" className="w-5 h-5" />
                    <span>Chat Concierge WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[380px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/img_19.jpg"
                  alt="Glasshouse private dining event"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LokasiPage;
