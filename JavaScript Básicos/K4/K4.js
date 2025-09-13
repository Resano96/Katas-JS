const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log(aldeanos)

console.log(aldeanos[3]);

aldeanos.push("Cervasio");

console.log(aldeanos)

aldeanos[0] = "Bambina"

console.log(aldeanos)

aldeanos.reverse()

console.log(aldeanos)

let index = aldeanos.indexOf("Narciso")
aldeanos[index] = "Canela"
console.log(aldeanos)
let long = aldeanos.length
console.log(aldeanos[long-1])