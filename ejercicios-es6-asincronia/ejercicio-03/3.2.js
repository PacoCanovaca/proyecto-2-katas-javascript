// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map((user) => user.name); // Tengo que recordar que aquí no uso return porque no hay llaves, pero puedo incluir llaves y generar una función en la que sí tendré que usar un return

for (let i = 0; i < usersName.length; i++) {
    if (usersName[i].startsWith("A")) {
        usersName.splice(i, 1, "Anacleto");
    }
}

console.log(usersName);


// A continuación, la solución aún más sencilla, aunque con la ayuda del Chat GPT porque no sabía cómo formularla. Aún me cuesta aprovechar el return:

const usersName2 = users.map((user) => {
    if (user.name.startsWith("A")) {
        return "Anacleto";
    }
    return user.name
})

console.log(usersName2);
