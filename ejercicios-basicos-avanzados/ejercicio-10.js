const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let total = 0;
  for (let i = 0; i < numberList.length; i++) {
    total = numberList[i] + total;
  }
  let avg = total / numberList.length;
  return avg;
}

// Hago la suma de todos los números igual que en el ejercicio 9 y luego los divido entre 2. No he encontrado ningún método para hallar el promedio directamente

average(numbers);

console.log(average(numbers));
