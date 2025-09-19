async function getCharacters() {
    const personajes =[]
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await response.json();
    return data;

    personajes = [...data];
  } catch (error) {
    console.error("Error:", error);
  }
  return personajes
}

async function main() {
    const personajes = await getCharacters()
    const personajes1 = personajes.map(personaje => personaje.fullName)
    const select = document.querySelector("#character-list")
    const img = document.querySelector(".character-image")
    img.src = personajes[0].imageUrl
    img.height = 300
    const Nombre = document.createElement("h1")
    Nombre.innerText = personajes[0].fullName
    const Titulo = document.createElement("h3")
    Titulo.innerText = personajes[0].title

    img.after(Nombre)
    Nombre.after(Titulo)
    
    

    personajes1.map(persona =>{
        const opcion = document.createElement("option")
        opcion.value = persona
        opcion.innerHTML=persona
        select.appendChild(opcion)
    })
    select.addEventListener('change',(event) =>{
        console.log(event.target.value)
        for (const personaje of personajes) {
            if (personaje.fullName===event.target.value){
                img.src = personaje.imageUrl
                img.alt = personaje.image
                Nombre.innerText= personaje.fullName
                Titulo.innerText = personaje.title
                
            }
                
            
        }

    }
)


}
main()