const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    if(capitals.hasOwnProperty(country)){
        console.log(capitals[country])
    }
    else{
        console.log("No esta en la base de datos")
    }
}

getCapital("Spain")