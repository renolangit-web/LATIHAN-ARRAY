// SOAL 4

const daftarProduk = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Flashdisk",
    "Headset",
    "Webcam"
];

console.log("Jumlah produk:", daftarProduk.length);

console.log("Indeks produk terakhir:", daftarProduk.length - 1);

console.log("Nama produk terakhir:", daftarProduk[daftarProduk.length - 1]);

console.log(
    "Produk tengah sebelah kiri:",
    daftarProduk[Math.floor((daftarProduk.length - 1) / 2)]
);