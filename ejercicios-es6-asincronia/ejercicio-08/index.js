/* 
1. Acceder a las variables del DOM (select y img)
2. Hacer request GET de la API de GOT
3. Hacer bucle for en el que se cree una opción por personaje
4. Asignar al select un escuchador de eventos en el que, cada vez que cambie la opción, se muestre la imagen correspondiente al personaje elegido

Los puntos 2, 3 y 4 deben estar en asincronía */

const select = document.querySelector("select");
const img = document.querySelector("img");

const showCharacter = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await res.json(); // Es un array de objetos. Cada objeto es un personaje, con todas sus propiedades. Las propiedades que nos interesan son fullName (para cada option) y imageUrl (para las imágenes que saldrán)
    for (const character of characters) {
      const option = document.createElement("option");
      select.appendChild(option);
      option.innerText = character.fullName;
    }
    select.addEventListener("change", () => {
      const characterSelected = characters.find(
        (character) => character.fullName === select.value
      );
      img.src = characterSelected.imageUrl;
    });
  } catch (error) {
    console.log(error);
  }
};

showCharacter();
