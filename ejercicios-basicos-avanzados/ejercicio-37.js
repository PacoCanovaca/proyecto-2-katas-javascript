const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

function createCategories(list) {
    const categories = [];
    for (const movie of list) {
        for (let i = 0; i < movie.categories.length; i++) {
            categories.push(movie.categories[i]);            
        }
    }
    for (let j = 0; j < categories.length; j++) {
        const category = categories[j];
        for (let k = j + 1; k < categories.length; k++) {
            if (categories[k].includes(category)) {
                categories.splice(k, 1)
            }
        }        
    }
    console.log(categories);
}

createCategories(movies);

// También puede hacerse con el método .sort, ordenando la lista de categorías y comparando cada categoría con la siguiente. Al final es prácticamente igual el resultado. Hice algo similar en el ejercicio 14