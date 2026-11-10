// SOAL 5 PERLENGKAPAN KELAS
// === PENGELOLAAN PERLENGKAPAN KELAS ===

// Data awal
let daftarBarang = [
    "Buku Tulis",
    "Pensil",
    "Penghapus",
    "Spidol"
];

console.log("=== PENGELOLAAN PERLENGKAPAN KELAS ===");
console.log("Jumlah barang awal:", daftarBarang.length);

// Variabel pengujian
let barangBaru = "Pulpen";
let barangDicari = "Penghapus";
let barangDihapus = "Spidol";

// 1. Tambah Barang
console.log("\n[Tambah Barang]");

if (barangBaru.trim() !== "") {
    daftarBarang.push(barangBaru);
    console.log(barangBaru + " berhasil ditambahkan.");
} else {
    console.log("Penambahan ditolak. Nama barang tidak boleh kosong.");
}

// 2. Pencarian Barang
console.log("\n[Pencarian Barang]");

let indeksBarang = daftarBarang.indexOf(barangDicari);

if (indeksBarang !== -1) {
    console.log(barangDicari + " ditemukan pada indeks " + indeksBarang + ".");
} else {
    console.log("Barang tidak ditemukan.");
}

// 3. Hapus Barang
console.log("\n[Hapus Barang]");

let indeksHapus = daftarBarang.indexOf(barangDihapus);

if (indeksHapus !== -1) {
    daftarBarang.splice(indeksHapus, 1);
    console.log(barangDihapus + " berhasil dihapus.");
} else {
    console.log("Penghapusan ditolak. Barang tidak ditemukan.");
}

// 4. Menampilkan Hasil Akhir
console.log("\n=== DAFTAR BARANG TERBARU ===");

if (daftarBarang.length === 0) {
    console.log("Daftar barang kosong.");
} else {
    for (let i = 0; i < daftarBarang.length; i++) {
        console.log((i + 1) + ". " + daftarBarang[i]);
    }
}

// 5. Menampilkan Jumlah Barang
console.log("\nTotal barang:", daftarBarang.length);