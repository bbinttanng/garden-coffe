import React from 'react';

export const HomePage = ({ setActivePage }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-2 pb-12 lg:pt-4 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.85rem] leading-[1.12] text-primary font-bold tracking-tight">
                Ngopi di Tengah Kota, <br className="hidden sm:inline" />
                <span className="italic font-normal text-secondary">dengan Nuansa Alam.</span>
              </h1>

              <div className="max-w-xl pt-1">
                <span className="block font-label-sm text-[11px] uppercase tracking-widest text-secondary font-bold mb-1.5">
                  Filosofi Kami
                </span>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Garden Coffee &amp; Eatery hadir sebagai tempat hijau di tengah kota menyajikan kopi terbaik dari petani lokal dan hidangan dari dapur segar, dalam rumah kaca dengan nuansa alam untuk menemani waktu istirahat anda.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setActivePage('lokasi')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Kunjungi Lokasi Kami</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 max-w-lg border-t border-surface-container-high/60">
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">5</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5 font-semibold">
                  Toko kami
                </p>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">100%</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5 font-semibold">
                  Biji kopi Petani Lokal
                </p>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">Setiap hari</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5 font-semibold">
                  Sajian dan seduhan segar
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.5] bg-surface-container-high border border-surface-container-high/60">
              <img
                alt="Interior of Garden Coffee &amp; Eatery conservatory glasshouse sanctuary"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                src="/hero-garden-coffee.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence / Tiga Pilar Kami */}
      <section id="our-story" className="w-full bg-surface-container-low py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Highlighted Motto Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/70 text-on-secondary-fixed text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Motto &amp; Visi Misi</span>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-surface-container-high border-l-4 border-l-primary shadow-xs space-y-2">
              <span className="block font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                Motto Kami
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-primary font-medium leading-relaxed">
                "Setiap cangkir dan sajian diracik dengan standar kualitas tertinggi, menjunjung kenyamanan dan pengalaman bagi setiap pelanggan."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Visi - Emerald Accent */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow border border-surface-container-high border-t-4 border-t-primary flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/60 text-primary font-label-sm text-[11px] font-bold tracking-widest uppercase">
                    Visi Kami
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-serif font-bold">
                    Menjadi Tempat Singgah Favorit di Tengah Kota dengan Kopi Nusantara, Hidangan Segar, dan Keasrian Alam
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Menjadikan Garden Coffee &amp; Eatery sebagai ruang singgah hijau utama di tengah perkotaan tempat setiap orang dapat beristirahat, bekerja, dan berkumpul dengan nyaman sambil menikmati seduhan kopi terbaik dari barista kami serta sajian segar dalam suasana ruang yang asri dan menenangkan.
                </p>
              </div>
            </div>

            {/* Card Misi - Warm Amber Accent */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow border border-surface-container-high border-t-4 border-t-tertiary flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-[11px] font-bold tracking-widest uppercase">
                    Misi Kami
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-serif font-bold">
                    Menyajikan Kopi Lokal Berkualitas, Sajian olahan segar, Tempat yang Teduh
                  </h3>
                </div>
                <ul className="space-y-3.5 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Menyeduh kopi berkualitas tinggi:</strong> Menyajikan biji kopi pilihan terbaik dari berbagai pelosok nusantara dengan pengolahan terbaik untuk menonjolkan keaslian cita rasanya.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Menyajikan hidangan terbaik:</strong> Mengolah aneka menu makanan dan pastry lezat setiap hari dari bahan berkualitas tinggi untuk memberikan pengalaman makan terbaik untuk anda.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Menghadirkan Nuansa Alam yang Asri:</strong> Menyediakan konsep ruang kaca hijau yang teduh dan menenangkan sebagai pelepas penat dari padatnya aktivitas kota.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-tertiary mt-2 shrink-0" />
                    <span><strong>Memberikan Pelayanan yang Ramah dan Hangat:</strong> Menyambut setiap tamu dengan ketulusan dan senyuman ramah, menghadirkan suasana akrab layaknya di rumah sendiri.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experience Gateways (3-Grid Cards: Coffee, Food, Pastry) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Eksplorasi
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1">
              Temukan pengalaman terbaik anda
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
              Cari ragam inovasi menu kami, seduhan coffee kami, dan racikan dapur segar dari dekat anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            onClick={() => setActivePage('coffee')}
            className="group bg-surface-container rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-4 cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-high">
              <img
                alt="Artisanal Coffee &amp; Roastery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxy3vtevWnY_khG4iKiSs_W3FmyZq4d3coXk6wdNn1__gGFiWqejK-T_mZIpWgncGEwntiIOaWZcb26IDNQrN8Z6r9ZJG_x5I8GllzcwY9owrGOqglAkUSQ-i47DNRAvGeQIqGvJn6H9Tfk-Tsz5wKPGhL4_3UHXLNV0thflY9vvSxaTOA8kL0IR13oFQkyC5hHDHsied_FFPCQKNXDB-uxkmwxuYufOO7bw5mqt8Ts6MK40JZIHK2"
              />
            </div>
            <div className="p-2">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Single-Origin &amp; Cold Brew
              </span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif mt-1">Specialty Coffee</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Kopi segar dan kaya rasa untuk menemani hari Anda.
              </p>
              <div className="pt-4 flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold group-hover:gap-2.5 transition-all">
                <span>Jelajahi Coffee</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => setActivePage('food')}
            className="group bg-surface-container rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-4 cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-high">
              <img
                alt="Farm-to-Table Kitchen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDx20VJDrBbaP0WpG9xSOGcn3ncbg9qw0O1jfFZWRoI3E-jb87OxrM1fiJshCehLEjy2GPslGXJpJVI2RONojNB5FZv9TFe7VrE3O7qjyevpn1gdQ73U3Hiz5Knx64AjhsF6BI75iJbIyd5iI5LBvujJqi80zPaFnkIPaITX-I7TS9WnIj_1dD71xtFhcBBpa5CRRvwIFphePabXdOh9oAE4BYchB0Ztv5SVnC-7u7yZB9BScgIc2"
              />
            </div>
            <div className="p-2">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Kitchen Hearth &amp; Harvest
              </span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif mt-1">Botanical Food</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Sajian santap siang hangat, brioche melts leleh, dan cita rasa terbaik.
              </p>
              <div className="pt-4 flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold group-hover:gap-2.5 transition-all">
                <span>Jelajahi Food</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => setActivePage('pastry')}
            className="group bg-surface-container rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-4 cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-high">
              <img
                alt="Botanical Viennoiserie &amp; Bakes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBUFBsbrDcjNwIPGpSJNB381UIyMV0eyjCEly4XAsmeHu4OcOnImh_t4AfgbUawopIN4sn-VJQyzdGyYYw-1OiaggK2kwSIWnL8B-hX-wx9gENe2Zoe5L_Klu5C5xiFbmc-ToCfyMQ3mupb-WnNNM21bTd7PQm0ys9Wck9B9m9f4iQPG7ELbnDA5h3SVaAqx-YB2NCUi8tP0R9s9JXJDO9my41M1tjnnwkh41L1Nb6O3qhtNNGaqlK"
              />
            </div>
            <div className="p-2">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Handcrafted French Bakehouse
              </span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif mt-1">Artisan Pastry</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Croissant mentega berlapis keemasan, sourdough berpori, dan scone bunga liar.
              </p>
              <div className="pt-4 flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold group-hover:gap-2.5 transition-all">
                <span>Jelajahi Pastry</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Social Impact */}
      <section id="social-impact" className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 lg:pb-24 scroll-mt-24">
        <div className="bg-primary text-on-primary rounded-3xl p-8 lg:p-14 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md">
                <span className="material-symbols-outlined text-sm">eco</span>
                <span>Komitmen kami</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-serif leading-tight">
                Memberikan pengalaman terbaik <br />
                <span className="italic text-primary-fixed">Kepada Setiap Pelanggan</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed">
                Kami berkomitmen memberikan pengalaman terbaik bagi setiap pelanggan melalui sajian kopi berkualitas, suasana yang nyaman dan asri, serta pelayanan yang ramah. Kami ingin setiap kunjungan menjadi momen yang menyenangkan, tempat Anda bisa bersantai, bekerja, atau menghabiskan waktu bersama orang orang terdekat.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-on-primary/10">
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">100%</p>
                  <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">Pengalaman kepada pelanggan</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">Ketenangan</p>
                  <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">menghadirkan ketenangan ditengah kota</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">Hidangan</p>
                  <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">Mkakanan yang kami buat berkualitas tinggi</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-primary-container/60 backdrop-blur-sm rounded-2xl p-8 border border-on-primary/10 space-y-6">
              <span className="material-symbols-outlined text-4xl text-primary-fixed opacity-70">format_quote</span>
              <p className="font-serif text-title-lg text-title-lg text-on-primary italic leading-snug">
                "Bagi kami, kemewahan sejati bukanlah sekadar secangkir kopi yang nikmat, melainkan ketenangan hati mengetahui bahwa setiap helai daun dan biji kopi yang tersaji merawat bumi dan memberdayakan komunitas petani lokal."
              </p>
              <div className="pt-2 border-t border-on-primary/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container">
                  <img
                    alt="Head Roaster"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGwy3lzO7pUPWVLDcDvKPi0D292kQtKa2bcx3NWodkDyxZTgFwvoNoMLoXMgedmtGmR676j2Bmk7RZN_3Cmz0QtZwHLD__PRNYZOOvyh5TnwiNKconcevYjc_ozIJfm8PqoJfKSAJ2D-DtcXh08sFI-77g4nbZYMAcW0ybWikhK7qvl04W3XIz2_kJs4GBj1PfsXfQXz6YMMa_WvazRGY49ce9LR_-mgf9aCGtQc0tWsJ4ThYlUX0N"
                  />
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-primary font-serif">Melinda</h4>
                  <p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">
                    Head of Garden coffee &amp; Eatery
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
