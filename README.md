# Hisabin

Sebuah aplikasi untuk menghitung waktu sholat berdasarkan data awal. Diperuntungkan untuk media pembelajaran Ilmu Falak.

- Live Demo - [Hisabin](https://hisabin.vercel.app/)

## Kegunaan

Sejauh ini hanya bisa memasukan data dengan manual serta menampilan waktu sholat Maghrib, Isya, dan Shubuh. Dengan tambahan menampilkan setiap hasil detail perhitungan.

## What's Next?

Fitur/Fix yang mungkin akan dikerjakan :

- [ ] Memisahkan list inpun jadi komponen
- [ ] Waktu Dzuhur
- [ ] Waktu Ashar
- [ ] Pengambilan koordinat menggunakan GPS
- [ ] Pengambilan koordinat dari API
- [ ] Mode Detail (Pembelajaran) dan Mode Simple
- [ ] Refactor calculate() method

## Tech Stack

Penggunaan Node JS hanya untuk mempermudah development.

> - Node JS
> - Vue / Vue-cli
> - Tailwind CSS
> - [Library Waktu Sholat](https://github.com/tikosewads/IslamicPrayerTimes) - by me

## Setup Proyek Secara Lokal

Pastikan Node Js v 14.15 + telah terinstal.  
Setelah diinstal lalu clone dan instalasi dependency perlu dilakukan dengan command :

     $ npm install

Lalu dijalankan secara lokal dengan command :

    $ npm run serve
