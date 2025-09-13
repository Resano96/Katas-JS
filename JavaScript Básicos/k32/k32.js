const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    let edadMax = 3000
    let joven = [];
    for (man of xMen) {
        if (man.year < edadMax) {
            edadMax = man.year
        }
    }
    console.log(edadMax)
    for (man of xMen) {
        if (man.year == edadMax) {
            joven.push(man.name)
        }
    }
    console.log(joven)
}
findOldestXMen(xMen)