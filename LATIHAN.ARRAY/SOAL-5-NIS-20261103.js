// SOAL 5

const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dewa",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

// 1. Jumlah seluruh siswa
console.log("Jumlah siswa:", namaSiswa.length);

// 2. Nama dan nilai siswa pertama
console.log("Siswa pertama:", namaSiswa[0]);
console.log("Nilainya:", nilaiSiswa[0]);

// 3. Nama dan nilai siswa terakhir
console.log("Siswa terakhir:", namaSiswa[namaSiswa.length - 1]);
console.log("Nilainya:", nilaiSiswa[nilaiSiswa.length - 1]);

// 4. Perbarui nilai Budi dari 75 menjadi 88
nilaiSiswa[1] = 88;

// 5. Perbarui nilai Eko dari 70 menjadi 82
nilaiSiswa[4] = 82;

// 6. Nama dan nilai siswa ketiga
console.log("Siswa ketiga:", namaSiswa[2]);
console.log("Nilainya:", nilaiSiswa[2]);

// 7. Tampilkan seluruh isi Array
console.log("Seluruh nama siswa:", namaSiswa);
console.log("Seluruh nilai siswa:", nilaiSiswa);

// Tambahan: Memeriksa indeks
if (namaSiswa[10] === undefined) {
    console.log("Indeks tidak tersedia!");
}