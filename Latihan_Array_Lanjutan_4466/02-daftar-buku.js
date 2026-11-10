// SOAL 2 DAFTAR SISWA
const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

// 1. Menampilkan daftar buku sebelum perubahan
console.log("Daftar buku awal:", daftarBuku);

// 2. Mencari indeks buku CSS Dasar
const indeksCSS = daftarBuku.indexOf("CSS Dasar");
console.log("Indeks CSS Dasar:", indeksCSS);

// 3. Mengganti CSS Dasar menjadi CSS Modern
if (indeksCSS !== -1) {
    daftarBuku.splice(indeksCSS, 1, "CSS Modern");
}
console.log("Setelah mengganti CSS:", daftarBuku);

// 4. Menambahkan Git Dasar setelah JavaScript Dasar
const indeksJS = daftarBuku.indexOf("JavaScript Dasar");

if (indeksJS !== -1) {
    daftarBuku.splice(indeksJS + 1, 0, "Git Dasar");
}
console.log("Setelah menambahkan Git:", daftarBuku);

// 5. Menghapus PHP Dasar
const indeksPHP = daftarBuku.indexOf("PHP Dasar");

if (indeksPHP !== -1) {
    daftarBuku.splice(indeksPHP, 1);
}
console.log("Setelah menghapus PHP:", daftarBuku);

// 6. Menampilkan daftar buku setelah perubahan
console.log("Daftar buku akhir:", daftarBuku);

// 7. Menampilkan jumlah buku yang tersisa
console.log("Jumlah buku tersisa:", daftarBuku.length);