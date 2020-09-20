import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


function PokemonDetail(props) {

    const { id } = props.match.params;
    const [state, setState] = useState({});
    const picture = ((((state || {}).sprites || {}).other || {}).dream_world || {}).front_default;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setState(res.data));
        console.log(id)
    }, [id])
    
    return (
        <div>
            <p></p>
            <img style={{width: 250, height: 250, mode: 'fit'}} src={picture} />
            <p>Name: {state.name}</p>
            <p>Height: {state.height}</p>
            <p>Weight: {state.weight}</p>
        </div>
    )

}

// PropTypes
PokemonDetail.propTypes = {
    details: PropTypes.object.isRequired
}


export default PokemonDetail;
