import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PokemonList extends Component {

    render() {
        return this.props.pokemons.map(pokemon => (
            <div>
                <h3>
                    {pokemon.name}
                </h3>
            </div>
        ))
    }
}

// PropTypes
PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired
}

export default PokemonList;
