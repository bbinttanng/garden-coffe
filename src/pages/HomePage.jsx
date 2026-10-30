import React from 'react';
import { Icon } from '../components/ui/Icon';
import { useModals } from '../context/ModalContext';

export const HomePage = ({ setActivePage }) => {
  const { openReservationModal } = useModals();

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-4 pb-12 lg:pt-6 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-secondary-container/80 text-on-secondary-fixed text-xs font-bold uppercase tracking-wider shadow-2xs">
                <img src="/logo.png" alt="Logo" className="w-4 h-4 object-contain" />
                <span>Konservatori Kopi &amp; Dapur Botani</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.85rem] leading-[1.12] text-primary font-bold tracking-tight">
                Ruang Teduh di Tengah Kota, <br className="hidden sm:inline" />
                <span className="italic font-normal text-secondary">dengan Seduhan Alami.</span>
              </h1>

              <div className="max-w-xl pt-1">
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Garden Coffee &amp; Eatery hadir sebagai tempat singgah hijau untuk melepas penat, menikmati kopi terbaik dari petani lokal nusantara, dan menyantap hidangan dapur segar di bawah naungan rumah kaca alami.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setActivePage('lokasi')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Kunjungi Suaka Terdekat</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => openReservationModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-all cursor-pointer group"
              >
                <Icon name="event" className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                <span>Reservasi Meja</span>
              </button>
            </div>

            {/* Grounded Real Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-lg border-t border-surface-container-high/80">
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">5 Suaka</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant tracking-wider mt-0.5 font-semibold">
                  Jakarta, Bandung &amp; Bali
                </p>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">100%</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant tracking-wider mt-0.5 font-semibold">
                  Biji Kopi Petani Nusantara
                </p>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">06.00</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant tracking-wider mt-0.5 font-semibold">
                  Oven &amp; Seduhan Buka Setiap Pagi
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.5] bg-surface-container-high border border-surface-container-high/60 group">
              <img
                alt="Interior konservatori Garden Coffee &amp; Eatery"
                className="w-full h-full object-cover object-center botanical-img group-hover:scale-105"
                src="/hero-garden-coffee.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-on-primary">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed block mb-1">
                  Suaka Senopati, Jakarta
                </span>
                <p className="text-xs text-on-primary/90 font-medium">
                  Rindang pepohonan tropis dan pencahayaan matahari alami sepanjang hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence / Tiga Pilar Kami */}
      <section id="our-story" className="w-full bg-surface-container-low py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Highlighted Motto Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/70 text-on-secondary-fixed text-xs font-bold uppercase tracking-widest mb-4">
              <Icon name="eco" className="w-3.5 h-3.5 text-primary" />
              <span>Prinsip &amp; Nilai Kami</span>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-surface-container-high border-l-4 border-l-primary shadow-xs space-y-2">
              <span className="block font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                Motto Sederhana Kami
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-primary font-medium leading-relaxed">
                "Kopi yang jujur dari tangan petani, hidangan yang hangat dari bahan segar, dan ruang hijau yang menenangkan jiwa."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Visi */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow border border-surface-container-high border-t-4 border-t-primary flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/60 text-primary font-label-sm text-xs font-bold tracking-widest uppercase">
                  Visi Kami
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif font-bold">
                  Menjadi Oase Hijau Terfavorit di Tengah Padatnya Kota
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Menghadirkan ruang singgah yang teduh dan bersahabat di mana setiap orang dapat beristirahat sejenak, bekerja dengan nyaman, atau bercengkerama bersama sahabat sambil menikmati seduhan kopi nusantara berkualitas.
                </p>
              </div>
            </div>

            {/* Card Misi */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow border border-surface-container-high border-t-4 border-t-tertiary flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-xs font-bold tracking-widest uppercase">
                  Misi Kami
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-serif font-bold">
                  Kopi Berkualitas, Pangan Segar, dan Kehangatan Pelayanan
                </h3>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Seduhan Biji Nusantara:</strong> Bekerja sama langsung dengan petani lokal di Jawa Barat, Gayo, dan Kintamani untuk cita rasa kopi yang otentik.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Sajian Dapur Segar:</strong> Mengolah bahan segar setiap pagi dari resep tungku roti dan racikan dapur alami.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Suasana Suaka Hijau:</strong> Menjaga rumah kaca berkonsep ramah hewan dan terbuka untuk rehat berkualitas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Triptych Showcase: 3 Balanced Vertical Hero Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Koleksi Menu
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1">
              Eksplorasi Rasa di Rumah Kaca
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
              Dari sangraian biji kopi arabika pilihan, hidangan hangat oven tungku, hingga pastry berlapis mentega murni.
            </p>
          </div>
        </div>

        {/* 3-Column Balanced Editorial Triptych Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Specialty Coffee & Roastery */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setActivePage('coffee')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActivePage('coffee'); } }}
            className="group rounded-3xl overflow-hidden bg-surface-container relative p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-surface-container-high/80 cursor-pointer min-h-[480px]"
          >
            {/* Background Image with Cinematic Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Specialty Coffee Roastery"
                className="w-full h-full object-cover botanical-img group-hover:scale-108 transition-transform duration-700 ease-out"
                src="/images/img_2.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/20 pointer-events-none" />
            </div>

            {/* Top Pill & Micro Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-surface/90 text-primary font-label-sm text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                Single-Origin &amp; Cold Brew
              </span>
              <span className="text-on-primary/85 font-mono text-xs font-medium">
                Batch #4
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4 pt-16">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-on-primary font-bold tracking-tight">
                  Specialty Coffee
                </h3>
                <p className="text-on-primary/90 text-sm leading-relaxed">
                  Seduhan pour-over dan cold brew dari biji arabika pegunungan nusantara dengan profil rasa floral, madu hutan, dan buah segar yang bersih.
                </p>
              </div>

              {/* Flavor Tag Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Honey Geisha
                </span>
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Aceh Gayo
                </span>
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Nitro Cascara
                </span>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center gap-2 text-primary-fixed font-bold text-sm group-hover:gap-3 transition-all">
                <span>Jelajahi Pilihan Kopi</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Botanical Food */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setActivePage('food')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActivePage('food'); } }}
            className="group rounded-3xl overflow-hidden bg-surface-container relative p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-surface-container-high/80 cursor-pointer min-h-[480px]"
          >
            {/* Background Image with Cinematic Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Botanical Food Plates"
                className="w-full h-full object-cover botanical-img group-hover:scale-108 transition-transform duration-700 ease-out"
                src="/images/img_8.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/20 pointer-events-none" />
            </div>

            {/* Top Pill & Micro Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-surface/90 text-primary font-label-sm text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                Dapur &amp; Hasil Bumi
              </span>
              <span className="text-on-primary/85 font-mono text-xs font-medium">
                Segar Tiap Pagi
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4 pt-16">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-on-primary font-bold tracking-tight">
                  Botanical Food
                </h3>
                <p className="text-on-primary/90 text-sm leading-relaxed">
                  Sandwich brioche leleh, sourdough panggang renyah, dan pasta buatan tangan dari bahan segar petani lokal setiap hari.
                </p>
              </div>

              {/* Flavor Tag Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Wagyu Sourdough
                </span>
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Handmade Pesto
                </span>
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Truffle Mushroom
                </span>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center gap-2 text-primary-fixed font-bold text-sm group-hover:gap-3 transition-all">
                <span>Lihat Hidangan Dapur</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: Artisan Pastry */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setActivePage('pastry')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActivePage('pastry'); } }}
            className="group rounded-3xl overflow-hidden bg-surface-container relative p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-surface-container-high/80 cursor-pointer min-h-[480px]"
          >
            {/* Background Image with Cinematic Gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Artisan Pastry &amp; Viennoiserie"
                className="w-full h-full object-cover botanical-img group-hover:scale-108 transition-transform duration-700 ease-out"
                src="/images/img_1.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/55 to-primary/20 pointer-events-none" />
            </div>

            {/* Top Pill & Micro Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-surface/90 text-primary font-label-sm text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
                Oven Pagi Fajar
              </span>
              <span className="px-2.5 py-1 rounded-full bg-secondary text-on-secondary text-[10px] font-bold flex items-center gap-1 shadow-xs">
                <Icon name="local_fire_department" className="w-3 h-3" />
                <span>Hangat 06.00</span>
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4 pt-16">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-on-primary font-bold tracking-tight">
                  Artisan Pastry
                </h3>
                <p className="text-on-primary/90 text-sm leading-relaxed">
                  Croissant mentega berlapis keemasan, kouign-amann karamel garing, dan cruffin pistachio lembut langsung dari oven fajar.
                </p>
              </div>

              {/* Flavor Tag Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Kouign-Amann
                </span>
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Rose Cruffin
                </span>
                <span className="px-2.5 py-1 rounded-full bg-on-primary/15 text-primary-fixed text-xs font-medium">
                  Butter Flaky
                </span>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center gap-2 text-primary-fixed font-bold text-sm group-hover:gap-3 transition-all">
                <span>Pilih Pastry Segar</span>
                <Icon name="arrow_forward" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grounded Barista & Culinary Story */}
      <section id="social-impact" className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 lg:pb-24 scroll-mt-24">
        <div className="bg-primary text-on-primary rounded-3xl p-8 lg:p-14 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md text-xs font-bold uppercase tracking-wider">
                <Icon name="eco" className="w-3.5 h-3.5" />
                <span>Cerita Dari Balik Meja Bar</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-serif leading-tight">
                Merawat Biji Kopi Lokal, <br />
                <span className="italic text-primary-fixed">Menghangatkan Setiap Momen Kunjungan.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed">
                Kami percaya bahwa secangkir kopi terbaik bermula dari kerja keras petani di kebun lereng gunung. Dengan rantai pasok langsung dan pemanggangan mandiri, kami berupaya menghadirkan cita rasa yang jujur serta tempat yang ramah bagi siapapun yang melangkah ke suaka kami.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-on-primary/10">
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">100%</p>
                  <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">Biji Kopi Petani Nusantara</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">5 Titik</p>
                  <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">Suaka Rumah Kaca di 3 Wilayah</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">Setiap Hari</p>
                  <p className="font-body-sm text-body-sm text-on-primary/80 mt-1">Seduhan &amp; Olahan Segar Tiap Fajar</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-primary-container/70 backdrop-blur-md rounded-2xl p-8 border border-on-primary/15 space-y-6">
              <Icon name="format_quote" className="w-8 h-8 text-primary-fixed opacity-70" />
              <p className="font-serif text-title-lg text-title-lg text-on-primary italic leading-relaxed">
                "Kopi yang enak itu penting, tapi suasana yang bikin hati tenang saat kamu menghabiskannya bareng orang terdekat adalah alasan utama kami membangun Garden Coffee."
              </p>
              <div className="pt-2 border-t border-on-primary/15 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container border-2 border-primary-fixed/40">
                  <img
                    alt="Tim Barista Garden Coffee"
                    className="w-full h-full object-cover botanical-img"
                    src="/images/img_16.jpg"
                  />
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-primary font-serif font-bold">
                    Tim Barista &amp; Dapur Suaka
                  </h4>
                  <p className="font-label-sm text-xs text-on-primary-container uppercase tracking-wider">
                    Garden Coffee &amp; Eatery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
