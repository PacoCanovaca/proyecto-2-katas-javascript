// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMe = document.querySelector(".showme");

console.log(showMe);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector("#pillado");

console.log(pillado);


// 1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll("p");

console.log(p);

// Este lanzaría por consola un array de los 4 nodos. También puedo generar un bucle que lance por consola cada nodo:

for (let i = 0; i < p.length; i++) {
    const element = p[i];
    console.log(element)    
}


// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon

const pokemon = document.querySelectorAll(".pokemon");

console.log(pokemon);

// De nuevo, puedo generar un bucle que lance por consola cada elemento con la clase pokemon:

for (let i = 0; i < pokemon.length; i++) {
    const poke = pokemon[i];
    console.log(poke);    
}


// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const characters = document.querySelectorAll("[data-function = 'testMe']");

console.log(characters);

// Una vez más, aprovecho el bucle para lanzar cada elemento span por separado:

for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    console.log(character);    
}


// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const thirdItem = characters[2];

console.log(thirdItem);