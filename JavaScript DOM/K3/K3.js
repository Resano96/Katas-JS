//1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const paises = document.createElement("ul")
document.body.appendChild(paises)
for (pais of countries) {
    const a = document.createElement("li")
    a.innerText = pais
    paises.appendChild(a)
}
//2
const adios = document.querySelector(".fn-remove-me")
adios.remove()
//3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const donde = document.querySelector('[data-function="printHere"]')
const coches = document.createElement("ul")
donde.appendChild(coches)

for (coche of cars) {
    const car = document.createElement("li")
    car.innerText = coche
    coches.appendChild(car)
}
//4
const countries1 = [
    { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=1>' },
    { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=2>' },
    { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=3>' },
    { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=4>' },
    { title: 'Random title', imgUrl: '<https://picsum.photos/300/200?random=5>' }
];

for (i in countries1) {
    countries1[i].imgUrl=countries1[i].imgUrl.slice(1,(countries1[i].imgUrl.length-1))
    const divcountries = document.createElement("div")
    divcountries.className = ("countries2")
    const titlecountries = document.createElement("h4")
    const imgcountries = document.createElement("img")
    titlecountries.innerText = countries1[i].title
    imgcountries.src = countries1[i].imgUrl
    document.body.appendChild(divcountries)
    divcountries.appendChild(titlecountries)
    divcountries.appendChild(imgcountries)
}
//5
const btn = document.createElement("button")
btn.innerText= "Yo borro el ultimo div de las fotos"
document.body.appendChild(btn)

btn.onclick= function(){
    const claseCountries2 =document.getElementsByClassName("countries2")
    claseCountries2[claseCountries2.length-1].remove()
}
//6
const claseCountries2 = Array.from(document.getElementsByClassName("countries2"))

for(let div of claseCountries2){
    const bttn = document.createElement("button")
    bttn.innerText= "Yo borro el div de la foto que tengo al lado"    
    bttn.onclick = function(){
        div.remove()
    }
    div.appendChild(bttn)
}