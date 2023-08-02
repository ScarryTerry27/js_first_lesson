// "use strict";

// // let $num = prompt("Введите свой возраст", 18);
// // let $str = "0";
// // let $bool = false;
// // let $null = null;
// // let $undef;
// // let $toNumb = Number($bool);
// // console.log($toNumb);
// // let $toStr = String($bool);
// // let $toBool = Boolean(!$null);
// // console.log("toStr-->", $toStr);
// // console.log(!!" ");
// // console.log(!!0);
// // console.log($toBool);
// // const person = { firstName: "Ilyas", lastName: "Khasakhanov", old: 29 };
// // const $cars = ["Saab", "Volvo", "BMW"];
// // // console.log($cars);
// // $cars.push("AUDI");
// // console.log($cars);
// // let res = $num < 18 ? "Маленький еще" : $num < 65 ? "Работай" : "Отдыхай";
// // alert(res);
// // for (let i = 1; i <= 5; ++i) {
// //   console.log(i);
// // }
// // let i = 0;
// // while (i < 10) {
// //   i++;
// //   console.log(i);
// // }
// // let d;
// // let i = 0;
// // do {
// //   d = "Число " + i + "\n";
// //   i++;
// //   console.log(d);
// // } while (i < -1);
// // for (let car of $cars) {
// //   console.log(car);
// // }
// // console.table(person);
// // console.table($cars);
// // let a = 10;
// // let b = 20;
// // // function sum(a, b) {
// // //   return a + b;
// // // }
// // // let x = sum(1, 2);
// // // console.log(x);
// // let sum = (a, b) => a + b;
// // console.log(sum(10, 15));

// let list_result = [];
// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) continue;
//   list_result.push(i);
// }

// function sqrt(x) {
//   return x ** 2;
// }

// function fib(a) {
//   return a <= 1 ? a : fib(a - 1) + fib(a - 2);
// }

// console.log(fib(7));

// let sum = () => 15 + 22;

// console.log(sum());

// console.log("Hello");
// [1, 3, 5, 7, 9, 11, "Hello"].forEach((element) => console.log(element)); // перебор элеменетов

// let $pi = Math.PI;
// console.log($pi);
// let $floor = Math.ceil(45.45);
// console.log($floor);

// let fruits = ["pineapple"];
// console.log(fruits);
// let autos = new Array();
// let numbers = [
//   [1, 2, 3, 5],
//   [4, 5, 6],
//   [7, 8, 9, 5],
// ];
// let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// fruits.push("apple", "cherry", "pear", "Apple");

// fruits.splice(2, 0, "orange");

// numbers.forEach((element) => console.log(element.length));
// fruits.reverse();

// fruits.unshift("mandarin", "Груша"); // добавляет вначало
// fruits.shift(); // удаляет вначале 1
// let res = fruits.pop(); // удаляет последний
// console.log(res);
// fruits.slice(2, 3);
// console.log(fruits);
// console.log(fruits[0]);
// console.log(newNumbers);
// let start = 0;
// let new_list = newNumbers.reduce((elem, start) => elem + start);
// console.log(new_list);

// let map = newNumbers.map((elem) => elem * 2);
// console.log(map);

// let index = fruits.indexOf("apple");
// console.log(index);
// let lastindex = fruits.lastIndexOf("apple");
// console.log(lastindex);
// let nullindex = fruits.indexOf("ку");
// console.log(nullindex);
// fruits.forEach(console.log);
// newNumbers.reverse();
// console.log(newNumbers);
// newNumbers.sort();
// console.log(newNumbers);
// fruits.sort();
// console.log(fruits);

let all_users = [
  ["Dima", 1234],
  ["Egor", 5678],
  ["NeEgor", 9012],
];

let user_name = prompt("Введите свой username");
let user_psw;
let flag = true;

while (flag) {
  for (let user of all_users) {
    console.log(user);
    if (user.indexOf(user_name) != -1) {
      alert("Ваш логин верный");
      user_psw = Number(prompt("Введите пароль"));
      if (user.indexOf(user_psw) != -1) {
        alert("Удачно");
        flag = false;
      } else {
        alert("Пароль неверный");
      }
    }
  }
}
