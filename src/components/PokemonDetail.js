import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PokemonDetail extends Component {

    render() {
        const name = ((((this.props.details || {}).sprites || {}).other || {}).dream_world || {}).front_default;
        console.log(name);
        return (
            <div>
                <p></p>
                <img src={name} />
                <p>Name: {this.props.details.name}</p>
                <p>Height: {this.props.details.height}</p>
                <p>Weight: {this.props.details.weight}</p>
            </div>
        )
    }
}

// PropTypes
PokemonDetail.propTypes = {
    details: PropTypes.object.isRequired
}

export default PokemonDetail;
