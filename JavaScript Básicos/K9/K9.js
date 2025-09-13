const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let suma = 0
    for(let i = 0; i < numberList.length; i++){
        suma = suma + numberList[i]
    }
    return suma
}

console.log(sumNumbers(numbers))