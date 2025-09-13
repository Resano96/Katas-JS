const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function nameFinder(nameList, nameToSearch) {
    let indice = nameList.indexOf(nameToSearch)
    let esta = false
    let respuesta = []

    if (indice != -1) {
        esta = true
        respuesta.push(esta)
        respuesta.push(indice)
    }
    else {
        respuesta.push(esta)
    }
    return respuesta
}
console.log(nameFinder(names, "Pete"))