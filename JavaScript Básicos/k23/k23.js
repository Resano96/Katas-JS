const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
const shortMovies =[]
const medMovies = []
const longMovies =[]

for(let pelis of movies){
    if(pelis.durationInMinutes<=100){
        shortMovies.push(pelis)
    }else if(pelis.durationInMinutes>200){
        longMovies.push(pelis)
    } else{
        medMovies.push(pelis)
    }
}
console.log("Pelis cortas: ", shortMovies)
console.log("Pelis medianas: ", medMovies)
console.log("Pelis largas: ", longMovies)