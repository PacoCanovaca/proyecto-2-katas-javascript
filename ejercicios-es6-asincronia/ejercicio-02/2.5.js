// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operators.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log(colorsCopy);

// Entiendo la posición 2 según el pc. Si quisiera eliminar el azul (que está en la posición 2 humana), el primer valor del método Splice sería 1.