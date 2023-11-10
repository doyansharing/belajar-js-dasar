/*
Map
Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/

const myMap = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]);
// Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan elemen keduanya merupakan value.
console.log(myMap);

/* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
  */

// Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India"); // menambahkan
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
3
England
4
India
 */
