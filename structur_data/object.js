const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user["age"]} tahun`);

/* output
  Halo, nama saya Luke Skywalker
  Umur saya 19 tahun
  */

const peler = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

console.log(`Halo, nama saya ${peler.firstName} ${peler.lastName}`);
console.log(`Umur saya ${peler.age} tahun`);
console.log(`Saya berasal dari ${peler["home world"]}`);

/* output
  Halo, nama saya Luke Skywalker
  Umur saya 19 tahun
  Saya berasal dari Tattooine
  */

//========== MODIFIKASI OBJECT ============//

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
delete spaceship.manufacturer; // hapus properti manufacturer dalam const spaceship
console.log(spaceship);

/* output
  {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1300,
    color: 'Glossy red'
  }
   */
