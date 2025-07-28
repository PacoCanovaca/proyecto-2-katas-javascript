const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const minor = [];
const adult = [];

function age(list) {
  for (const user of list) {
    if (user.years >= 18) {
      adult.push(user.name);
    } else if (user.years < 18) {
      minor.push(user.name);
    }
  }

  console.log(`Usuarios menores de edad: ${minor}`);
  console.log(`Usuarios mayores de edad: ${adult}`);
}

age(users);

// A continuación, la solución que había pensado en un primer momento, con dos funciones (una para generar las listas de mayores y menores de edad y la otra para lanzar por consola). Puede ser una buena solución si la parte de lanzar por consola solo se quiere para comprobar que no hay errores, siendo la función de creación de listas la funcional.

const minor2 = [];
const adult2 = [];

function age2(list) {
  for (const user of list) {
    if (user.years >= 18) {
      adult2.push(user);
    } else if (user.years < 18) {
      minor2.push(user);
    }
  }
}

age2(users);

function legalAge(list) {
  for (const user of list) {
    console.log(user.name);
  }
}

console.log(`Usuarios menores de edad:`);
legalAge(minor2);

console.log(`Usuarios mayores de edad:`);
legalAge(adult2);
