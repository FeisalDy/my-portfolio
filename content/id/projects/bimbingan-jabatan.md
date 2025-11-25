---
title: "Bimbingan Jabatan – Kementerian Ketenagakerjaan RI"
date: "2025-03-13"
description: "Transformasi layanan bimbingan karir dari tatap muka menjadi layanan digital yang terintegrasi dengan ekosistem SIAPkerja."
cover: "/images/bimbingan-jabatan/cover-bimbingan-jabatan.webp"
tags: ["Angular", "Tailwind", "Ionic", "NgRx", "Algolia", "JanZZ"]
demo: "https://bimbinganjabatan.kemnaker.go.id/"
---
### Deskripsi Singkat

Bimbingan Jabatan adalah layanan digital yang memindahkan proses konsultasi karir yang sebelumnya tatap muka menjadi sepenuhnya online. Melalui platform SIAPkerja, pencari kerja dapat mendaftar, menjadwalkan sesi bimbingan, menerima rekomendasi pelatihan atau lowongan, dan mendapatkan konseling karir tanpa harus datang langsung ke dinas tenaga kerja.

### Peran & Kontribusi

Sebagai Frontend Engineer saya mengerjakan:

- Implementasi alur pendaftaran sampai peserta memperoleh jadwal sesi bimbingan.
- Pembangunan fitur formulir dinamis untuk konselor yang menyesuaikan pertanyaan berdasarkan status peserta.
- Integrasi rekomendasi pelatihan dan lowongan berbasis Algolia dan JanZZ.
- Penyusunan komponen UI dengan Tailwind dan Ionic untuk menjaga konsistensi tampilan.
- Kolaborasi integrasi API dengan SIAPkerja dan layanan lain seperti Karirhub, Skillhub, dan modul profil.

### Tantangan

Project ini menggunakan Angular versi lama yang masih berbasis modular, sementara codebase besar dan kompleks. Banyak fitur berasal dari pengembangan Bimbingan JKP sebelumnya dan menggunakan package private dari vendor tanpa dokumentasi. Untuk memahaminya, saya harus menelusuri logika langsung dari package di node_modules sambil beradaptasi dengan arsitektur lama.

### Solusi Teknis

- Menggunakan NgRx untuk mengatur state aplikasi agar alur data antar halaman tetap stabil.
- Integrasi Algolia dan JanZZ untuk rekomendasi pelatihan dan lowongan berdasarkan profil.
- Pembangunan komponen formulir dinamis yang berubah sesuai riwayat bimbingan peserta.
- Penyesuaian internal package dengan reverse engineering supaya tetap kompatibel dengan alur baru.
- Optimalisasi alur pendaftaran hingga sesi dimulai agar lebih cepat dipahami pengguna.

### Alur Konsultasi

1. Peserta mendaftar.
2. Memilih jadwal yang tersedia.
3. Konselor memulai sesi.
4. Konselor mengisi formulir dinamis sebagai laporan.
5. Sesi selesai dan peserta menerima hasilnya.

### Hasil / Dampak

- Fitur formulir dinamis berhasil dibangun dan digunakan sebagai laporan resmi sesi bimbingan.
- Proses bimbingan yang sebelumnya harus tatap muka kini dapat dilakukan sepenuhnya online.
- Integrasi rekomendasi membuat peserta lebih mudah menemukan pelatihan atau lowongan yang sesuai.
- Layanan menjadi lebih terpusat karena data diambil langsung dari ekosistem SIAPkerja.
