console.log("Ejercicio 1")
let showMe = document.querySelector(".showme")
console.log(showMe, showMe.innerText)
console.log("Ejercicio 2")
let pillado = document.querySelector("#pillado")
console.log(pillado)
console.log("Ejercicio 3")
let p = document.querySelectorAll("p")
for (parrafo of p) {
    console.log(parrafo)
}
console.log("Ejercicio 4")
let pokemons = document.querySelectorAll(".pokemon")
for (pokemon of pokemons) {
    console.log(pokemon)
}
console.log("Ejercicio 5")
let testsMe = document.querySelectorAll("[data-function]")
for (testMe of testsMe) {
    console.log(testMe)
}
console.log("Ejercicio 6")
console.log(testsMe[2])
