// 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

const rpgVideogames = videogames.filter(videogame => videogame.genders.includes("RPG"))
const rpgAverageScore = rpgVideogames.reduce((acc, curr) => acc + curr.score, 0) / rpgVideogames.length

console.log(rpgAverageScore);


// La siguiente opción es viable y técnicamente más corta (no en caracteres pero sí en líneas, ya que sólo ocuparía 1), pero en mi opinión también es más "sucia". En la anterior queda todo más ordenado creando dos variables y haciéndolas interactuar

const rpgAverageScore2 = videogames.filter(videogame => videogame.genders.includes("RPG")).reduce((acc, curr) => acc + curr.score, 0) / videogames.filter(videogame => videogame.genders.includes("RPG")).length;

console.log(rpgAverageScore2);


// No veo cómo el método .find puede ayudarme a cumplir la premisa del ejercicio, ya que sólo me devolvería el primer elemento con el género RPG, no todos.
