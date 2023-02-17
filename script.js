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

const buildSomething = function (buildingBlock, estimation, callback) {
  console.log(buildingBlock + " build started ...");
  setTimeout(function () {
    if (true) {
      callback(buildingBlock, "ready");
    } else {
      callback(buildingBlock, "not ready");
    }
  }, estimation);
};

buildSomething("Foundation", 1000, function (buildingBlock, status) {
  let buildingBlocks = buildingBlock;
  console.log(`${buildingBlocks} are ${status}`);

  if (status === "ready") {
    buildSomething("Walls", 2000, function (buildingBlock, status) {
      buildingBlocks += `, ${buildingBlock}`;
      console.log(`${buildingBlocks} are ${status}`);

      if (status === "ready") {
        buildSomething("Roof", 3000, function (buildingBlock, status) {
          buildingBlocks += `, ${buildingBlock}`;
          console.log(`${buildingBlocks} are ${status}`);
          console.log("House is built.");
        });
      }
    });
  }
});
