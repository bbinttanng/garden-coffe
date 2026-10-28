import React, { useState } from 'react';
import { useModals } from '../context/ModalContext';

export const HomePage = ({ setActivePage }) => {
  const { showToast } = useModals();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      showToast('Selamat Bergabung!', `Undangan buletin botani telah dikirim ke ${email}.`, 'mark_email_read');
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-8 pb-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md">
              <span className="material-symbols-outlined text-sm">spa</span>
              <span>The Botanical Roastery &amp; Culinary House</span>
            </div>

            <h1 className="font-display text-display text-primary leading-tight font-serif">
              Menghubungkan <br />
              <span className="italic text-secondary">Manusia, Kopi, &amp; Alam.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Garden Coffee &amp; Eatery menginisiasi harmoni baru antara ritual kopi spesialti nusantara, kehangatan hidangan artisan dapur kayu, dan ketenangan arsitektur konservatori kaca tropis yang ramah lingkungan.
            </p>

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
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">14</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5">
                  Glasshouse Havens
                </p>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">100%</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5">
                  Direct Trade Volcanic
                </p>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm font-serif text-primary font-bold">Zero</p>
                <p className="font-body-sm text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5">
                  Net Roastery Carbon
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container-high">
              <img
                alt="Interior of Garden Coffee &amp; Eatery conservatory glasshouse sanctuary"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6yZWEvKUvJ8YRb5CdnMOHRvJ7zaSZlaSkmBplMpA1y6dV4tlbUjvF8jrcAXs-N-GUalL1M74BshEebMS93rwoRMBEyY77F7yh4bvj5rHW5pnoSYE-Lop4zekZONHb_mwms7b1tkfIv2T3K5y7KvnXCfHjwoJSk7X-RdG1grd67ZAA6nOTXEBkDstx1ogrOwm93-mjjsbdg9f-b7vRKf9BMMW1JVntOPFlVQeJCWm-vbQDSdEIG-t"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-8 text-on-primary">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed mb-1">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence / Tiga Pilar Kami */}
      <section id="our-story" className="w-full bg-surface-container-low py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Filosofi &amp; Landasan
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1">
              Tiga Pilar Keunggulan Kami
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              Setiap cangkir dan sajian diracik dengan standar kurasi tertinggi, menjunjung integritas alam dan kemahiran tangan pengrajin kuliner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">local_cafe</span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest">
                    01 • THE ROASTERY
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-serif">Specialty Terroir Beans</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Biji kopi microlot arabika bersertifikasi biodinamik yang dipetik selektif dari tanah vulkanik Aceh Gayo, Toraja Sapan, hingga Kintamani. Disangrai dengan profil presisi untuk menonjolkan keaslian karakter rasa tanah asal.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container">
                <button
                  type="button"
                  onClick={() => setActivePage('coffee')}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-semibold hover:text-secondary transition-colors cursor-pointer"
                >
                  <span>Koleksi Coffee</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">bakery_dining</span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest">
                    02 • THE HEARTH &amp; OVEN
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-serif">Artisan Culinary Craft</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Ragi liar dengan fermentasi lambat 48 jam, viennoiserie mentega Prancis yang dipanggang segar setiap subuh, serta racikan dapur botani yang memanfaatkan hasil bumi dataran tinggi nusantara.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container">
                <button
                  type="button"
                  onClick={() => setActivePage('food')}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-semibold hover:text-secondary transition-colors cursor-pointer"
                >
                  <span>Dapur &amp; Pastry Kami</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">potted_plant</span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest">
                    03 • BIOPHILIC HAVEN
                  </span>
                  <h3 className="font-title-lg text-title-lg text-primary font-serif">Living Glasshouse Oasis</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Ruang arsitektural beratapkan kubah kaca dan tanaman pembersih udara. Dirancang sebagai ruang hening di tengah dinamika metropolitan untuk bekerja, berbincang, dan berkontemplasi.
                </p>
              </div>
              <div className="pt-4 border-t border-surface-container">
                <button
                  type="button"
                  onClick={() => setActivePage('lokasi')}
                  className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-semibold hover:text-secondary transition-colors cursor-pointer"
                >
                  <span>Toko kami</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Experience Gateways (4-Grid Cards) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Eksplorasi
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1">
              Gerbang Pengalaman Kami
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
              Temukan ragam inovasi menu kami, seduhan tangan barista, dan lokasi toko dari dekat anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Kurasi biji kopi mikro terroir nusantara dan racikan botani dingin inovatif.
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
                Sajian santap siang hangat, brioche melts leleh, dan pasta buatan tangan.
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

          <div
            onClick={() => setActivePage('lokasi')}
            className="group bg-surface-container rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-4 cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-surface-container-high">
              <img
                alt="Glasshouse Sanctuaries"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-E3vawMIG7HpP37_DioFg7-30VUo0n8h4gMk3X848kw5x7uHH_iIwK5pmCukUGD4j7M7iWkC-1LTQagZmmCMpKOsyIcCeMtZDZv9OuWFlaYMMpfZg_8uKTdpVtQvYDwno1XgeM3bE-Zt_GSTISknvFjE70kheXQbrrsYUmM4wgINJd6iqtpHGYpQuHBJj2geHWlL91rZUGkgSgl5mzu3eh8RF2ZQDVB_RnH7ouZ4kBz_JIEI1ptvm"
              />
            </div>
            <div className="p-2">
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary font-semibold">
                14 Lokasi Konservatori
              </span>
              <h3 className="font-title-lg text-title-lg text-primary font-serif mt-1">Sanctuary Stores</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Ruang hijau tenang di Jakarta, Bandung, dan Bali dengan taman tropis terawat.
              </p>
              <div className="pt-4 flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold group-hover:gap-2.5 transition-all">
                <span>Jelajahi Lokasi</span>
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
                <span>Komitmen Regeneratif Berkelanjutan</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-serif leading-tight">
                Mengembalikan Kebaikan <br />
                <span className="italic text-primary-fixed">Kepada Tanah Nusantara.</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed">
                Setiap ampas kopi (espresso pucks) dari seluruh sanctuary kami dikumpulkan dan diolah 100% menjadi kompos organik hayati bagi kebun botani perkotaan. Kami menjalin kemitraan langsung dengan keluarga petani kopi di dataran tinggi, memastikan kompensasi berkeadilan di atas standar fair-trade global.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-on-primary/10">
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">100%</p>
                  <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">Direct-Trade Kemitraan Petani</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">Zero Waste</p>
                  <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">Siklus Kompos Ampas Kopi</p>
                </div>
                <div>
                  <p className="font-headline-sm text-headline-sm font-serif font-bold text-primary-fixed">Biodynamic</p>
                  <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">Tanah Terbebas Bahan Kimia</p>
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
                  <h4 className="font-title-md text-title-md text-on-primary font-serif">Aris Sastrawan</h4>
                  <p className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">
                    Head of Botanical Roastery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Botanical Club Newsletter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16">
        <div className="bg-surface-container rounded-3xl p-8 lg:p-12 border border-surface-container-high/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>The Conservatory Dispatch</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-serif text-primary">
              Bergabung dengan Botanical Sanctuary Society
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Dapatkan wawasan seduhan sangrai microlot bulanan, undangan khusus mencicipi panen perdana, dan jadwal kurasi pastry akhir pekan langsung ke email Anda.
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan alamat email Anda..."
              className="flex-1 px-4 py-3.5 rounded-xl bg-surface border border-surface-container-high text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20 font-body-sm"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold transition-all shadow-sm shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Berlangganan</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </section>

      {/* Press & Recognition Showcase */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20">
        <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 text-center space-y-8">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
            Pengakuan &amp; Sorotan Media
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-serif max-w-2xl mx-auto">
            "Salah satu destinasi kopi botani paling berkarakter di Asia Tenggara."
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-10 pt-4 text-on-surface-variant font-serif text-lg">
            <span className="hover:text-primary transition-colors font-semibold">ARCHITECTURAL DIGEST</span>
            <span className="hover:text-primary transition-colors font-semibold">MONOCLE HOSPITALITY</span>
            <span className="hover:text-primary transition-colors font-semibold">TATLER INDONESIA</span>
            <span className="hover:text-primary transition-colors font-semibold">SPECIALTY COFFEE ASSOC.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
