// Voy a modificar el array añadiendo la propiedad de src para incluir imágenes de los álbums (de cara a hacer la web más bonita)

const albums = [
  { name: "De Mysteriis Dom Sathanas", src: "./assets/icons/Mysteriis.jpg" },
  { name: "Reign of Blood", src: "./assets/icons/Reign.jpg" },
  { name: "Ride the Lightning", src: "./assets/icons/Ride.jpg" },
  { name: "Painkiller", src: "./assets/icons/Pain.jpg" },
  { name: "Iron Fist", src: "./assets/icons/Iron.jpg" },
];

function generateAlbums(albumList) {
  const ul = document.createElement("ul");
  for (const album of albumList) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    h3.innerText = album.name;
    img.src = album.src;
    li.appendChild(h3);
    li.appendChild(img);
    ul.appendChild(li);
  }
  const main = document.querySelector("main");
  main.appendChild(ul);
}

generateAlbums(albums);
