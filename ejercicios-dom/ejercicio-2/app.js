// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement("div");

document.body.appendChild(div);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement("div");
const p = document.createElement("p");

div2.insertAdjacentElement("afterbegin", p); // Uso insertAdjacentElement por cambiar un poco y no repetir todo el rato appendChild y probar otros métodos, aunque appendChild sería el más sencillo aquí

document.body.appendChild(div2);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const p2 = document.createElement("p");
    div3.insertAdjacentElement("beforeend", p2); 
}

document.body.appendChild(div3);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p3 = document.createElement("p");

p3.innerText = "¡Soy dinámico!";

document.body.appendChild(p3);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector("h2.fn-insert-here");

h2.innerText = "Wubba Lubba dub dub";


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    const li = document.createElement("li");
    li.innerText = app;
    ul.appendChild(li);
}

document.body.appendChild(ul);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeMe = document.querySelectorAll(".fn-remove-me");

for (const nodo of removeMe) {
    document.body.removeChild(nodo);
}


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const p4 = document.createElement("p");
const div4 = document.querySelector("div");

p4.innerText = "¡Voy en medio!";

div4.insertAdjacentElement("afterend", p4);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const div5 = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < div5.length; i++) {
    const divElement = div5[i];
    divElement.innerText = "¡Voy dentro!"
}