import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'

import initialGetPokemon from './js/initialGetPokemon'
import getPokemon from './js/getPokemon'

import './style.scss'

const initialPokemon = await initialGetPokemon()

Alpine.plugin(focus)

Alpine.store('pokemon_list', {
  current: null,
  currentLoaded: false,
  pokemon: initialPokemon,
  async setCurrent(id) {
    this.current = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
    this.currentLoaded = true
  }
})

window.Alpine = Alpine
 
Alpine.start()
