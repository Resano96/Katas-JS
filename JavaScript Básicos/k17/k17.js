const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for(let caracteristica in alien){
    console.log("La propiedad",caracteristica, "tiene cómo valor:",alien[caracteristica])
}