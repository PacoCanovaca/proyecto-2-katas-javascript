// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const unitedPointsList = [...pointsList, ...pointsLis2];

console.log(unitedPointsList);
