import axios from 'axios'

const getPokemon = async (url) => {
  try {
    const req = await axios.get(url)
    const data = await req.data
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getPokemon