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
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container-high">
              <img
                alt="Interior of Garden Coffee &amp; Eatery conservatory glasshouse sanctuary"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu6yZWEvKUvJ8YRb5CdnMOHRvJ7zaSZlaSkmBplMpA1y6dV4tlbUjvF8jrcAXs-N-GUalL1M74BshEebMS93rwoRMBEyY77F7yh4bvj5rHW5pnoSYE-Lop4zekZONHb_mwms7b1tkfIv2T3K5y7KvnXCfHjwoJSk7X-RdG1grd67ZAA6nOTXEBkDstx1ogrOwm93-mjjsbdg9f-b7vRKf9BMMW1JVntOPFlVQeJCWm-vbQDSdEIG-t"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Brand Essence / Tiga Pilar Kami */}
      <section id="our-story" className="w-full bg-surface-container-low py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
              Motto &amp; Visi Misi
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1">
              Motto kami
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              Setiap cangkir dan sajian diracik dengan standar kualitas tertinggi, menjunjung kenyamanan dan pengalaman bagi setiap pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Visi */}
            <div className="bg-surface rounded-2xl p-8 lg:p-10 shadow-sm border border-surface-container-high/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
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

            {/* Card Misi */}
            <div className="bg-surface rounded-2xl p-8 lg:p-10 shadow-sm border border-surface-container-high/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="font-label-sm text-label-sm text-secondary font-bold tracking-widest uppercase">
                    Misi Kami
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-serif font-bold">
                    Menyajikan Kopi Lokal Berkualitas, Sajian olahan segar, Tempat yang Teduh
                  </h3>
                </div>
                <ul className="space-y-3.5 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span><strong>Menyeduh kopi berkualitas tinggi:</strong> Menyajikan biji kopi pilihan terbaik dari berbagai pelosok nusantara dengan pengolahan terbaik untuk menonjolkan keaslian cita rasanya.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span><strong>Menyajikan hidangan terbaik:</strong> Mengolah aneka menu makanan dan pastry lezat setiap hari dari bahan berkualitas tinggi untuk memberikan pengalaman makan terbaik untuk anda.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span><strong>Menghadirkan Nuansa Alam yang Asri:</strong> Menyediakan konsep ruang kaca hijau yang teduh dan menenangkan sebagai pelepas penat dari padatnya aktivitas kota.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span><strong>Memberikan Pelayanan yang Ramah dan Hangat:</strong> Menyambut setiap tamu dengan ketulusan dan senyuman ramah, menghadirkan suasana akrab layaknya di rumah sendiri.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Social Impact */}
      <section id="social-impact" className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-24 scroll-mt-24">
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
