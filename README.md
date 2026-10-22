# KITALU — Kitosan dari Limbah Udang

> **Dari Limbah Laut, Menuju Inovasi Perawatan Luka.**
> *Connecting Waste, Science, and Better Care.*

Prototype web interaktif untuk KITALU: platform ekosistem ekonomi sirkular yang menghubungkan supplier limbah kulit udang, pengolah bahan baku biomaterial, peneliti, mitra produksi, fasilitas kesehatan, serta regulator dan mitra validasi. Dibuat untuk presentasi Lomba Esai 2026 (Universitas Sebelas Maret) dan diskusi dengan calon mitra.

> ⚠️ **Penafian.** KITALU adalah konsep riset. Kandidat pembalut luka berbasis kitosan–alginat–ekstrak pegagan **belum terbukti** menyembuhkan luka, **belum** tersedia untuk penggunaan klinis, dan **belum** memiliki izin edar. Seluruh nama organisasi, angka, harga, dan transaksi di situs ini adalah **data simulasi**. Situs ini bukan pengganti konsultasi tenaga kesehatan.

---

## Menjalankan

Butuh **Node.js 18+** (disarankan 20).

```bash
npm install
npm run dev        # http://localhost:5173
```

Skrip lain:

| Perintah | Fungsi |
|---|---|
| `npm run build` | Pemeriksaan TypeScript + build produksi ke `dist/` |
| `npm run typecheck` | Pemeriksaan TypeScript saja |
| `npm run preview` | Menyajikan hasil build secara lokal |

## Teknologi

React 18 + Vite 5 · TypeScript (strict) · Tailwind CSS 3 · Framer Motion 11 · Lucide React · Recharts 2 · React Router 6 (HashRouter) · LocalStorage.

## Fitur

| Halaman | Isi |
|---|---|
| **Beranda** `/` | Hero SVG interaktif (partikel, garis alir, parallax pointer), ticker pengumuman, statistik demo, masalah & solusi, diagram perjalanan limbah, peta ekosistem mini, dampak potensial, preview marketplace & roadmap, CTA |
| **Edukasi** `/learn` | 5 modul, progress bar, checklist materi, kuis dengan umpan balik, tombol modul berikutnya — progres disimpan lokal |
| **Cara Kerja** `/how-it-works` | Stepper 5 tahap (horizontal desktop / vertikal mobile) dengan input, output, aktor, indikator; gerbang keputusan |
| **Ekosistem** `/ecosystem` | Diagram 6 aktor dengan garis animasi, panel detail aktor, pencocokan mitra (kategori × relasi × lokasi), kirim minat |
| **Marketplace** `/marketplace` | Pencarian, filter kategori/lokasi/aktor, sortir terbaru/relevansi, detail listing, Hubungi Mitra, Ajukan Kolaborasi, tambah listing dengan validasi, ubah status / hapus listing sendiri |
| **Dashboard** `/dashboard` | Sidebar (drawer di mobile): Overview, Aktivitas, Marketplace, Mitra, Edukasi, Roadmap, Pengaturan; grafik Recharts dengan filter waktu & kategori; widget per peran |
| **Roadmap** `/roadmap` | Timeline 5 fase dengan progres gulir; tujuan, aktivitas, output, indikator, risiko, gerbang keputusan. Status awal: *usulan* |
| **Tentang** `/about` | Latar belakang, visi, misi, prinsip, ilustrasi “From Waste to Worth”, tim, formulir minat kolaborasi |
| **Pusat Informasi** `/announcements` | Filter jenis pengumuman, detail, jadwal & peluang simulasi |

**Mode pengguna.** Tombol **“Masuk ke Prototype”** membuka pilihan peran — *Supplier*, *Pembuat / Mitra Produksi*, atau *Peneliti / Pembeli Institusional*. Tidak ada login sungguhan; peran dapat diganti kapan saja dan dashboard menyesuaikan:

- Supplier → menerima & menanggapi permintaan simulasi
- Mitra Produksi → melihat ketersediaan bahan baku
- Peneliti → menerbitkan kebutuhan riset ke marketplace

**Data lokal.** Peran, listing, interaksi, progres belajar, dan permintaan disimpan di `localStorage` (kunci berawalan `kitalu.`). Tombol **Reset data demo** ada di footer dan di Dashboard → Pengaturan.

**Fitur yang belum memakai server:** login/akun, pengiriman pesan, notifikasi mitra, pendaftaran kegiatan, formulir minat kolaborasi. Semuanya ditandai “simulasi” di antarmuka.

## Aksesibilitas & tata letak

- HTML semantik, skip link, fokus terlihat, navigasi keyboard, focus trap + Escape pada modal
- `prefers-reduced-motion` dihormati: ticker berhenti (bisa digulir manual), garis alir & partikel dimatikan, transisi dipersingkat
- Ticker dapat dijeda dengan hover, fokus keyboard, atau tombol jeda
- Tidak ada horizontal overflow — diuji di lebar 360, 390, 768, 1024, dan 1440 px
- Palet grafik divalidasi untuk keterbacaan & buta warna (urutan kategori tetap), legenda + tooltip selalu ada

## Struktur proyek

```
src/
  components/
    layout/      Navbar, Footer, Sidebar, AnnouncementTicker, PageHeader, RoleModal, Layout, Logo
    home/        HeroSection, HeroIllustration, ProcessTimeline, EcosystemPreview, HomeSections
    education/   LearningCard, Quiz, ModuleArt
    ecosystem/   EcosystemMap, PartnerCard, PartnerMatcher
    marketplace/ ListingCard, ListingFilters, ListingForm, ListingDetailModal
    dashboard/   MetricCard, Charts, DashboardSections
    roadmap/     RoadmapTimeline
    ui/          Button, Modal, Toast, Badge, Reveal, Counter, SectionHeading, Skeleton, EmptyState, ErrorBoundary
  pages/         Home, Learn, HowItWorks, Ecosystem, Marketplace, Dashboard, Roadmap, About, Announcements, NotFound
  data/          demoData, learningModules, announcements, roadmap, process
  context/       AppContext (role, listing, interaksi, progres, toast)
  hooks/         usePersistentState, useReducedMotion, useDocumentTitle
  lib/           utils
  types/         tipe bersama
```

## Deploy ke GitHub Pages

Proyek memakai `base: './'` dan **HashRouter** (`/#/marketplace`), jadi berjalan di sub-path GitHub Pages tanpa konfigurasi rewrite dan tanpa 404 saat halaman di-refresh.

1. Push repositori ke GitHub (branch `main`).
2. Buka **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` akan build dan deploy otomatis setiap push ke `main`.

Hosting lain (Netlify, Vercel, server statis): unggah isi `dist/` setelah `npm run build`.

Catatan: font Plus Jakarta Sans dimuat dari Google Fonts; jika diblokir, situs otomatis memakai font sistem. Tidak ada API key atau secret di frontend.

## Rujukan konsep

Isi edukasi dan roadmap diadaptasi dari esai *“KITALU (Kitosan dari Limbah Udang): Model Valorisasi Ekonomi Sirkular Perikanan untuk Perawatan Luka Kaki Diabetik di Indonesia”* — Arivianto Al Ghifari Hidayat, Asyraf E Rijal Musthofa, Rendra Dita Adisaputra (Universitas Sebelas Maret, 2026), yang merujuk antara lain Armstrong et al. (2023), Chen et al. (2024, IWGDF), Mirbagheri et al. (2023), Saberian et al. (2024), Yuan et al. (2023), Arribas-López et al. (2022), dan Yoo et al. (2024).
