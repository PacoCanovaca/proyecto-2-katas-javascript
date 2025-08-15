// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const button = document.createElement("button");
button.setAttribute("id", "btnToClick");
button.innerText = "Haz click aquí";

const inputClick = document.querySelector("input.click");
inputClick.insertAdjacentElement("afterend", button)

// He creado el botón desde JS, también podría haberlo hecho directamente en el HTML pero era para practicar los métodos del DOM

button.addEventListener("click", () => {
    console.log(event)
})


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector("input.focus");

inputFocus.addEventListener("focus", () => {
    console.log(inputFocus.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector("input.value");

inputValue.addEventListener("input", () => {
    console.log(inputValue.value);
})

