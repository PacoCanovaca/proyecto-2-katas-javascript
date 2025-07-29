const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

function averageMovieDuration(list) {
  let totalDuration = 0;
  for (const movie of list) {
    totalDuration += movie.duration;
  }
  let averageMinutes = Math.trunc(totalDuration / list.length);
  let remainderSeconds = totalDuration % list.length;
  // He aprovechado lo aplicado en el ejercicio 28 para no generar minutos con decimales incoherentes (mayores que 60). Se podría incluso rizar más el rizo generando las horas, los minutos y los segundos.
  if (remainderSeconds === 0) {
    console.log(`La duración promedio de las películas es de ${averageMinutes} minutos`);
  } else {
    console.log(`La duración promedio de las películas es de ${averageMinutes} minutos y ${remainderSeconds} segundos`);
  }

  // Hay casos concretos, como este, en el que los segundos en el promedio son 0. Para ello, he programado también un condicional que hace que el mensaje que se lanza por consola sea más coherente (sin él, se lanzaba "La duración promedio de las películas es de 139 minutos y 0 segundos", lo cual queda un poco raro)
}

averageMovieDuration(movies);

// Al final he decidido rizar más el rizo como he comentado anteriormente, añadiendo también el cambio a horas 🤣

function averageMovieDuration2(list) {
  let totalDuration = 0;
  for (const movie of list) {
    totalDuration += movie.duration;
  }
  let averageMinutes = Math.trunc(totalDuration / list.length);
  let remainderSeconds = totalDuration % list.length;
  let averageHours = Math.trunc(averageMinutes / 60);
  let remainderMinutes = averageMinutes % 60;
  if (remainderSeconds === 0 && remainderMinutes === 0) {
    console.log(`La duración promedio de las películas es de ${averageHours} horas`);
  } else if (remainderSeconds === 0 && remainderMinutes !== 0) {
    console.log(`La duración promedio de las películas es de ${averageHours} horas y ${remainderMinutes} minutos`);
  } else if (remainderSeconds !== 0 && remainderMinutes === 0) {
    console.log(`La duración promedio de las películas es de ${averageHours} horas y ${remainderSeconds} segundos`);
  } else {
    console.log(`La duración promedio de las películas es de ${averageHours} horas, ${remainderMinutes} minutos y ${remainderSeconds} segundos`);
  }
}

averageMovieDuration2(movies);
