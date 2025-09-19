//2.1
const pointsList = [32, 54, 21, 64, 75, 43]
const copia = [...pointsList]
console.log(copia)

//2.2
const toy = {
    name: 'Bus laiyiar', 
    date: '20-30-1995', 
    color: 'multicolor'
};

const toycorregido ={...toy}
toycorregido.name= "Se escribe asi?"
console.log("original")
console.table(toy)
console.log('"corregido"')
console.table(toycorregido)

//2.3
const pointsLis = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const todosLosPuntos= [...pointsLis, ...pointsLis2]

console.log(todosLosPuntos)

//2.4
const toyazo = {
    name: 'Bus laiyiar', 
    date: '20-30-1995',
    color: 'multicolor'
};
const toyUpdate = {
    lights: 'rgb', 
    power: ['Volar like a dragon', 'MoonWalk']
}

const toyazo100tifico= {...toyazo,...toyUpdate}

console.table(toyazo100tifico)

//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


const colores = [...colors.slice(0,1), ...colors.slice(2)]
console.log(colores)