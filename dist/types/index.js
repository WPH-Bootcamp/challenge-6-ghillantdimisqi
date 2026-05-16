"use strict";
// Tugas 1: Definisikan tipe data Book di sini
// Book harus memiliki properti: title, author, dan publicationYear
// Petunjuk: gunakan type alias atau interface untuk mendefinisikan struktur data ini
// Pastikan tipe data untuk setiap properti sudah sesuai dengan kebutuhan
// 2. Buat array penyimpanannya
const daftarBuku = [
    { id: 1, judul: "Belajar TypeScript", penulis: "Developer", tahunTerbit: 2026 },
    { id: 2, judul: "Pemrograman Web", penulis: "Programmer", tahunTerbit: 2025 }
];
// 3. Tambahkan data buku baru
const bukuBaru = {
    id: 3, judul: "Mahir Algoritma", penulis: "Expert", tahunTerbit: 2026
};
daftarBuku.push(bukuBaru);
// 4. Tampilkan hasilnya
console.log(daftarBuku);
