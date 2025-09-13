const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];
let contador = 0
for(let comida of foodSchedule){
    if (comida.isVegan==false){
        comida.name = fruits[contador]
        comida.isVegan = true
        contador++
    }
}
console.log(foodSchedule)