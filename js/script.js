"use strict";


const numberOfFilms = prompt('how much films have you seen?', '5');

const personalMovieDB = {
  count: +numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false,
};

for (let i = 0; i < 2; i++) {
  // let queFirst = prompt('last watched film?');
  // let queSec = prompt('your rate?');
  personalMovieDB.movies[prompt('last watched film?')] = prompt('your rate?');
}