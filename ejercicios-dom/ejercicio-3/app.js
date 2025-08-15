// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const li = document.createElement("li");
  li.innerText = country;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeMe = document.querySelector(".fn-remove-me");

document.body.removeChild(removeMe);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul2 = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  const li = document.createElement("li");
  li.innerText = car;
  ul2.appendChild(li);
}

ul2.setAttribute("data-function", "printHere");

document.body.appendChild(ul2);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (let i = 0; i < countries2.length; i++) {
  const country = countries2[i];
  const div = document.createElement("div");
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  h4.innerText = country.title;
  img.src = country.imgUrl;
  div.insertAdjacentElement("afterbegin", h4);
  div.insertAdjacentElement("beforeend", img);
  document.body.appendChild(div);
  div.classList.add("country"); //Le asigno esta clase para el ejercicio siguiente
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const button = document.createElement("button");
button.innerText = "Borrar último elemento";
document.body.appendChild(button);

button.addEventListener("click", () => {
  const countryList = document.querySelectorAll(".country");
  const lastItemIndex = countryList.length - 1;
  document.body.removeChild(countryList[lastItemIndex]);
});


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const randomTitles = document.querySelectorAll(".country");

for (let i = 0; i < randomTitles.length; i++) {
  const randomTitle = randomTitles[i];
  const button2 = document.createElement("button");
  button2.innerText = "Borrar este elemento";
  randomTitle.appendChild(button2);
  button2.addEventListener("click", () => {
    document.body.removeChild(randomTitle);
  });
}

