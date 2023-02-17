// const processOrder = function (name, meal, estimation, callback) {
//   const status = `${name}'s ${meal} is preparing!`;
//   callback(status);

//   setTimeout(function () {
//     const status = `${name}'s ${meal} is prepared!`;
//     callback(status);
//   }, estimation);
// };

// console.log("Matilda orders ....");
// processOrder("Matilda", "Cheesburger", 2000, function (status) {
//   console.log(status);
// });

// console.log("Joseph orders ....");
// processOrder("Joseph", "Salad", 10000, function (status) {
//   console.log(status);
// });

// console.log("Tina orders ....");
// processOrder("Tina", "Filet mignon", 8000, function (status) {
//   console.log(status);
// });

// function zbroj(x, y, callback) {
//   const z = x + y;
//   callback(z);
// }

// zbroj(2, 10, function (z) {
//   if (z < 10) {
//     console.log(" Zbroj je manji od 10");
//   } else {
//     console.log("Zbroj je veći od 10");
//   }
// });

// const buildSomething = function (buildingBlock, estimation, callback) {
//   console.log(buildingBlock + " build started ...");
//   setTimeout(function () {
//     if (true) {
//       callback(buildingBlock, "ready");
//     } else {
//       callback(buildingBlock, "not ready");
//     }
//   }, estimation);
// };

// buildSomething("Foundation", 1000, function (buildingBlock, status) {
//   let buildingBlocks = buildingBlock;
//   console.log(`${buildingBlocks} are ${status}`);

//   if (status === "ready") {
//     buildSomething("Walls", 2000, function (buildingBlock, status) {
//       buildingBlocks += `, ${buildingBlock}`;
//       console.log(`${buildingBlocks} are ${status}`);

//       if (status === "ready") {
//         buildSomething("Roof", 3000, function (buildingBlock, status) {
//           buildingBlocks += `, ${buildingBlock}`;
//           console.log(`${buildingBlocks} are ${status}`);
//           console.log("House is built.");
//         });
//       }
//     });
//   }
// });

/*promises*/

// const buildSomething = function (housePart, estimate) {
//   console.log(housePart + " building started...");

//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (true) {
//         resolve("ready");
//       } else {
//         reject("Unexpected error found, building can not be continued!");
//       }
//     }, estimate);
//   });
// };

// buildSomething("Foundations", 1000)
//   .then((status) => {
//     console.log(`Foundations are ${status}`);
//     return buildSomething("Walls", 1000);
//   })
//   .then((status) => {
//     console.log(`Walls are ${status}`);
//     return buildSomething("Roof", 2000);
//   })
//   .then((status) => {
//     console.log(`Roof is ${status}`);
//     return console.log("House is built!");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Ovo će biti neovisno o svemu");
//   });

// Promise 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise 1 resolved.");
  }, 2000);
});

// Promise 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise 2 resolved.");
  }, 5000);
});

// Handling of promisees one after another
// promise2.then(result => console.log(result));

// Handling of promise 1 and 2 in paralell
Promise.all([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Always executed"));
