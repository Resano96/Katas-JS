//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const biggerAges = ages.filter(age => age>18)

console.log(biggerAges)

//4.2
const pairs = ages.filter(age => age%2==0)
console.log(pairs)

//4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const loleros = streamers.filter(streamer => streamer.gameMorePlayed==='League of Legends')
const nombreLoleros= loleros.map(streamer => streamer.name)
console.log(nombreLoleros)

//4.4
const NombreStreamers = streamers.map(streamer=> streamer.name)
const StreamersConU = NombreStreamers.filter(nombre=> nombre.includes("u"))
console.log(StreamersConU)

//4.5
const legend = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'))
const lolerosViejos = legend.map(lolero => lolero.age > 35? lolero.gameMorePlayed.toUpperCase() : lolero.gameMorePlayed )
const lolerosPaJubilar = legend.map(lolero =>({...lolero, gameMorePlayed: lolero.age>35? lolero.gameMorePlayed.toUpperCase(): lolero.gameMorePlayed
}))
console.table(lolerosPaJubilar)
