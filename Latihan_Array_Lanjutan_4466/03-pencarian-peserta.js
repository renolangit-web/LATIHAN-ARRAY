// SOAL 3 PENCARIAN PESERTA
const pesertaLomba = [
    "Alya",
    "Bintang",
    "Citra",
    "Daffa",
    "Nabila"
];

const namaDicari = "Citra";

// 1. Memeriksa apakah nama terdaftar
const ditemukan = pesertaLomba.includes(namaDicari);

console.log("=== PENCARIAN PESERTA LOMBA ===");
console.log("Nama:", namaDicari);

if (ditemukan) {
    // 2. Mencari indeks nama peserta
    const indeks = pesertaLomba.indexOf(namaDicari);

    // 3. Menampilkan informasi peserta
    console.log("Status: Terdaftar");
    console.log("Indeks:", indeks);
    console.log("Nomor urut:", indeks + 1);

} else {
    // 4. Jika nama tidak ditemukan
    console.log("Status: Siswa belum terdaftar");
}