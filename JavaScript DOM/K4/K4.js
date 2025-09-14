const input = document.querySelector('.click')
input.value='No se para que vale este input'
//1
const btn = document.querySelector('#btnToClick')
btn.innerHTML='Si haces click te doy informacion del click'
btn.addEventListener('click', (event) =>{
    console.log('Informacion del click:', event)
})
//2
const input1 = document.querySelector('.focus')
input1.addEventListener('focus', (event) =>{
    console.log('En el segundo cuadradito, cuando has clickado en él, ponia:', event.target.value)
})
input1.addEventListener('change',(event) =>{
    console.log('En el segundo cuadradito, cuando has salido de él, pone:', event.target.value)
})
//3
const input2 = document.querySelector('.value')
input2.addEventListener('input', (event) =>{
    console.log('Estas escribiendo en el tercer cuadradito, ahora pone:', event.target.value)
})

