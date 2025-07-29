const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1961 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(list) {
  const xMen2 = list;
  xMen2.sort((a, b) => a.year - b.year);
  let oldestXMen = xMen2[0].name;
  let oldestXMenYear = xMen2[0].year;
  console.log(`El xMen más antiguo es ${oldestXMen}, el cuál apareció en el año ${oldestXMenYear}`);
}

findOldestXMen(xMen);

// He usado la funcionalidad del método Sort que descubrí durante el ejercicio 27. También podría hacerse mediante el otro método que utilicé en ese ejercicio
