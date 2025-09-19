//3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

console.log(users.map(a => a.name))

//3.2

const users1 = [...users]
users1.map(user => {
    const nombre = user.name.split("")
    if (nombre[0]== "A"){
        user.name="Anselmo"
    }
})
console.log(users1.map(a => a.name))
//3.3
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const visitadas =cities.map(city =>{
    if(city.isVisited){
        return city.name+ " (Visited)"
    }
})
visitadas.filter(city => city === undefined)
console.log(visitadas.filter(city => city !== undefined))