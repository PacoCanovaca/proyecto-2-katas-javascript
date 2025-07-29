const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

function groupGenres(songsList) {
  const genres = {
    metal: [],
    rock: [],
    country: [],
    grunge: [],
    pop: [],
  };
  for (const song of songsList) {
    if (song.genre === "Rock") {
      genres.rock.push(song.title);
    } else if (song.genre === "Metal") {
      genres.metal.push(song.title);
    } else if (song.genre === "Country") {
      genres.country.push(song.title);
    } else if (song.genre === "Grunge") {
      genres.grunge.push(song.title);
    } else if (song.genre === "Pop") {
      genres.pop.push(song.title);
    }
  }
  console.log(`Canciones de metal: ${genres.metal}`);
  console.log(`Canciones de rock: ${genres.rock}`);
  console.log(`Canciones de country: ${genres.country}`);
  console.log(`Canciones de grunge: ${genres.grunge}`);
  console.log(`Canciones de pop: ${genres.pop}`);
}

groupGenres(tracks);
