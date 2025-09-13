//1
const divVacio = document.createElement("div")

document.body.appendChild(divVacio)
//2
const divP = document.createElement("div")
const P = document.createElement("p")

document.body.appendChild(divP)
divP.appendChild(P)
//3
const div6p = document.createElement("div")

document.body.appendChild(div6p)

for (let i = 0; i < 6; i++) {
    const p6 = document.createElement("p")
    p6.innerText = i
    div6p.appendChild(p6)
}
//4
const PDinamica = document.createElement("p")
PDinamica.innerText = 'Soy dinámico!'
document.body.appendChild(PDinamica)

//5
const insertHere = document.querySelector(".fn-insert-here")
insertHere.innerText = 'Wubba Lubba dub dub'

//6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulApps = document.createElement("ul")

document.body.appendChild(ulApps)

for (i in apps) {
    const liApps = document.createElement("li")
    liApps.innerText = apps[i]
    ulApps.appendChild(liApps)
}

//7
const removed = document.querySelectorAll(".fn-remove-me")
removed.forEach(elemento => {elemento.remove()})

//8
const pConTexto = document.createElement("p")
pConTexto.innerText = 'Voy en medio!'
const divs = document.querySelectorAll("div")

const div2 = divs[1]
document.body.insertBefore(pConTexto, div2)
//9
const inserta = document.querySelectorAll("div.fn-insert-here")
for (elemento of inserta) {
    elemento.innerText = 'Voy dentro!'
}
