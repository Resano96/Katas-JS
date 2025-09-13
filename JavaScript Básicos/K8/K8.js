const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];
function findLongestWord(stringList) {
    let longest = "";
    for(let i = 0; i < stringList.length; i++){
        if (stringList[i].length > longest.length){
            longest = stringList[i]
            console.log("de momento ",stringList[i], "es la mas larga")
        }else{console.log("no me actualizo")}
    }
    return longest  
}

console.log(findLongestWord(avengers))