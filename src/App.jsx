import './App.css';
import { useState, useEffect} from 'react'
import axios from 'axios'


const urlBase = "https://pokeapi.co/api/v2/pokemon/"

function App () {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState({})
  let response
 
  useEffect(() => {
    const getPokemonData = async (name) => {
      try {

        response = await axios.get(urlBase + name)
        if(!response){
          return
        }else{
          const pokemonInfo = response.data
          setPokemon(pokemonInfo)
  
        }
        
      }catch {
        
      }
      
    }
    getPokemonData(pokemonName)
  }, [pokemonName])

  return (
    <>
      <header>
      </header>
      <h1>Introduce  el pokemon deseado</h1>
      <form>
        <label htmlFor="pokemon">Escoge el pokemon: </label>
        <input type="text" id='pokemon' name='pokemon' value={pokemonName} onChange={e => setPokemonName(e.target.value.toLowerCase())}/>
        <button type='submit'>Enviar</button>
        
      </form>
      {pokemon && (
          <div id="card">
             <img src={pokemon?.sprites?.other?.["official-artwork"].front_default} alt="" />
            <p>{pokemonName.toUpperCase() || 'Que pokemon quieres ver?'}</p> 
          </div>
          
        )}
        
    </>
)};

export default App;
