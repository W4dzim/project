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

let counter = 0;
for (let key in options) {
  if (typeof(options[key]) == 'object') {
    for (let i in options[key]) {
      console.log(`свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}
console.log(counter);