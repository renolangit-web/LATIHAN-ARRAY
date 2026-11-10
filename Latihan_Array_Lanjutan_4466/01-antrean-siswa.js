// SOAL 1 ANTREAN SISWA
const antreanSiswa = ["Andi", "Budi", "Citra"];

// 1. Menampilkan antrean awal dan jumlah siswa
console.log("Antrean awal:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

// 2. Menambahkan Deni di akhir antrean
antreanSiswa.push("Deni");
console.log("Setelah push(Deni):", antreanSiswa);

// 3. Menambahkan Eka di awal antrean
antreanSiswa.unshift("Eka");
console.log("Setelah unshift(Eka):", antreanSiswa);

// 4. Menghapus siswa pertama
const siswaDihapusAwal = antreanSiswa.shift();
console.log("Siswa yang dihapus dari awal:", siswaDihapusAwal);
console.log("Antrean setelah shift():", antreanSiswa);

// 5. Menghapus siswa terakhir
const siswaDihapusAkhir = antreanSiswa.pop();
console.log("Siswa yang dihapus dari akhir:", siswaDihapusAkhir);
console.log("Antrean setelah pop():", antreanSiswa);

// 6. Menampilkan antrean akhir dan jumlah siswa
console.log("Antrean akhir:", antreanSiswa);
console.log("Jumlah siswa tersisa:", antreanSiswa.length);