const users = [
    {
        name: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];
const repeticiones = {}


for (user of users) {
    for (sound of Object.keys(user.favoritesSounds))
        if (!Object.hasOwn(repeticiones, sound)) {
            repeticiones[sound] = 1
        } else {
            repeticiones[sound] += 1
        }
}
console.log(repeticiones)

const repeticiones1 = {}

for (user of users) {
    for (sound in user.favoritesSounds)
        if (!Object.hasOwn(repeticiones1, sound)) {
            repeticiones1[sound] = 1
        } else {
            repeticiones1[sound] += 1
        }
}
console.log(repeticiones1)