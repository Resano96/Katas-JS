const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];


function findArrayIndex(array, text) {
    if (array.includes(text)) {

        return array.indexOf(text)
    } else { console.log("No esta en la lista") }
}
findArrayIndex(mainCharacters, "Luke")

function buscarposicion(cadena, texto) {
    for (i in cadena){
        if (cadena[i] === texto){
            console.log(texto, "esta en la posicion",i)
        }
    }
}
buscarposicion(mainCharacters, "Leia")

function removeItem(array, text){
    array.splice(findArrayIndex(array,text),1)
    console.log(array)
}

removeItem(mainCharacters, "Chewbacca")