const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];
function repeatCounter(list) {
    const repeticiones= new Map()
    for(let i = 0; i < list.length; i++){
        if (repeticiones.has(list[i])){
            let elemento = list[i]
            repeticiones.set(elemento, (repeticiones.get(elemento)+1))
        }else{
            repeticiones.set(list[i],1)
        }
    }
    return repeticiones
}
console.log(repeatCounter(words))