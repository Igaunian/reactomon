import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PokemonDetail(props) {

    const { id } = props.match.params;
    const [details, setDetails] = useState({});
    const picture = ((((details || {}).sprites || {}).other || {}).dream_world || {}).front_default;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setDetails(res.data));
        console.log(id)
    }, [id])
    
    return (
        <div>
            <p></p>
            <img style={{width: 250, height: 250, mode: 'fit'}} src={picture} />
            <p>Name: {details.name}</p>
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
        </div>
    )

}


export default PokemonDetail;
