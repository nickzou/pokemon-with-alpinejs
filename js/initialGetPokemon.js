import axios from 'axios'

const initialGetPokemon = async () => {
  try {
    const req = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const data = await req.data
    const results = await data.results

    const individualURLs = results.map(i => axios.get(i.url))

    const output = []

    await axios.all(individualURLs).then(axios.spread(async (...responses) => {
      for (let i = 0; i < results.length; i++) {
        output[i] = {id: responses[i].data.id, data: results[i]}
      }
    }))
    return output
  } catch (error) {
    console.log(error)
  }
  }

  export default initialGetPokemon