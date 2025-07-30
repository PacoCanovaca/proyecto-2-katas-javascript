function rollDice(facesNumber) {
    return parseInt(Math.random() * (facesNumber + 1));
}
// Entiendo que el Math.random genera un número aleatorio entre 0 y 1, por lo que lo multiplico por el número de caras del dado + 1 (le sumo uno para que también incluya todos los decimales del máximo número. Por ejemplo, si tiene 6 caras, así también incluye hasta 6,99). Todo esto lo transformo después

// console.log(rollDice(6))



// He vuelto al ejercicio y me he dado cuenta de que existe la opción de que el número devuelto sea 0, lo cual no es muy coherente con la idea de tirar un dado (suelen empezar en 1). Para ello, voy a modificar la función para que el + 1 se sume después de multiplicar por las caras del dado:

function rollDice2(facesNumber) {
    return parseInt((Math.random() * facesNumber) + 1);
}

console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));
console.log(rollDice2(6));

// Lo lanzo tantas veces por consola para comprobar que no puede retornar nunca un 0