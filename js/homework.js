'use strict';

let numberOfFilms;


function start() {
    do {
        numberOfFilms = +prompt('How many movies have you watched so far?', 5);
    }   
    while (numberOfFilms < 1 || isNaN(numberOfFilms));       
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', `fdsfsd${i}`),
              b = prompt('How much do you rate it?', `${i + 3}`);
        if (a !== '' && a !== null && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }        
    }    
}

rememberMyFilms();

function detecetPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('quite a few movies have been viewed');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('you are classical viewer');
    } else if (personalMovieDB.count > 30) {
        console.log('you are film fan');
    } 
}

detecetPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.private){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genre = prompt(`what is your favorite genre at number ${i + 1}?`);
        if (genre != '' && genre != null && isNaN(genre)) {
            personalMovieDB.genres.push(genre);
        } else {
            i--;
        }
    }
}
writeYourGenres();
showMyDB();