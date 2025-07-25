const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function includeWord(list) {
  console.log("Elementos que incluyen la palabra camiseta: ");
  for (item of list) {
    if (item.includes("Camiseta")) {
      console.log(`- ${item}`);
    }
  }
}

includeWord(products);
