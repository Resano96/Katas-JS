const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
    "Pueba"
];


const ul = document.createElement("ul")
for (let i in albums){
    const listado = document.createElement("li")
    const titulo = document.createElement("h2")
    const texto = document.createElement("p")
    const 
    titulo.innerText = albums[i]
    texto.innerText = "Descripcion del Titulo", albums[i]
    ul.appendChild(listado)
    listado.appendChild(titulo)
    listado.appendChild(texto)
    document.body.appendChild(ul)
    listado.classList.add("Titulos")
    titulo.id= albums[i]
    
}
const titulo = document.querySelectorAll("h2")

titulo.classList.toggle("futuro")

console.log(titulo)