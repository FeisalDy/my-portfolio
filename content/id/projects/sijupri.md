---
title: "SIJUPRI - Sistem Informasi Jabatan Fungsional Perdagangan Republik Indonesia"
date: "2025-01-15"
description: "Inovasi Digital untuk Kemudahan Pengelolaan Jabatan Funfsional Perdagangan di Lingkungan Kementerian Perdagangan."
cover: "/images/sijupri/cover-sijupri.webp"
tags: ["Angular", "Bootstrap", "RxJS", "AG Grid", "Chart.js", "Leaflet"]
demo: "http://sijupri.kemendag.go.id/"
news:
  - label: "SIJUPRI: Inovasi Digital untuk Kemudahan Pengelolaan JF Perdagangan"
    url: "https://pusbinjfdag.kemendag.go.id/berita/sijupri-inovasi-digital-untuk-kemudahan-pengelolaan-jf-perdagangan"
---
SIJUPRI dibangun untuk menyatukan proses pembinaan Jabatan Fungsional Perdagangan dalam satu sistem. Sebelum itu, pemantauan kinerja dan uji kompetensi dilakukan secara manual dan tersebar. Proyek ini menuntut sistem yang cepat, stabil, dan mudah dipakai.

### Peran & Kontribusi

Sebagai Frontend Engineer, saya bertanggung jawab pada:

- Arsitektur frontend dan alur komunikasi data.
- Implementasi UI yang konsisten dengan design system.
- Integrasi modul SIAP, AKP, FORMASI, dan UKOM.
- Pembangunan komponen reusable agar pengembangan lebih cepat dan rapi.

### Tantangan

Waktu pengembangan tersisa hanya dua bulan dengan sebagian besar modul belum selesai. Ini juga proyek pertama saya menggunakan Angular, ditambah versi Angular yang digunakan bukan versi terbaru sehingga dokumentasi tidak selalu relevan. Adaptasi harus cepat supaya pengembangan tetap maju.

### Solusi Teknis

- Membuat komponen reusable (button, toast, dialog) dan service untuk menjaga konsistensi logika.
- Memanfaatkan **RxJS** untuk alur data, **AG Grid** untuk tabel besar, **Chart.js** untuk grafik, **Leaflet** untuk peta, dan **Firebase** untuk kebutuhan tambahan.
- Memecah modul menjadi unit kecil supaya stabil saat dikerjakan paralel.
- Menjaga integrasi API lewat komunikasi rutin dengan backend untuk menangani perubahan dan bug.

### Modul Terkompleks: UKOM

Modul UKOM memiliki alur terpanjang:

1. Pendaftaran peserta.
2. Verifikasi administrasi dengan proses revisi.
3. Pembuatan kelas uji kompetensi dan penentuan soal.
4. Peserta mengerjakan ujian.
5. Admin mengimpor nilai tambahan.
6. Sistem menghasilkan status kelulusan peserta.

Alurnya harus stabil karena digunakan ratusan peserta dalam waktu bersamaan.

### Hasil / Dampak

- Semua modul selesai tepat waktu, bahkan lebih cepat dari jadwal.
- Modul UKOM berjalan stabil saat diakses lebih dari 400 peserta dari seluruh Indonesia.
- Proses uji kompetensi dan pembinaan karir menjadi lebih cepat, terpusat, dan mudah dikelola.
- Sistem membantu meningkatkan akurasi data dan akuntabilitas pembinaan JF Perdagangan.
