const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

function calculateActorsAges(actorsList) {
  const actorsAge = actorsList;
  for (const actor of actorsAge) {
    actor.age = new Date().getFullYear() - actor.born;
    // Indagando en MDN Web Docs he descubierto el objeto Date, al cual se le puede aplicar el método get FullYear para generar el año actual. En un primer momento lo había hecho incluyendo el número 2025, pero claro, esto cambiará cuando pasemos de año, por lo que el código quedará obsoleto. Sin embargo, con el método que he aplicado, siempre será útil el código.
    delete actor.born;
  }
  console.log(actorsAge);
}

calculateActorsAges(actors);
