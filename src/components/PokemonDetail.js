import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class PokemonDetail extends Component {

    state = {
        details: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(res => this.setState({details: res.data}));
    }

    render() {
        const picture = ((((this.state.details || {}).sprites || {}).other || {}).dream_world || {}).front_default;
        console.log(picture);
        
        return (
            <div>
                <p></p>
                <img src={picture} />
                <p>Name: {this.state.details.name}</p>
                <p>Height: {this.state.details.height}</p>
                <p>Weight: {this.state.details.weight}</p>
            </div>
        )
    }
}

// PropTypes
PokemonDetail.propTypes = {
    details: PropTypes.object.isRequired
}

export default PokemonDetail;
