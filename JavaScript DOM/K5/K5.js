const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
    "Pueba"
];
const Title = document.createElement('h1')
Title.textContent = 'Pagina con albums'
Title.id = 'Titulo'
document.getElementById('contenedor').appendChild(Title)

const UnorderList = document.createElement('ul')
UnorderList.id = 'Listado_de_albums'
document.querySelector('#contenedor').appendChild(UnorderList)

for (album of albums) {
    const elementListed = document.createElement('li')
    elementListed.textContent = album
    elementListed.class = 'album'
    document.querySelector('#Listado_de_albums').appendChild(elementListed)
}

const Desplegable = document.createElement('select')
Desplegable.id = 'Desplegable'

const opciones = [
    "white",
    "lightgray",
    "beige",
    "lightyellow",
    "lightgreen",
    "lightblue",
    "lavender",
    "peachpuff",
    "mintcream",
    "honeydew",
    "aliceblue",
    "seashell",
    "lemonchiffon",
    "papayawhip",
    "powderblue"
]

opciones.forEach(color => {
    const option = document.createElement('option')
    option.value = color
    option.textContent = color
    Desplegable.appendChild(option)
})

document.querySelector('#contenedor').appendChild(Desplegable)

Desplegable.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value
})

const Desplegable1 = document.createElement('select')
Desplegable1.id = 'Desplegable'

const opciones1 = ['vertical','horizontal']
opciones1.forEach(direccion =>{
    const option1 = document.createElement('option')
    option1.value = direccion
    option1.textContent = direccion
    Desplegable1.appendChild(option1)
})
document.querySelector('#contenedor').appendChild(Desplegable1)

function actualizarDireccion(orientacion){
    if(orientacion === 'horizontal'){
        UnorderList.style.display = 'flex'
        UnorderList.style.flexDirection = 'row'
    } else{
        UnorderList.style.display = 'block'
        UnorderList.style.flexDirection = ''
    }
}
Desplegable1.addEventListener('change',(event) =>{
    actualizarDireccion(event.target.value)
})
actualizarDireccion('vertical')