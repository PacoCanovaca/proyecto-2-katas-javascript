const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function favoritesNames(list) {
    const AllSounds = [];
    for (const user of list) {
        let keys = Object.keys(user.favoritesSounds) // Uso el método Object.keys (no sé si lo descubrí durante los apuntes o indagando en Internet) para crear un array con los nombres de las claves de sonidos favoritos, dentro de cada usuario.
        for (let i = 0; i < keys.length; i++) {
            AllSounds.push(keys[i])
        }
    }
    AllSounds.sort();
    const soundsFrequency = [];
    for (let i = 0; i < AllSounds.length; i++) {
        if (AllSounds[i - 1] !== AllSounds[i]) {
            soundsFrequency.push({soundName: AllSounds[i], frequency: 1})
        } else if (AllSounds[i - 1] === AllSounds[i]) {
            for (let j = 0; j < soundsFrequency.length; j++) {
                if (soundsFrequency[j].soundName === AllSounds[i]) {
                    soundsFrequency[j].frequency++
                }
            }
        }
    }
    console.log(soundsFrequency)

}

favoritesNames(users);

// No se me ocurría cómo hacerlo con un bucle for in