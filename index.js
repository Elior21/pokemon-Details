const getPoke = async () => {
    try{
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon`)
        const data = await response.json()
        const allPoke = data.results
        return allPoke
    }catch (err){
        console.log(err)
    }
}
const render = (pokeArr) => {
    const pokeList = pokeArr.map((singlePokemon) => {
      const splitUrl = singlePokemon.url.split(`/`)
    })
}
    getPoke()