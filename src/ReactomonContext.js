import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const ReactomonContext = createContext();

export const PokemonListProvider = props => {
    const [pokemons, setPokemons] = useState([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"}]);
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
          .then(res => setPokemons(res.data.results));
      }, [])

    return (
        <ReactomonContext.Provider value={[pokemons, setPokemons]}>
            {props.children}
        </ReactomonContext.Provider>
    )
}

export const TypeListProvider = props => {
    const [types, setTypes] = useState([{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},{"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/"},{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"}]);
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
          .then(res => setTypes(res.data.results));
      }, [])

    return (
        <ReactomonContext.Provider value={[types, setTypes]}>
            {props.children}
        </ReactomonContext.Provider>
    )
}
