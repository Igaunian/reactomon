import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function PokemonDetail(props) {

    const { id } = props.match.params;
    let i = parseInt(id);
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
            <div>
                <span><Link style={linkStyle} to={giveMePreviousPokemon(i)}>Previous</Link></span>
                <span><img style={{width: 250, height: 250, mode: 'fit'}} src={picture} /></span>
                <span><Link style={linkStyle} to={giveMeNextPokemon(i)}>Next</Link></span>
            </div>
            <p>Name: {details.name}</p>
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
        </div>
    )

}

const giveMeNextPokemon = (id) => {
    if (id + 1 > 300) {
        return 300;
    } else {
        return `/pokemon/` + (id + 1);
    }    
}

const giveMePreviousPokemon = (id) => {
    if (id <= 1) {
        return 1;
    } else {
        return `/pokemon/` + (id - 1);
    }
    
}

const linkStyle = {
    textDecoration: 'none',
    color: '#424242',
}

export default PokemonDetail;
