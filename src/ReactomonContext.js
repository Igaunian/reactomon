import React, { useState, createContext } from 'react';


export const ReactomonContext = createContext();

export const PokemonListProvider = props => {
    const [pokemons, setPokemons] = useState([{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"}]);
    return (
        <ReactomonContext.Provider value={[pokemons, setPokemons]}>
            {props.children}
        </ReactomonContext.Provider>
    )
}
// const [types, setType] = useState([]);
