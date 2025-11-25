---
title: "Production Smart Monitoring System"
date: "2025-04-08"
description: "Platform monitoring energi dan produktivitas mesin berbasis IoT untuk pabrik pintar."
cover: "/images/energy-monitoring/cover-energy-monitoring.webp"
tags: ["Next.js", "Express", "PostgreSQL", "MQTT", "RabbitMQ", "Tailwind", "Three.js", "Charts", "Tanstack Query"]
---
### Deskripsi Singkat

Production Smart Monitoring System adalah platform IoT yang memantau konsumsi energi, produktivitas mesin, dan efektivitas produksi secara real-time. Sistem ini digunakan oleh pabrik untuk mendeteksi downtime, membaca performa mesin, dan mengoptimalkan output tanpa harus melakukan investasi mesin baru.

### Peran & Kontribusi

Sebagai Fullstack Developer saya mengerjakan seluruh bagian teknis:

- Perancangan database berbasis PostgreSQL.
- Pengembangan backend Express untuk proses data berskala besar.
- Implementasi frontend Next.js untuk dashboard real-time.
- Integrasi data IoT melalui MQTT dan RabbitMQ.
- Penyusunan visualisasi 3D menggunakan Three.js.
- Pembangunan modul notifikasi otomatis (email + sistem internal).
- Integrasi OAuth2.0 untuk autentikasi.

### Fitur yang Saya Bangun

- **Real-Time Energy Dashboard** yang menampilkan konsumsi energi per mesin.
- **OEE Tracking** untuk memantau performa mesin dan downtime.
- **Notifikasi otomatis** jika terdeteksi anomali, overload, atau konsumsi energi abnormal.
- **Integrasi data IoT** melalui channel MQTT yang dikonsumsi oleh backend.
- **Analisis tren jangka panjang** untuk kebutuhan audit dan optimasi produksi.
- **Tampilan 3D pabrik** dengan Three.js untuk melihat posisi mesin secara visual.

### Tantangan

Volume data sangat besar. Satu mesin IoT mengirim puluhan data setiap menit, sementara jumlah mesin mencapai puluhan. Dalam satu tahun sistem harus menangani jutaan data tanpa kehilangan performa. Arsitektur harus ringan, cepat, dan scalable.

### Solusi Teknis

- Menggunakan **RabbitMQ** untuk menjembatani traffic data IoT yang masuk dari MQTT.
- Memisahkan job berat ke background worker agar backend tetap responsif.
- Optimasi schema database dan penggunaan indexing untuk query historis.
- Batch processing untuk data berfrekuensi tinggi.
- Penggunaan charting ringan dan Tanstack Query untuk update real-time di dashboard.
- Struktur frontend modular dengan Tailwind dan Next.js untuk rendering cepat.

### Hasil / Dampak

- Sistem mampu memproses data besar secara real-time tanpa bottleneck.
- Pabrik dapat memantau konsumsi energi dengan akurat.
- Downtime dan masalah performa mesin terdeteksi lebih cepat.
- Visualisasi 3D membantu operator memahami posisi dan status mesin secara intuitif.
- Manajemen dapat mengambil keputusan berbasis data untuk meningkatkan produktivitas.
