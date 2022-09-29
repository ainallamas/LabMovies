// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDir = moviesArray.map((movies) => movies.director);

  const dirOnce = [];
  for (let i = 0; i < allDir.length; i++)
    if (dirOnce.includes(allDir[i]) == false) {
      dirOnce.push(allDir[i]);
    }
  return dirOnce;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const dramaSteven = moviesArray.filter((movies) => {
    if (
      movies.director === "Steven Spielberg" &&
      movies.genre.includes("Drama")
    )
      return dramaSteven.length;
  });
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scoreSum = 0;
  if (moviesArray.length === 0) return 0;
  scoreSum = moviesArray.reduce((prev, curr) => {
    if (curr.score.length == 0) curr.score = 0;
    return (prev += curr.score);
  }, 0);
  let avg = scoreSum / moviesArray.length;
  let finalScore = parseFloat(avg.toFixed(2));
  return finalScore;
}

//Also:
//function scoresAverage(moviesArray){
//let avg = 0;
//moviesArray.forEach((movies) => {
//avg += movies.score});
//return (avg/moviesArray.length).toFixed(2)
//}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movies) => movies.genre.includes("Drama"));
  if (drama.length === 0) return 0;
  let dramaSum = drama.reduce((previous, current) => {
    if (current.score.length == 0) current.score = 0;
    return (previous += current.score);
  }, 0);

  let avgDrama = dramaSum / drama.length;
  let totalDrama = parseFloat(avgDrama.toFixed(2));
  return totalDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesArrayDup = moviesArray.slice(); //Because "Your function should return a new array containing the movies ordered by the year" -> El sort ens modificarà l'array original, per tant, fem un duplicat.
  moviesArrayDup.sort((after, before) => {
    if (after.year === before.year) {
      if (after.title > before.title) return 1; //return > 0 -> ordenará "after" después que "before"
      if (after.title < before.title) return -1; //return < 0 -> ordenará "before" después que "after"
      if (after.title === before.title) return 0; //return == 0 -> mantiene el orden. 
    }
    if (after.year > before.year) return 1;
    if (after.year < before.year) return -1;
    return 0;
  });
  return moviesArrayDup;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderTwenty = moviesArray.map ((movies) => movies.title).sort();
    orderTwenty.length = 20;
    return orderTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
