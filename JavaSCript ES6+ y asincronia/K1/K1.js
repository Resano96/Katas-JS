//1.1
const game = {
    title: 'The Last of Us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}
const {title: Titulo, gender: Genero, year:Anio} = game

console.log(`El titulo del juego es ${Titulo}, pertenece a los generos ${Genero} y es del año ${Anio}`)

//1.2
const fruits = [
    'Banana', 
    'Strawberry', 
    'Orange'
];

const [fruit1, fruit2, fruit3]=fruits

console.table({fruit1,fruit2,fruit3})

//1.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race}= animalFunction()

console.table({name, race})

//1.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const {name:name_car, itv}=car
itv.sort((a,b) => a-b)
const [date1,date2,date3]= itv
console.table(car)
console.log(`El modelo del coche es ${name_car}, y el array de sus itv es ${itv} \n la primera fecha es ${date1}, la segunda ${date2} y la tercera ${date3}`)
