const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

function filterCats(toysList) {
  for (const toy of toysList) {
    if (toy.name.includes("gato")) {
      toysList.splice(toysList.indexOf(toy), 1);
    }
  }
  console.log(`Lista de juguetes sin gato: `);
  console.log(toysList); // He tenido que añadir dos console.log por array porque no se pueden concatenar strings con arrays de objetos en un mismo console.log
}

filterCats(toys);

// No entiendo por qué no se elimina el FurReal Friends gato interactivo. Sólo se borra cuando incluyo " gato ", pero en ese caso no se eliminan los otros dos. Entonces, he tratado de hacer un || para incluir ambas condiciones. En ese caso, tampoco se borra el FurReal Friends. Ni siquiera añadiendo un if con "gato" y luego un else if con " gato " funciona.



// Alternativa creando una nueva lista

function filterCats2(toysList) {
  let noncatToys = [];
  for (const toy of toysList) {
    if (!toy.name.includes("gato")) {
      noncatToys.push(toy);
    }
  }
  console.log(`Lista de juguetes sin gato: `);
  console.log(noncatToys);
}

filterCats2(toys);

// Así sí funciona, deja atrás todo lo que contiene gato (ya que lo que está haciendo en realidad es seleccionar aquello que no contiene esa parte)
