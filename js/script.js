"use strict";


const numberOfFilms = prompt('how much films have you seen?', '5');

const personalMovieDB = {
  count: +numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false,
};

// for (let i = 0; i < 2; i++) {
//   let ansF;
//   let ansS;
//   while (true) {
//     ansF = prompt('last watched film?');
//     if(ansF == '' || ansF == null || ansF.length > 50){      
//       continue;
//     } else {
//       break;
//     }
//   }
//   while (true) {
//     ansS = prompt('your rate?');
//     if (isNaN(ansS)) {
//       continue;
//     } else {
//       break;
//     }
//   }
//   personalMovieDB.movies[ansF] = ansS;
// }

for (let i = 0; i < 2; i++) {
  const a = prompt('last movie?'),
        b = prompt('your rate?');
  if (a != null && b != null && a != '' && a.length < 30 && !isNaN(b)) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    i--;
    console.log('error');
  }

}




if (personalMovieDB.count < 10) {
  alert('pretty few movies watched');
} else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
  alert('you are classical spectator');
} else {
  alert('fuck off');
}
