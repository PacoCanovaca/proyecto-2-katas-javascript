const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

function printProperties(object) {
  for (const property in object) {
    console.log(
      `La propiedad ${property} tiene como valor ${object[property]}`
    );
  }
}

printProperties(alien);
