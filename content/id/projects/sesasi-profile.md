---
title: "Website Profile Perusahaan"
date: "2025-04-24"
description: "Website profil perusahaan lengkap dengan manajemen konten, multi-bahasa, dan easter egg mini games."
cover: "/images/sesasi-profile/cover-sesasi-profile.webp"
tags: ["Next.js", "Tailwind", "Golang", "Fiber", "i18n", "Phaser.js"]
demo: "https://sesasi.id/"
---
### Deskripsi Singkat

Website Sesasi dibuat untuk memperkenalkan layanan perusahaan, menampilkan portofolio, dan menyediakan informasi kontak yang mudah diakses. Website ini menjadi etalase utama perusahaan sekaligus pusat informasi bagi calon klien.

### Peran & Kontribusi

Sebagai Fullstack Developer saya mengerjakan:

- Penambahan halaman frontend seperti detail portfolio, gallery, contact form, dan footer baru.
- Implementasi i18n untuk mendukung multi-bahasa.
- Pembangunan backend Fiber (Golang) sebagai API utama.
- Pembuatan autentikasi beserta dashboard CMS.
- CRUD konten untuk customer, social media, portfolio, service, team, dan tools.

### Tantangan

Tantangan utama adalah implementasi **i18n**. Struktur database harus mendukung multi-bahasa tanpa membuat tabel menjadi berantakan atau sulit dikelola. Selain itu, website sebelumnya tidak memiliki dashboard, sehingga semua update dilakukan langsung di kode frontend.

### Solusi Teknis

- Frontend dengan **Next.js** dan **Tailwind** untuk pengembangan cepat dan tampilan yang konsisten.
- Backend dengan **Fiber (Golang)** untuk API ringan dan responsif.
- Desain database multi-bahasa yang tetap sederhana untuk editor.
- Dashboard CMS internal agar konten bisa diperbarui tanpa developer.

### Easter Egg: Retro Mini Games

Selain bagian utama website, saya juga menyisipkan dua mini game retro sebagai **easter egg** yang dapat ditemukan melalui link kecil di footer. Game berjalan langsung di browser menggunakan Phaser.js.

- **Astro Drift**Terinspirasi dari game dinosaur saat Chrome offline. Pemain menghindari obstacle sambil mengejar skor.
- **Zero G Snake**
  Adaptasi Snake bertema luar angkasa. Pergerakan menggunakan logika zero-gravity sehingga pola geraknya tidak linear. Dilengkapi collision detection custom.

Tantangan terbesar di bagian ini adalah **sprite animation**, terutama memastikan animasi tetap halus di berbagai ukuran layar.

### Hasil / Dampak

- Website dapat diperbarui melalui dashboard tanpa menyentuh kode.
- Konten multi-bahasa lebih mudah digunakan dan dikelola.
- Tampilan lebih profesional dan rapi.
- Mini games menjadi elemen kecil yang memberi pengalaman unik bagi pengunjung website.
