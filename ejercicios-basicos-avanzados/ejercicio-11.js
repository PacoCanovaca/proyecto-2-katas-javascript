const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == "number") {
      total = list[i] + total;
    } else if (typeof list[i] == "string") {
      total = list[i].length + total;
    }
  }
  let avg = total / list.length;
  return avg;
}

averageWord(mixedElements);

console.log(averageWord(mixedElements));
