const albums = [
  { title: "Led Zeppelin IV", genre: "Rock", duration: 42.19 },
  { title: "The Dark Side of the Moon", genre: "Rock", duration: 42.49 },
  { title: "Back in Black", genre: "Rock", duration: 42.11 },
  { title: "Hotel California", genre: "Rock", duration: 43.08 },
  { title: "Abbey Road", genre: "Rock", duration: 47.23 },
  { title: "Thriller", genre: "Pop", duration: 42.19 },
  { title: "A Night at the Opera", genre: "Rock", duration: 43.08 },
  { title: "The Wall", genre: "Rock", duration: 81.0 },
  { title: "Born to Run", genre: "Rock", duration: 39.26 },
  { title: "The Joshua Tree", genre: "Rock", duration: 50.11 },
];

function addRockDuration(list) {
  let albumsDuration = 0;
  for (const album of list) {
    if (album.genre === "Rock") {
      let minutes = Math.trunc(album.duration);
      let seconds = (album.duration - Math.trunc(album.duration)) * 100;
      let durationSeconds = minutes * 60 + seconds;
      // He hecho todo esto porque, de haber sumado directamente las duraciones, los decimales habrían ido del 0 al 99, por lo que no se habrían sumado como segundos (que van de 0 a 59 antes de pasar al siguiente minuto) y el resultado de la duración habría sido erróneo (se habrían sumado menos minutos de los correctos).
      albumsDuration += durationSeconds;
    }
  }
  let durationMinutes = Math.trunc(albumsDuration / 60);
  let remainderSeconds = albumsDuration % 60;
  console.log(
    `Los álbumes de Rock duran en total ${durationMinutes} minutos y ${remainderSeconds} segundos`
  );
}
// El resultado que se lanzaba si solo dividía entre 60 contenía decimales de base 100 de nuevo, por lo que he decidido usar el operador de resto para obtener los segundos exactos que sobraban de la división entre 60 (obtención de minutos). En esto último caí varios días después haciendo otro ejercicio, y menos mal 😅

addRockDuration(albums);

// En caso de que no hubiera el problema de los minutos y segundos, bastaría con este código:

function addRockDuration2(list) {
  let albumsDuration = 0;
  for (const album of list) {
    if (album.genre === "Rock") {
      albumsDuration += album.duration;
    }
  }
  console.log(`La duración es de ${albumsDuration} minutos`);
}
