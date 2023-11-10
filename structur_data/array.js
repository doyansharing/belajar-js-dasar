let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

//========= memanipulasi data pada array ==========//
const arayDua = ["Cokelat", 42.5, 22, true, "Programming"];

arayDua.push("JavaScript");
console.log(arayDua);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().

const arrayTiga = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(arrayTiga);
/* output
[ Cokelat, 42.5, 22, true ]
*/

// Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.x

const arrayEmpat = ["Cokelat", 42.5, 22, true, "Programming"];

arrayEmpat.shift();
arrayEmpat.unshift("Apple");

console.log(arrayEmpat);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// DELETE

const arrayKelima = ["Cokelat", 42.5, 22, true, "Programming"];

delete arrayKelima[1];
console.log(arrayKelima);

// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode splice() seperti ini:

// SPLICE()

const month = ["January", "March", "April", "May"];
console.log("before splice: ", month);

month.splice(1, 0, "February");
console.log("after splice: ", month);
