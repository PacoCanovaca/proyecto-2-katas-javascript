const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  let list2 = list; // Creo un nuevo array para no trabajar sobre el original y no modificarlo
  list2.sort();
  let counterList = []; // Creo un array en el que los elementos serán objetos que agruparán el nombre del elemento que estamos contando y su respectivo contador
  for (let i = 0; i < list2.length; i++) {
    counterList.push({ listItem: list2[i], counter: 1 }); //Cada nuevo elemento que abordamos de list2 crea su objeto correspondiente en counterList, con el contador ya en 1
    while (list2[i] === list2[i + 1]) {
      counterList[i].counter++;
      list2.splice(i + 1, 1);
    }
    // Al estar la lista ordenada, puedo crear un bucle while en el que, mientras se siga repitiendo el elemento, se elimina el repetido y se suma uno al contador de ese elemento en counterList
  }
  for (let j = 0; j < counterList.length; j++) {
    console.log(`${counterList[j].listItem}: ${counterList[j].counter}`);
  }
  // Lanzo por consola cada elemento de counterList. De primeras había tratado de lanzar la lista completa pero al estar compuesta de objetos se imprime de manera extraña y poco comprensible, por lo que he adaptado el console.log para hacerlo más accesible y entendible por el usuario
}

repeatCounter(words);
