'use strict';

const numberOfFilms = prompt('how much films have you seen?', '5');


const personalMovieDB = {
  count: +numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false,
};