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
//6.1
const sumScores = exams.map(user => user.score).reduce((acc, num) => acc + num)
console.log(sumScores)
//6.2
const SumPassScores = exams.map(user => user.score).filter(score =>score>=5).reduce((acc, num) => acc + num)
console.log(SumPassScores)
//6.3
const media = (exams.map(user => user.score).reduce((acc, num) => acc + num))/exams.map(user => user.score).length
console.log(media)
