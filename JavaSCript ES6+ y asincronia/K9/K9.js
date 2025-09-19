function getRandomExcluded() {
  const n = Math.floor(Math.random() * 1302) + 1

  if (n <= 1025) {
    return n
  } else {
    return 10000 + (n - 1025)
  }
}
    //los pokes van del 1 al 1025 y luego del 10 001 al 10277

async function get2Pokes() {
    const personajes =[]
  try {
    const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomExcluded()}/`);
    const poke1 = await response1.json()
    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomExcluded()}/`);
    const poke2 = await response2.json()
    const pokes = [poke1,poke2];
    console.table(pokes)
    return pokes;
    
  } catch (error) {
    console.error("Error:", error);
  }
  return pokes
}


async function main() {
    const pokes = await get2Pokes()
    const poke1 = pokes[0]
    const poke2 = pokes[1]
    console.table(poke1)
    const pokename1 = poke1.forms[0].name
    console.table(pokename1)
    const pokename2 = poke2.forms[0].name
    console.table(pokename2)
    const pokeimg1 = poke1.sprites.front_default
    const pokeimg2 = poke2.sprites.back_default

    const imagenpoke1 = document.querySelector(".st_poke")
    const imagenpoke2 = document.querySelector(".nd_poke")
    const namepoke1 = document.querySelector(".st_poke_name")
    const namepoke2 = document.querySelector(".nd_poke_name")

    imagenpoke1.src = pokeimg1
    imagenpoke2.src = pokeimg2
    namepoke1.textContent = pokename1
    namepoke2.textContent = pokename2


}
main()