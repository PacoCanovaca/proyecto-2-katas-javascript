const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

function groupMovies(list) {
  const decades = {
    1980: [],
    1990: [],
    2000: [],
    2010: [],
  };
  for (const movie of list) {
    if (movie.releaseYear >= 1980 && movie.releaseYear < 1990) {
      decades[1980].push(movie.title);
    } else if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
      decades[1990].push(movie.title);
    } else if (movie.releaseYear >= 2000 && movie.releaseYear < 2010) {
      decades[2000].push(movie.title);
    } else if (movie.releaseYear >= 2010 && movie.releaseYear < 2020) {
      decades[2010].push(movie.title);
    }
  }
  console.log(`Películas de los 80: ${decades[1980]}`);
  console.log(`Películas de los 90: ${decades[1990]}`);
  console.log(`Películas de los 2000: ${decades[2000]}`);
  console.log(`Películas de los 2010: ${decades[2010]}`);
}

groupMovies(starWarsMovies);
