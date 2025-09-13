//1
const boton = document.querySelector("#btnToClick");
boton.innerText = "Si me presionas te enseño lo que hago"
const input3 = document.querySelector(".click")

boton.addEventListener("click", function () { console.log(input3.value) })

//2
const input1 = document.querySelector(".focus")

input1.addEventListener('focus', function () {
    console.log(input1.value);
});

//3
const input2 = document.querySelector(".value")

const input = addEventListener("input", (ev) => {

    console.log(input2.value)
})