const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, posItem1, posItem2){
    let elem1= array[posItem1]
    let elem2 = array[posItem2]
    array.splice(posItem1,1,elem2)
    array.splice(posItem2,1,elem1)
    return array
}

console.log(swap(fantasticFour,0,2))