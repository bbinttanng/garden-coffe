# Garden Coffee & Eatery — Frontend React + Tailwind CSS

Proyek frontend modern, modular, dan responsif untuk **Garden Coffee & Eatery** (Living Botanical Sanctuary & Culinary House). Dibangun menggunakan **React 18**, **Vite 5**, dan **Tailwind CSS 3** dengan integrasi penuh antar halaman, sistem keranjang global, modal interaktif, dan visual fidelity 100% mengikuti spesifikasi desain (`DESIGN.md`).

---

## 🌿 Fitur Utama

1. **Multi-Page Experience Terintegrasi:**
   - **Home (`/` / `#home`):** Hero editorial, 3 pilar filosofi botani, 4 portal menu utama, dampak regeneratif, dan langganan newsletter.
   - **Coffee (`#coffee`):** Sorotan roast dial spectrum, panen single-origin Panama Honey Geisha, filter roastery, pencarian live, dan kartu langganan biji kopi dua mingguan.
   - **Food (`#food`):** Kisah dapur kayu & kebun hidroponik, filter kategori (Botanical Plates, Hearth Breads, dll), live search, dan kartu culinary highlights.
   - **Pastry (`#pastry`):** 48-hour slow lamination, status oven timer, katalog viennoiserie mentega Prancis, **Interactive 4 & 6-Piece Pastry Gift Box Builder**, dan paket rekomendasi *Morning Sommelier Pairings*.
   - **Lokasi Store (`#lokasi`):** Direktori 5 rumah kaca di Jakarta, Tangerang, Bandung, & Bali. Filter distrik, pemilih wilayah, chip fasilitas (Pet-Friendly, Slow Bar, Drive-Thru, dll), tombol **"Terdekat Saya" (GPS mock)**, **Interactive Map Navigator** dengan pin reaktif & kalkulasi jarak rute, serta pemesanan *Private Glasshouse Event*.

2. **Interaktivitas Global & State Management:**
   - **Baki Pesanan / Cart Drawer:** Slider samping keranjang dengan pemilihan mode santap (*Dine-In*, *Takeaway*, *Eco Delivery*), pengatur jumlah (+/-), hapus item, rincian subtotal/pajak/ongkir, dan persistensi otomatis ke `localStorage` (`garden_coffee_cart_v1`).
   - **Checkout & Digital Receipt:** Modal checkout dengan pemilihan metode pembayaran (QRIS Statis/Dinamis, Virtual Account BCA/Mandiri/BRI, Kartu Kredit) dan pembuatan struk digital otomatis dengan kode unik `#GC-XXXXX` serta tombol direct WhatsApp confirmation.
   - **Pencarian Global (`Ctrl + K` atau `/`):** Modal pencarian cerdas yang mencari seluruh menu kopi, makanan, pastry, dan lokasi sanctuary secara instan dengan navigasi langsung.
   - **Detail Item Pop-up:** Quick view untuk menyesuaikan preferensi suhu (Panas/Dingin), tingkat manis (Normal/Less/None), dan jumlah sebelum masuk baki.
   - **Reservasi Meja Sanctuary:** Modal reservasi meja lengkap dengan nama sanctuary terpilih, tanggal, slot waktu kedatangan, jumlah tamu, dan preferensi area duduk (Glasshouse, Outdoor Pet, dll).
   - **Sistem Notifikasi Toast:** Alert animasi mengambang di pojok layar untuk konfirmasi aksi pengguna secara visual.

---

## 📁 Struktur Direktori

```
D:\Kuliah\garden-coffee-react\
├── dist\                     # Hasil kompilasi siap produksi (vite build)
├── node_modules\             # Dependensi npm terinstal
├── public\                   # Aset publik statis
├── src\
│   ├── components\
│   │   ├── cart\
│   │   │   ├── CartDrawer.jsx        # Baki pesanan slide-over
│   │   │   ├── CheckoutModal.jsx     # Form checkout & metode pembayaran
│   │   │   └── ReceiptModal.jsx      # Struk pembayaran digital & WhatsApp generator
│   │   ├── layout\
│   │   │   ├── Header.jsx            # Sticky navbar dengan badge keranjang & search trigger
│   │   │   ├── Footer.jsx            # Footer editorial botani & concierge
│   │   │   └── MobileNavDrawer.jsx   # Menu navigasi samping responsive mobile/tablet
│   │   ├── modals\
│   │   │   ├── ItemDetailModal.jsx   # Quick view kustomisasi minuman & makanan
│   │   │   ├── SearchModal.jsx       # Modal pencarian instan (Ctrl+K)
│   │   │   └── TableReservationModal.jsx # Reservasi meja suaka rumah kaca
│   │   ├── pastry\
│   │   │   └── PastryBoxBuilder.jsx  # Interactive 4/6-Piece Gift Box Builder
│   │   └── ui\
│   │       └── Toast.jsx             # Notifikasi toast animasi
│   ├── context\
│   │   ├── CartContext.jsx           # Global cart state & localStorage persistence
│   │   └── ModalContext.jsx          # Global modal state & keyboard shortcut listener
│   ├── data\
│   │   ├── catalog.js                # Database 18 item kurasi menu (Coffee, Food, Pastry)
│   │   └── stores.js                 # Database 5 flagship store (koordinat, foto, fasilitas)
│   ├── pages\
│   │   ├── HomePage.jsx              # Landing page utama
│   │   ├── CoffeePage.jsx            # Halaman Specialty Coffee & Roastery
│   │   ├── FoodPage.jsx              # Halaman Farm-to-Table Kitchen
│   │   ├── PastryPage.jsx            # Halaman Artisan Viennoiserie & Box Builder
│   │   └── LokasiPage.jsx            # Halaman Direktori Lokasi & Interactive Map
│   ├── App.jsx                       # Root routing & layout composition
│   ├── index.css                     # Tailwind directives, font, & glass styling
│   └── main.jsx                      # Entry point React 18
├── index.html                        # HTML template dengan Playfair Display & Material Icons
├── package.json                      # Konfigurasi dependensi React, Vite, Tailwind
├── postcss.config.js                 # Konfigurasi Tailwind & Autoprefixer
├── tailwind.config.js                # Custom color tokens dari DESIGN.md
└── vite.config.js                    # Konfigurasi Vite dev server
```

---

## 🚀 Cara Menjalankan Project

### 1. Masuk ke folder proyek
Buka PowerShell atau Command Prompt:
```bash
cd D:\Kuliah\garden-coffee-react
```

### 2. Jalankan Server Development
```bash
npm run dev
```
Buka peramban (browser) di:
```
http://localhost:3000
```

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di folder `dist/` dan siap dideploy ke platform hosting statis apa pun (Vercel, Netlify, GitHub Pages, Firebase Hosting).

### 4. Preview Hasil Build
```bash
npm run preview
```

---

## 🎨 Palet Warna & Tipografi

- **Primary:** `#003629` (Deep Botanical Green)
- **Primary Container:** `#1b4d3e` (Deep Forest)
- **Secondary:** `#45664e` (Sage Foliage)
- **Tertiary:** `#521f00` (Earthy Terracotta)
- **Surface / Background:** `#fcf9f3` (Warm Conservatory Cream)
- **Font Display / Headline:** `Playfair Display` (Serif editorial)
- **Font Body / Label:** `Plus Jakarta Sans` (Clean geometric sans-serif)
- **Iconography:** `Google Material Symbols Outlined`
