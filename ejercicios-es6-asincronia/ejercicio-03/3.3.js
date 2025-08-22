// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const visitedCities = cities.map(city => {
    if (city.isVisited === true) {
        return city.name + " (visitado)"
    }
    return city.name
}) // Habiendo aprendido a raíz del ejercicio anterior, ya he podido usar correctamente el return y hacer más sencillo el código en este, incluyendo todo dentro del map

console.log(visitedCities);

// Pasando la solución por el GPT, me he dado cuenta de que me podría haber ahorrado el === true en la condición😅
