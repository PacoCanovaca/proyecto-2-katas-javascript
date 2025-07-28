const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function replaceNonVegan(foodList) {
  let fruitIndex = 0;
  for (let i = 0; i < foodList.length; i++) {
    if (!foodList[i].isVegan) {
      foodList[i].name = fruits[fruitIndex];
      fruitIndex++;
      foodSchedule[i].isVegan = true;
    }
  }
}

replaceNonVegan(foodSchedule);

console.log(foodSchedule);

// He empezado haciendo un bucle anidado, similar al del ejercicio 12, para provocar que los elementos repetidos cambien su name y así no tener frutas duplicadas. No obstante, luego he caído en la opción de crear una variable para el índice de las frutas y que esta fuese aumentando automáticamente conforme se introducían dichas frutas en el menú. Así se simplifica mucho el código.
