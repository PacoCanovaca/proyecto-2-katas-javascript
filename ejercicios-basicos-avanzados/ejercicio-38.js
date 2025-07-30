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

function averageVolume(usersList) {
  const volumeList = [];
  for (const user of usersList) {
    for (const sound in user.favoritesSounds) {
      volumeList.push(user.favoritesSounds[sound].volume); // Dos horas y media dándole vueltas al ejercicio porque dentro del push había incluido sound.volume en lugar de user.favoritesSounds[sound].volume 😂 Menos mal que al final me dio por mirar los apuntes del bucle forin y darme cuenta de que lo estaba usando mal
    }
  }
  let totalVolume = 0;
  for (const volumeValue of volumeList) {
    totalVolume += volumeValue;
  }
  let avgVolume = totalVolume / volumeList.length;
  console.log(
    `El volumen promedio de los sonidos favoritos de los usuarios es ${avgVolume}`
  );
}

averageVolume(users);


// Esta es una alternativa. En lugar de crear una lista y usar como divisor para la media la longitud de dicha lista, se van sumando elementos a totalElements, que es el que luego sirve como divisor

function averageVolume2(usersList) {
  let totalVolume = 0;
  let totalElements = 0;
  for (const user of usersList) {
    for (const sound in user.favoritesSounds) {
      totalVolume += user.favoritesSounds[sound].volume;
      totalElements++;
    }
  }
  let avgVolume = totalVolume / totalElements;
  console.log(
    `El volumen promedio de los sonidos favoritos de los usuarios es ${avgVolume}`
  );
}

averageVolume2(users);