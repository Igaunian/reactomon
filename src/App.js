import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetail from './components/PokemonDetail';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setType] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then(res => setPokemons(res.data.results));
    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => setType(res.data.results));
  }, [])

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
            <PokemonList pokemons={pokemons} />
          )} />
          <Route path='/types' render={props => (
            <TypeList types={types} />
          )} />
          <Route exact path='/pokemon/:id' component={PokemonDetail} />
        </div>
      </div>
    </Router>
  );

}

export default App;
