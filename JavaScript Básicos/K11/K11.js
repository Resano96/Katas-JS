const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
    ];
    function averageWord(list) {
        let contador = 0
        for(let i = 0; i < list.length; i++){
            if (list[i]/1 === list[i]){
                contador = contador+ list[i]
                console.log(list[i])
            }else{
                contador = contador + list[i].length
                console.log(list[i].length)
            }
        }return contador
    }
    console.log(averageWord(mixedElements))