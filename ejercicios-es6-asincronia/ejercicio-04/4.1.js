// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adultAges = ages.filter(age => age > 18); // En caso de querer que sean mayores de edad, habría que incluir también =

console.log(adultAges);
