const cartoons = [
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

function findOldestMovie(list) {
  let oldestMovie;
  let oldestYear = 2000;
  for (const cartoon of list) {
    if (cartoon.debut < oldestYear) {
      oldestYear = cartoon.debut;
      oldestMovie = cartoon.name;
    }
  }
  console.log(
    `La película más antigua es ${oldestMovie}, estrenada en el año ${oldestYear}`
  );
}

findOldestMovie(cartoons);

// Al terminar, se me ha ocurrido que era posible ordenar la lista mediante el método sort y usando como criterio la propiedad debut de cada elemento. He estado indagando y he encontrado la manera de hacerlo (en mi caso, para no modificar la lista de cartoons original, he hecho una copia y he trabajado sobre ella). Esta es otra solución viable al problema, esta vez sin usar bucle.

function findOldestMovie2(list) {
  const cartoonsList2 = list;
  cartoonsList2.sort((a, b) => a.debut - b.debut);
  let oldestMovie = cartoonsList2[0].name;
  let oldestYear = cartoonsList2[0].debut;
  console.log(`La película más antigua es ${oldestMovie}, estrenada en el año ${oldestYear}`);
}

findOldestMovie2(cartoons);
