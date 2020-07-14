'use strict';

const numberOfFilms = prompt('how much films have you seen?', '5');


const personalMovieDB = {
  count: +numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false,
};


const num = 50;
(num === 50) ? console.log('ok') : console.log('error');

switch (num) {
  case 49:
    console.log('wrong');
    break;
  case 100:
    console.log('wrong');
    break;
  case 50:
    console.log('right');
    break;
  default:
    console.log('next time');
    break;
}

let num = 50;
while (num < 54) {
  console.log(++num);
}