const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function filterPlaces(placesList) {
  for (let i = 0; i < placesList.length; i++) {
    if (placesList[i].id === 11 || placesList[i].id === 40) {
      placesList.splice(i, 1);
    }
  }
  console.log(placesList);
}

// Alternativa con for of y método indexOf

function filterPlaces2(placesList) {
  for (const place of placesList) {
    if (place.id === 11 || place.id === 40) {
      placesList.splice(placesList.indexOf(place), 1);
    }
  }
  console.log(placesList);
}
