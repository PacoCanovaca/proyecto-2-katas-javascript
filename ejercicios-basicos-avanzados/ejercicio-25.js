const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

let pre2000 = 0;
let post2000 = 0;

function countMovies(moviesList) {
  for (const movie of moviesList) {
    if (movie.releaseYear < 2000) {
      pre2000++;
    } else {
      post2000++;
    }
  }
}

countMovies(movies);

console.log(`En la lista, hay ${pre2000} películas de antes de los 2000 y ${post2000} del año 2000 o posteriores`);
