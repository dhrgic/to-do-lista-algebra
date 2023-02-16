// const vehicle = {
//   brand: "ford",
//   model: "mustang",
//   color: "red",
//   getSummary: function () {
//     return `Im a ${this.color} ${this.brand} ${this.model}`;
//   },
// };

// const vehicle2 = {
//   brand: "ford",
//   model: "mustang",
//   color: "yellow",
//   getSummary: function () {
//     return `Im a ${this.color} ${this.brand} ${this.model}`;
//   },
// };

// console.log(vehicle);
// console.log(vehicle2);
// console.log(vehicle.getSummary());
// console.log(vehicle2.getSummary());

/*Konstruktori*/

function Vehicle(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.getSummary = function () {
    return `Im a ${this.brand} ${this.model} ${this.color}`;
  };
}

const ferrari = new Vehicle("Ferrari", "Testarosa", "Red");
const ford = new Vehicle("Ford", "Mustang", "Red");
const lambo = new Vehicle("Lamborghini", "Murcielago", "Red");

console.log(ferrari);
console.log(ford);
console.log(lambo);
console.log(lambo.getSummary());
console.log(ford.getSummary());
console.log(ferrari.getSummary());

/*Klasa*/
