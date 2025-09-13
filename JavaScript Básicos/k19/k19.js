const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
const toysSinGato=[]

for (let juguete of toys){
    //juguete es cada uno de los juguetes en la lista toys
    if(juguete.name.includes("gato")){
        
    } else{
        toysSinGato.push(juguete)
    }
}
console.log(toysSinGato)