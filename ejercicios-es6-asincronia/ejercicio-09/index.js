/* 
1. Acceder a la variable img mediante DOM
2. Hacer request GET de la API de Pokémon
3. Crear lista de enlaces de las imágenes
4. Elegir una aleatoriamente cada vez que se recargue la página

Los puntos 2, 3 y 4 deben estar en asincronía */

const img = document.querySelector("img");

const showPokemon = async () => {
  try {
    const pokemonImageUrls = [];
    for (let i = 1; i <= 151; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);;
      const pokemon = await res.json();
      pokemonImageUrls.push(pokemon.sprites.other["official-artwork"].front_default) // He tenido que añadir official-artwork por la vía alternativa (corchetes y nombre de la propiedad entre comillas) porque el guión volvía loco al programa
    }
    img.src = pokemonImageUrls[parseInt(Math.random() * 151)];
  } catch (error) {
    console.log(error);
  }
};

showPokemon();

// He elegido pokemon.sprites.other.official-artwork.front_default como imagen preferida de cada pokémon