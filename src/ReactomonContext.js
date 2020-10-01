import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';


export const ReactomonContext = createContext();


export const TypeListProvider = props => {
    // const [types, setTypes] = useState([{"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},{"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/"},{"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"}]);
    const [types, setTypes] = useState([]);

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
