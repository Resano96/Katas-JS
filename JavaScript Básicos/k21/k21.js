const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];
for (let persona of users){
    if (persona.years>=18){
        console.log(persona.name,"es mayor de edad")
    } else{
        console.log(persona.name,"es menor de edad")
    }
}