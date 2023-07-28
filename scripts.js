"use strict";

// let $num = prompt("Введите свой возраст", 18);
// let $str = "0";
// let $bool = false;
// let $null = null;
// let $undef;

// let $toNumb = Number($bool);
// console.log($toNumb);

// let $toStr = String($bool);
// let $toBool = Boolean(!$null);
// console.log("toStr-->", $toStr);
// console.log(!!" ");
// console.log(!!0);
// console.log($toBool);

const person = { firstName: "Ilyas", lastName: "Khasakhanov", old: 29 };
const $cars = ["Saab", "Volvo", "BMW"];
// console.log($cars);
$cars.push("AUDI");
// console.log($cars);

// let res = $num < 18 ? "Маленький еще" : $num < 65 ? "Работай" : "Отдыхай";
// alert(res);

// for (let i = 1; i <= 5; ++i) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let d;
// let i = 0;
// do {
//   d = "Число " + i + "\n";
//   i++;
//   console.log(d);
// } while (i < -1);

// for (let car of $cars) {
//   console.log(car);
// }

console.table(person);
console.table($cars);

let a = 10;
let b = 20;

// function sum(a, b) {
//   return a + b;
// }

// let x = sum(1, 2);
// console.log(x);

let sum = (a, b) => a + b;

console.log(sum(10, 15));
