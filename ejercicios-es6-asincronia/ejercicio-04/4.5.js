// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filteredStreamers = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends"));
for (const streamer of filteredStreamers) {
    if (streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
}

console.log(filteredStreamers);


// A continuación, he querido combinar el método map y el filter en una sola constante (en principio la idea era generar un código más sencillo, aunque es prácticamente igual de largo)

const filteredStreamers2 = streamers.map(streamer => {
    if (streamer.age > 35) {
        return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()}; // Aprovechando el spread operator para no tener que mencionar las propiedades una por una, sólo aquella que quiero modificar
    }
    return streamer
}).filter(streamer => streamer.gameMorePlayed.includes("Legends") || streamer.gameMorePlayed.includes("LEGENDS")); // He tenido que incluir las dos opciones (mayúsculas y minúsculas) porque ya había modificado a mayúsculas anteriormente. He intentado evitar esto usando el método filter antes que el map, es decir, invirtiendo el orden, pero igualmente cuando me hacía el filtrado sólo se quedaba con el que incluía el nombre en minúsculas


console.log(filteredStreamers2);

