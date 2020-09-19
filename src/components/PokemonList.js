import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class PokemonList extends Component {

    render() {
        return this.props.pokemons.map(pokemon => (
            <div>
                <h3>
                    <Link style={linkStyle} to='/pokemon/1'>{pokemon.name}</Link>
                </h3>                    
            </div>
        ))
    }
}

const linkStyle = {
    color: '#333',
    textDecoration: 'none'
}

// PropTypes
PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired
}

export default PokemonList;
