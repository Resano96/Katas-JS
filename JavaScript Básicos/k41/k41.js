function rollDice(faces) {
    resultado = Math.floor(Math.random()*faces)
    
    return resultado
}

console.log(rollDice(7))