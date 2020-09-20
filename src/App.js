import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetail from './components/PokemonDetail';


class App extends Component {

  state = {
    pokemons: [],
    types: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(res => this.setState({pokemons: res.data.results}));
    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => this.setState({types: res.data.results}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavBar />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <p>let's see</p>
              </React.Fragment>
            )} />
            <Route path='/pokemons' render={props => (
              <PokemonList pokemons={this.state.pokemons} />
            )} />
            <Route path='/types' render={props => (
              <TypeList types={this.state.types} />
            )} />
            <Route exact path='/pokemon/:id' component={PokemonDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
