'use strict';

// const numberOfFilms = prompt('how much films have you seen?', '5');


// const personalMovieDB = {
//   count: +numberOfFilms,
//   movies:{},
//   actors:{},
//   genres:[],
//   privat:false,
// };


// const num = 50;
// (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//   case 49:
//     console.log('wrong');
//     break;
//   case 100:
//     console.log('wrong');
//     break;
//   case 50:
//     console.log('right');
//     break;
//   default:
//     console.log('next time');
//     break;
// }

// let num = 50;
// while (num < 54) {
//   console.log(++num);
// }

// function showFirstMessage() {
//   console.log('hello world');
// }

// showFirstMessage();

// const calc = (a, b) => {return a + b};
// console.log(calc(3, 4));

// function calcSum(a, b) {
//   return a + b;
// }

// console.log( calcSum(3, 2) );

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function() {
//     console.log('test');
//   },
// };

// const {border, bg} = options.colors;
// console.log(border);

// delete options.name;
// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) == 'object') {
//     for (let i in options[key]) {
//       console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// for (let key in options) {
//   if (typeof(options[key]) == 'object') {
//     for (let i in options[key]){
//       console.log(`ключ ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//   console.log(`ключ ${key} имеет значение ${options[key]}`);
//   }
// }

// console.log(Object.keys(options).length);

// const arr = [1, 23, 3, 61, 8];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;

// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);
// products.sort();
// console.log(products.join('; '));


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);

// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 14,
//     e: 15,
// }

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();


// const video = [ 'youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejourna', 'blogger'],
//       interner = [...video, ...blogs, 'vk', 'facebook'];

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

const soldier = {
    health : 400,
    armor: 100
};

const john = Object.create(soldier);

// const John = {
//     health: 100
// }

// John.__proto__ = soldier;

// Object.setPrototypeOf(John, soldier);

console.log(John);