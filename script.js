// const markWeight = 78;
// const markHeight = 1.6;

//const { request } = require("express")

// const johnWeight = 92;
// const johnHeight = 1.88;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// if (markBMI > johnBMI) {
//   console.log(`Mark BMI (${markBMI}) is greater than john(${johnBMI})})`);
// } else {
//   console.log(`John BMI (${johnBMI}) is greater than Mark(${markBMI})})`);
// }

// const calAvg = (first, seconde, third) => {
//   return (first + seconde + third) / 3;
// };

// const scoreDolphines = calAvg(44, 23, 71);
// const scoreKoalas = calAvg(65, 54, 49);
// console.log(scoreDolphines, scoreKoalas);

// function checkWinner(scoreDolphines, scoreKoalas) {
//   if (scoreDolphines >= 2 * scoreKoalas) {
//     console.log("Dolphines is winner");
//   } else if (scoreKoalas >= 2 * scoreDolphines) {
//     console.log("Koalas is winner");
//   } else {
//     console.log("no teams wins");
//   }
// }

// checkWinner(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
//   console.log("Dolphines is win");
// } else if (scoreKoalas > scoreDolphines && scoreKoalas >= 100) {
//   console.log("koalas is win");
// } else if (
//   scoreKoalas === scoreDolphines &&
//   scoreDolphines >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Match draw");
// } else {
//   console.log("No one wins");
// }

//const bill = 275;
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// };

// const bill = [125, 555, 44];
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
//console.log(bill, tip);

// const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
// console.log(bill, tip, total);

// bill >= 50 && bill <= 300
//   ? console.log(
//       `tip = ${(bill * 15) / 100} and bill = ${(bill * 15) / 100 + bill}`
//     )
//   : console.log(
//       `tip = ${(bill * 20) / 100} and bill = ${(bill * 20) / 100 + bill}`
//     );

// const jonas = {
//   firstName: "John",
//   lastName: "Duo",
//   birthYear: 1991,
//   age: function () {
//     console.log(this);
//     return 2023 - this.birthYear;
//   },
// };

// console.log(jonas.age());
// console.log(jonas["age"](1991));
// function generate() {
//   let score = Math.round(Math.random(), 2);
//   console.log(score);
//   document.getElementById("score").innerHTML = score;
// }
// const score = Math.round(Math.random(), 2);
// console.log(score);
// function generate() {
//   document.getElementById("score").innerHTML = score;
// }

// function checkScore() {
//   let n = Number(document.getElementById("txtInput").value);
//   if (score === n) {
//     //document.getElementById("message").innerHTML = "Gusse is correct";
//     document.querySelector(".message").textContent = "Gusse is correct";
//   } else {
//     document.getElementById("message").innerHTML = "Gusse is wrong";
//   }
// }

// const arr = [7, 8, 9];
// const arrIndex = [1, 2, ...arr];
// console.log(arrIndex);

// const arr = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Pasta",
//   "Pizza",
//   "Risotto",
//   "Risotto",
// ]);

// console.log(arr);
// console.log(new Set(["j", "o", "n", "a", "s", "o"]));

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();

// function checkDogs(j, k) {
//   const jc = j.slice();
//   jc.splice(0, 1);
//   jc.splice(-2);
//   const dogs = jc.concat(k);
//   dogs.forEach(function (element, i) {
//     if (element >= 3) {
//       console.log("It is a dog");
//     } else {
//       console.log("It is a puppy");
//     }
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);

// alert("Hello");
// setTimeout(() => {
//   console.log("Viral");
// }, 5000);
// alert("Patel");

// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/capital/lisbon");
// request.send();
// //console.log(request.responseText);
// request.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// });

var c = 10;
var a = function () {
  console.log(b);
  var b = 11;
  console.log(b);
};
a();
// function a() {
//   console.log("bye");
// }
