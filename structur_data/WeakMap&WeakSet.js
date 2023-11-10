const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 10000);

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/
// Ketika reference objek jonas dihapus dengan mengubahnya menjadi null, seharusnya map tidak lagi menyimpan data user (garbage collected). Namun, kenyataannya data jonas masih tersedia di dalam Map. Artinya, data jonas masih tersimpan di dalam memori sampai kita benar-benar menghapusnya.

// Berbeda jika kita menggunakan WeakMap seperti ini.

const { inspect } = require("util");

const liatCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
  let count = liatCountMap.get(user) || 0;
  liatCountMap.set(user, count + 1);
}

let fadhlan = { name: "fadhlan" };
countUser(fadhlan); // Menambahkan user "fadhlan"

fadhlan = null; // Data object "fadhlan" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(inspect(liatCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/
/*
WeakMap tidak dapat dilihat secara langsung menggunakan console.log. Ini merupakan issue yang terjadi pada Node.js (lihat: https://github.com/nodejs/node/issues/19001). Itulah mengapa kami menggunakan fungsi inspect untuk melihat data yang ada di dalam WeakMap.

Jika hasil output tidak sesuai dengan yang diharapkan pada kode, hal itu disebabkan oleh waktu tunggu yang tidak cukup untuk menunjukkan cara kerja garbage collector. Silakan simak penjelasan pada diskusi berikut: https://www.dicoding.com/academies/256/discussions/156523

Seperti halnya WeakMap, WeakSet adalah versi weak reference dari Set. Perbedaan antara WeakSet dan Set antara lain:

WeakSet tidak bisa menyimpan nilai primitif.
WeakSet bukan iterable dan hanya memiliki method add(), has(), dan delete().
WeakSet tidak memiliki properti size.
*/
