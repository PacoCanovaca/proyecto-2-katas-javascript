const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
    let element = array[index1]; // Creo la variable element para poder incluirla en el segundo cambio, ya que en el primero he borrado el primer elemento y no puedo hacer referencia a él después.
    array.splice(index1, 1, array[index2])
    array.splice(index2, 1, element)
    console.log(array)
}

swap(fantasticFour, 0, 2)



// Solución sin crear la variable element, aunque es un poco lío jugar con los +1, me resulta mucho más cómoda la primera

function swap2(array, index1, index2) {
    array.splice(index1, 0, array[index2])
    array.splice((index2 + 1), 1, array[index1 + 1])
    array.splice(index1 + 1, 1)
    console.log(array)
}

swap2(fantasticFour, 1, 3)