function findArrayIndex(array, text) {
    for (const element of array) {
        if (element === text) {
            return array.indexOf(element);
        }
    }
    return "Element not found"
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Han Solo"))

console.log(findArrayIndex(mainCharacters, "Rey"))

console.log(findArrayIndex(mainCharacters, "Darth Vader"))



function removeItem(array, text) {
    if (findArrayIndex(array, text) >= 0) {
        array.splice(findArrayIndex(array, text), 1)
    } else {
        console.log("Element not found");
    }
    
}

removeItem(mainCharacters, "Leia")

console.log(mainCharacters)

removeItem(mainCharacters, "Chewbacca")

console.log(mainCharacters)

removeItem(mainCharacters, "Darth Vader")

// He incluido en ambas funciones la opción de que se indique que el elemento no se ha encontrado en caso de introducir un valor que no se encuentra en el array.