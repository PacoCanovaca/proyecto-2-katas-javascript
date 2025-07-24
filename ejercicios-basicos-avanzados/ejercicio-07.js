function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(`El número más alto es ${numberOne}`);
  } else if (numberTwo > numberOne) {
    console.log(`El número más alto es ${numberTwo}`);
  } else if (numberTwo == numberOne) {
    console.log(`Ambos números son iguales`);
  } else {
    console.log(`Ha habido un error`);
  }
}

greaterNumber(4, 2);
greaterNumber(7, 7);
greaterNumber(5, 5);