const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  list.sort();
  for (let i = 0; i < list.length; i++) {
    while (list[i] === list[i + 1]) {
      // Había empezado usando un if, pero he pensado que es posible que una lista tenga un elemento incluso más de 2 veces. Por tanto, uso el bucle while para que no pare de borrar elementos duplicados hasta que sólo quede 1.
      list.splice(i, 1);
    }
  }
  return list;
}

// El único problema de este método es que deja la lista con el orden modificado. Si se pretende mantener el orden original, habría que hacer un bucle anidado

function removeDuplicates2(list) {
  const nonDuplicates = [];
  for (let i = 0; i < list.length; i++) {
    let duplicated = false;
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        duplicated = true;
      }
    }
    if (duplicated === false) {
      nonDuplicates.push(list[i]);
    }
  }
  return nonDuplicates;
}

// console.log(removeDuplicates(duplicates));

// console.log(removeDuplicates2(duplicates));
