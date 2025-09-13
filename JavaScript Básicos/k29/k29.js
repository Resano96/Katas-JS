const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

const starWarsMoviesDate={
    años70s: [],
    años80s: [],
    años90s: [],
    años00s: [],
    años10s: []
}

for (let peli of starWarsMovies){
    if(peli.releaseYear<1980){
        starWarsMoviesDate.años70s.push(peli.title)
    }
    else if(peli.releaseYear<1990){
        starWarsMoviesDate.años80s.push(peli.title)
    }
    else if(peli.releaseYear<2000){
        starWarsMoviesDate.años90s.push(peli.title)
    }
    else if(peli.releaseYear<2010){
        starWarsMoviesDate.años00s.push(peli.title)
    }
    else if(peli.releaseYear<2020){
        starWarsMoviesDate.años10s.push(peli.title)
    }
    else if(peli.releaseYear<2030){
        starWarsMoviesDate.años20s.push(peli.title)
    }

}
const starWarsMoviesDate1=[
    ["años70s: "],
    ["años80s: "],
    ["años90s: "],
    ["años00s: "],
    ["años10s: "]
]
for (let indice in starWarsMovies){
    
    if(starWarsMovies[indice].releaseYear<1980){
        starWarsMoviesDate1[0].push(starWarsMovies[indice].title)
    }
    else if(starWarsMovies[indice].releaseYear<1990){
        starWarsMoviesDate1[1].push(starWarsMovies[indice].title)
    }
    else if(starWarsMovies[indice].releaseYear<2000){
        starWarsMoviesDate1[2].push(starWarsMovies[indice].title)
    }
    else if(starWarsMovies[indice].releaseYear<2010){
        starWarsMoviesDate1[3].push(starWarsMovies[indice].title)
    }
    else if(starWarsMovies[indice].releaseYear<2020){
        starWarsMoviesDate1[4].push(starWarsMovies[indice].title)
    }
    /*
    else if(peli.releaseYear<1990){
        starWarsMoviesDate.años80s.push(peli.title)
    }
    else if(peli.releaseYear<2000){
        starWarsMoviesDate.años90s.push(peli.title)
    }
    else if(peli.releaseYear<2010){
        starWarsMoviesDate.años00s.push(peli.title)
    }
    else if(peli.releaseYear<2020){
        starWarsMoviesDate.años10s.push(peli.title)
    }
    else if(peli.releaseYear<2030){
        starWarsMoviesDate.años20s.push(peli.title)
    }*/

}


console.log(starWarsMoviesDate)

console.log(starWarsMoviesDate1)