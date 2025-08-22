// 6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const addedPassedExams = exams.filter(exam => exam.score >= 5).reduce((acc, curr) => acc + curr.score, 0)
// En primer lugar filtro los aprobados y después aplico sobre ellos el método .reduce para hacer la suma total

console.log(addedPassedExams);
