const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

function generateAlbums(albumList) {
    const ul = document.createElement("ul");
    for (const album of albumList) {
        const li = document.createElement("li");
        li.innerText = album;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

generateAlbums(albums)