"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('how much films have you seen?', '5');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('how much films have you seen?', '5');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms (){
  for (let i = 0; i < 2; i++) {
    const a = prompt('last movie?', 'sadf'),
          b = prompt('your rate?', '4');
    if (a != null && b != null && a != '' && a.length < 30 && !isNaN(b)) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      i--;
      console.log('error');
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('pretty few movies watched');
  } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
    alert('you are classical spectator');
  } else {
    alert('fuck off');
  }
}

detectPersonalLevel();

function showMyDB () {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for(let i = 0; i < 3; i++) {
    let genre = prompt(`what is your favorite genre #${i + 1}`);
    while (genre == '' || genre == null || !isNaN(genre)) {
      genre = prompt(`what is your favorite genre #${i}`);
    }
    personalMovieDB.genres.push(genre);

  }
}

writeYourGenres();

showMyDB();



