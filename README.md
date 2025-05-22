# SIKAWAN (Sistem Informasi Kader Kesehatan Hewan)

SIKAWAN adalah platform digital yang dirancang untuk optimalisasi pelayanan kesehatan hewan berbasis masyarakat di Kabupaten Sumbawa Barat. Sistem ini memungkinkan kader kesehatan hewan untuk melaporkan dan mengelola kasus kesehatan hewan dengan lebih efisien.

## Fitur Utama

- 📝 Pelaporan Kasus Kesehatan Hewan
- 🌙 Mode Gelap/Terang
- 🔍 Pencarian dan Filter Laporan
- 👥 Manajemen Kader Kesehatan
- 📊 Dashboard Monitoring

## Teknologi

- [Next.js 14](https://nextjs.org/docs/getting-started) - Framework React untuk produksi
- [HeroUI v2](https://heroui.com/) - Komponen UI modern dan aksesibel
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Next-themes](https://github.com/pacocoursey/next-themes) - Tema gelap/terang

## Memulai Pengembangan

1. Clone repositori:
```bash
git clone https://github.com/yourusername/sikawan.git
cd sikawan
```

2. Install dependencies:
```bash
npm install
```

3. Copy file environment dan sesuaikan dengan konfigurasi lokal:
```bash
cp .env.example .env
```

4. Jalankan migrasi database:
```bash
npx prisma migrate dev
```

5. Jalankan development server:
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser untuk melihat hasilnya.

## Struktur Proyek

```
app/                # Routing dan halaman Next.js
├── api/           # API endpoints
├── lapor/         # Halaman form pelaporan
└── laporan/       # Halaman daftar laporan
components/        # Komponen React yang dapat digunakan kembali
config/           # Konfigurasi aplikasi
lib/             # Utilitas dan helper
types/           # TypeScript type definitions
```

## Dikembangkan Oleh

DINAS PERTANIAN KABUPATEN SUMBAWA BARAT

