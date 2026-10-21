# Rakit Playground — AI Implementation Guidelines

> Dokumen ini adalah sumber acuan utama bagi AI coding assistant saat membuat, mengubah, merefaktor, atau meninjau fitur Playground pada website Rakit.
>
> **Prioritas:** ikuti arsitektur dan konvensi proyek yang sudah ada. Jangan mengarang API package, props, versi dependensi, atau struktur proyek yang belum diverifikasi.

## 1. Tujuan

Rakit Playground memungkinkan pengguna mencoba dan mengedit contoh `@zarr20/rakit-ui` serta `rakit-routes` langsung dari browser tanpa instalasi lokal.

Playground harus:
- Menjalankan kode contoh secara nyata dan menampilkan live preview.
- Menjadi referensi implementasi yang benar, rapi, dan mudah dipahami.
- Konsisten dengan identitas visual website Rakit.
- Ringan, responsif, dan tidak memperlambat halaman dokumentasi.
- Aman terhadap kode yang diubah pengguna.
- Mudah dikembangkan untuk contoh komponen dan fitur baru.

## 2. Aturan kerja AI

Sebelum mengubah kode:

1. Periksa struktur proyek, `package.json`, konfigurasi TypeScript, routing, styling, dan komponen yang sudah tersedia.
2. Ikuti framework, pola arsitektur, naming, import, dan format kode yang digunakan proyek. Jangan mengganti teknologi tanpa alasan yang jelas.
3. Periksa API aktual `@zarr20/rakit-ui` dan `rakit-routes` dari source, tipe, dokumentasi, atau package yang tersedia. Jangan mengasumsikan nama komponen, props, exports, maupun versi.
4. Gunakan dependensi yang sudah terpasang jika memadai. Tambahkan dependensi baru hanya jika memang dibutuhkan.
5. Implementasikan solusi sekecil dan sesederhana mungkin tanpa membuat abstraksi prematur.
6. Jangan mengubah file atau fitur yang tidak terkait dengan kebutuhan.
7. Jika informasi penting tidak tersedia, jelaskan asumsi secara singkat dan pilih solusi yang paling aman. Jangan mengarang API.
8. Setelah perubahan, jalankan pemeriksaan yang tersedia, seperti typecheck, lint, test, dan build. Laporkan pemeriksaan yang berhasil maupun yang belum dapat dijalankan.

## 3. Prinsip utama

- **Correctness:** kode contoh harus sesuai dengan API yang benar-benar tersedia.
- **Consistency:** semua playground mengikuti standar yang sama.
- **Readability:** kode mudah dibaca oleh pengguna dan mudah dipelihara.
- **Minimalism:** tampilkan hanya kode, state, helper, dan dependensi yang diperlukan.
- **Reusability:** gunakan komponen bersama jika ada kebutuhan nyata, bukan sekadar demi abstraksi.
- **Isolation:** error atau kode pengguna tidak boleh merusak halaman dokumentasi.
- **Performance:** editor dan runtime yang berat dimuat hanya saat dibutuhkan.
- **Accessibility:** kontrol dapat digunakan melalui keyboard dan memiliki label yang jelas.
- **Responsive design:** layout berfungsi pada desktop maupun mobile.

## 4. Standar penulisan kode

### 4.1 TypeScript dan React

- Gunakan TypeScript (`.tsx`) untuk contoh React, kecuali topik dokumentasi secara khusus membutuhkan JavaScript.
- Gunakan functional component dan tipe yang jelas.
- Hindari `any`; gunakan tipe aktual atau type inference.
- Gunakan `PascalCase` untuk komponen dan `camelCase` untuk variabel, fungsi, serta handler.
- Gunakan nama yang menjelaskan tujuan, misalnya `isLoading`, `isDisabled`, dan `handleSubmit`.
- Hindari nested ternary dan conditional logic yang sulit dibaca.
- Jangan membuat custom hook, helper, atau file tambahan jika contoh sederhana bisa ditulis langsung dengan jelas.
- Hindari state yang tidak diperlukan dan jangan menduplikasi state yang bisa diturunkan dari nilai lain.
- Hapus import, variabel, dan kode yang tidak digunakan.

### 4.2 Formatting

- Ikuti formatter dan konfigurasi yang sudah ada di repository.
- Jika proyek belum memiliki aturan, gunakan indentasi 4 spasi secara konsisten.
- Susun import secara konsisten mengikuti konvensi proyek.
- Gunakan baris baru dan pemisahan blok secukupnya agar mudah dibaca.
- Jangan mengompres kode secara berlebihan hanya untuk mengurangi jumlah baris.
- Hindari komentar yang hanya mengulang apa yang sudah jelas dari kode. Komentar harus menjelaskan alasan atau perilaku yang tidak langsung terlihat.

### 4.3 Contoh kode

Setiap contoh harus memiliki satu tujuan demonstrasi yang jelas dan kode awal yang dapat dijalankan.

Contoh format berikut hanya ilustrasi gaya. Verifikasi bahwa nama komponen dan props benar-benar tersedia sebelum digunakan:

```tsx
import { Button } from "@zarr20/rakit-ui";

export default function Example() {
    return (
        <Button>
            Click me
        </Button>
    );
}
```

Aturan contoh:
- Utamakan API publik Rakit UI saat mendemonstrasikan Rakit UI.
- Gunakan HTML/CSS standar ketika memang menjadi materi yang sedang dijelaskan.
- Jangan mencampur banyak topik dalam satu contoh.
- Pecah contoh besar menjadi beberapa contoh kecil dengan tujuan yang berbeda.
- Jangan menambahkan data backend, token, secret, atau kredensial produksi.
- Sertakan data dummy yang realistis jika diperlukan.
- Pastikan contoh dapat dijalankan dalam environment playground yang ditentukan.

## 5. Standar struktur playground

Ikuti struktur yang sudah ada di proyek. Untuk implementasi baru yang cukup besar, struktur berikut dapat dijadikan referensi:

```text
src/
├── components/
│   └── playground/
│       ├── RakitPlayground.tsx
│       ├── PlaygroundEditor.tsx
│       ├── PlaygroundPreview.tsx
│       ├── PlaygroundToolbar.tsx
│       └── playground.types.ts
├── examples/
│   ├── button/
│   │   ├── basic.tsx
│   │   └── variants.tsx
│   ├── input/
│   │   ├── basic.tsx
│   │   └── validation.tsx
│   └── routes/
│       ├── basic.tsx
│       └── protected-route.tsx
└── pages/
    └── playground/
        └── index.tsx
```

Struktur ini bukan kewajiban untuk setiap implementasi. Jangan membuat seluruh file tersebut jika kebutuhan masih sederhana.

Tanggung jawab yang disarankan:
- `RakitPlayground`: komposisi editor, preview, dan konfigurasi.
- `PlaygroundEditor`: pengeditan kode.
- `PlaygroundPreview`: hasil eksekusi kode.
- `PlaygroundToolbar`: aksi seperti Reset, Copy, dan Share.
- `playground.types`: tipe konfigurasi yang benar-benar digunakan.
- `examples`: kode awal yang dipakai dokumentasi.

Jangan menaruh semua logika dalam satu komponen besar jika sudah menyulitkan pemeliharaan. Sebaliknya, jangan memecah komponen sederhana menjadi banyak file tanpa manfaat nyata.

## 6. Standar contoh dan metadata

Jika arsitektur mendukung metadata contoh, gunakan format yang konsisten. Setiap contoh idealnya memiliki:
- Judul.
- Deskripsi singkat tentang apa yang didemonstrasikan.
- Kode awal.
- Daftar dependensi tambahan jika ada.
- Informasi file yang diperlukan untuk menjalankannya.

Fitur Reset, Copy, dan Share dapat ditambahkan sesuai kebutuhan produk. Jangan menampilkan kontrol yang belum berfungsi.

Satu contoh harus berfokus pada satu topik. Contoh:
- Button — Basic
- Button — Variants
- Button — Loading
- Input — Basic
- Input — Validation

Jangan membuat metadata atau registry yang kompleks sebelum ada kebutuhan nyata untuk mengelola banyak contoh.

## 7. Sandpack dan runtime

Jika proyek menggunakan Sandpack (`@codesandbox/sandpack-react`):

- Gunakan template yang cocok dengan framework dan bahasa contoh.
- Verifikasi kompatibilitas package Rakit dengan bundler dan runtime browser.
- Pastikan entry point, exports, dan CSS package dapat digunakan oleh playground.
- Gunakan versi dependensi yang kompatibel dan telah diuji. Hindari `latest` untuk contoh dokumentasi resmi yang harus reproducible.
- Jangan menganggap package yang membutuhkan Node.js, filesystem, atau akses server dapat berjalan langsung di browser.
- Gunakan mock untuk API eksternal jika sesuai dan jelaskan batasannya.
- Tampilkan error kompilasi/runtime dengan jelas jika platform mendukungnya.
- Jangan menghapus kode yang sedang diedit pengguna ketika preview gagal.
- Pertahankan kode edit selama sesi berjalan.
- Sediakan fallback yang jelas ketika preview gagal.
- Pastikan perubahan kode tercermin pada preview.

Jangan menganggap nama props dalam contoh generik sebagai API resmi Rakit UI. Selalu periksa API package yang aktual.

## 8. Editor dan interaksi

- Tampilkan nama file yang sedang diedit jika playground mendukung banyak file.
- Gunakan syntax highlighting dan diagnostik TypeScript jika tersedia.
- Semua tombol harus melakukan aksi yang sesuai dengan labelnya.
- Reset harus mengembalikan kode ke contoh awal dan hanya dijalankan setelah aksi pengguna.
- Copy harus menyalin kode yang sedang ditampilkan atau dipilih sesuai definisi fitur.
- Share harus menghasilkan URL atau tautan yang benar-benar dapat dibuka kembali.
- Jangan menambahkan Console, file explorer, atau kontrol tambahan jika tidak diperlukan.
- Hindari inisialisasi banyak instance editor berat secara bersamaan.
- Tampilkan status loading ketika kompilasi atau pemuatan preview membutuhkan waktu.

## 9. Integrasi dokumentasi

### Inline playground

Untuk playground di halaman dokumentasi komponen:
- Utamakan contoh yang ringkas dan langsung terkait dengan topik.
- Jangan memuat editor berat sebelum pengguna membutuhkannya jika lazy loading dapat diterapkan.
- Pertimbangkan tombol atau tab untuk membuka editor interaktif.
- Pastikan layout dokumentasi tetap stabil saat editor dimuat.

### Halaman `/playground`

Untuk playground penuh, tambahkan fitur berdasarkan kebutuhan:
- Editor kode.
- Live preview.
- Navigasi file untuk contoh multi-file.
- Reset, Copy, dan Share.
- Kontrol viewport jika berguna.
- Penanganan error dan loading.

Jangan membuat playground penuh jika kebutuhan saat ini hanya live preview di halaman dokumentasi.

## 10. Desain dan UX

Ikuti design system dan identitas visual Rakit yang sudah ada.

- Gunakan tampilan minimalis, berorientasi developer, dan konsisten dengan website Rakit.
- Gunakan warna lime sebagai aksen sesuai token desain yang sudah ada, bukan membuat palet baru tanpa kebutuhan.
- Gunakan font monospace untuk kode.
- Pisahkan area editor dan preview dengan jelas.
- Hindari toolbar yang terlalu ramai.
- Pastikan layout responsif.
- Pada layar sempit, gunakan tab atau layout bertumpuk.
- Sediakan fokus keyboard yang terlihat, label yang jelas, dan kontrol yang aksesibel.
- Gunakan token atau komponen styling proyek jika tersedia.
- Hindari CSS global yang menyebabkan preview berubah akibat tema dokumentasi.
- Batasi overflow agar kode atau preview tidak merusak layout halaman.

## 11. Performance

- Lazy-load editor dan runtime berat jika memungkinkan.
- Jangan menginisialisasi playground yang belum terlihat atau belum dibuka tanpa alasan.
- Hindari dependensi tambahan yang tidak diperlukan.
- Hindari render ulang yang tidak perlu.
- Jangan mengompilasi ulang kode jika tidak ada perubahan yang relevan, sejauh mekanisme yang digunakan memungkinkan.
- Tetapkan ukuran editor dan batas layout yang sesuai.
- Evaluasi ukuran bundle dan waktu inisialisasi jika playground digunakan pada banyak halaman.

## 12. Keamanan

Anggap kode yang diedit pengguna sebagai kode yang tidak tepercaya.

- Jangan menjalankan kode pengguna dalam konteks aplikasi dokumentasi utama.
- Gunakan mekanisme isolasi yang disediakan platform dan evaluasi batas keamanannya.
- Jangan menganggap iframe biasa sebagai jaminan isolasi yang cukup.
- Evaluasi sandboxing, origin isolation, Content Security Policy (CSP), dan izin yang diberikan sesuai arsitektur.
- Jangan mengekspos secret, token, kredensial, atau environment variable privat ke client.
- Jangan menghubungkan contoh langsung ke backend produksi.
- Validasi data dari URL sebelum digunakan untuk menginisialisasi editor.
- Batasi ukuran kode atau payload yang dapat dibagikan melalui URL.
- Ingat bahwa Base64 dan kompresi bukan enkripsi.
- Untuk API eksternal, gunakan mock atau endpoint demonstrasi yang aman.

## 13. Shareable URL

Jika fitur Share diterapkan:
- Gunakan encoding/kompresi yang sesuai untuk menyimpan kode pada URL.
- Validasi hasil decode dan tangani input yang rusak.
- Batasi panjang payload dan URL.
- Jangan memasukkan rahasia atau data pribadi ke dalam URL.
- Pastikan URL yang dibagikan dapat memulihkan contoh dengan benar.
- Untuk contoh besar, pertimbangkan penyimpanan snippet dengan ID daripada memasukkan seluruh kode ke URL.
- Jangan mengklaim fitur Share selesai sebelum alur membuat dan membuka tautan telah diuji.

## 14. Pengujian dan quality gate

Sebelum menyatakan implementasi selesai, periksa:

### Kebenaran
- [ ] Import sesuai exports package.
- [ ] Props dan tipe sesuai API aktual.
- [ ] Versi dependensi kompatibel.
- [ ] Contoh berjalan pada runtime yang ditentukan.

### Kualitas kode
- [ ] Tidak ada import atau variabel yang tidak digunakan.
- [ ] Tidak ada `any` yang tidak diperlukan.
- [ ] Kode mengikuti formatter dan konvensi repository.
- [ ] Tidak ada abstraksi atau dependensi tanpa alasan.

### Perilaku
- [ ] Preview mencerminkan kode aktual.
- [ ] Loading dan error ditangani.
- [ ] Reset, Copy, dan Share berfungsi jika disediakan.
- [ ] Kode pengguna tidak hilang ketika preview error.

### UX, performa, dan keamanan
- [ ] Layout responsif.
- [ ] Kontrol utama dapat digunakan dengan keyboard.
- [ ] Editor dimuat sesuai kebutuhan.
- [ ] Tidak ada secret atau koneksi produksi.
- [ ] Kegagalan playground tidak merusak dokumentasi.

### Validasi proyek
- [ ] Jalankan typecheck, lint, test, atau build yang tersedia.
- [ ] Periksa perubahan akhir dan pastikan tidak ada modifikasi yang tidak terkait.
- [ ] Laporkan pemeriksaan yang dijalankan beserta hasilnya.
- [ ] Jelaskan secara eksplisit jika ada pemeriksaan yang belum dapat dilakukan.

## 15. Definition of Done

Sebuah playground dianggap selesai apabila:
1. Tujuan demonstrasinya jelas.
2. Kode awal rapi dan dapat dijalankan.
3. API dan versi package sudah diverifikasi.
4. Preview dan interaksi bekerja sesuai spesifikasi.
5. Desain konsisten dengan website Rakit dan responsif.
6. Performa serta keamanan dasar sudah dipertimbangkan.
7. Tidak ada perubahan tidak terkait.
8. Pemeriksaan proyek yang tersedia sudah dijalankan dan hasilnya dilaporkan.

## 16. Instruksi singkat untuk AI

Setiap kali diminta membuat atau mengubah Rakit Playground:

1. Baca dokumen ini dan periksa implementasi serta konvensi repository.
2. Verifikasi API dan dependensi sebelum menulis contoh.
3. Buat solusi paling sederhana yang memenuhi kebutuhan.
4. Ikuti standar kode, UX, performa, dan keamanan di atas.
5. Jangan mengarang API atau mengklaim pengujian yang belum dilakukan.
6. Jalankan pemeriksaan yang tersedia.
7. Laporkan file yang diubah, ringkasan implementasi, hasil validasi, dan keterbatasan yang masih ada.

**Aturan paling penting:** jadikan contoh yang benar-benar berfungsi sebagai acuan. Konsistensi, kebenaran API, keterbacaan, dan kesederhanaan lebih penting daripada membuat playground terlihat kompleks.
