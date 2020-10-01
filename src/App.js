import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetail from './components/PokemonDetail';
import { TypeListProvider } from './ReactomonContext';


function App() {

  return (
    <Router>
      <div className="App">
        <div className="container">
          <NavBar />

          <Route exact path='/' render={props => (
            <>
              <p>This is the ever famous Reactomon project</p>
            </>
          )} />

          <Route path='/pokemons' component={PokemonList} />

          <TypeListProvider>
            <Route path='/types' component={TypeList} />
          </TypeListProvider>

          <Route exact path='/pokemon/:id' component={PokemonDetail} />
        </div>
      </div>
    </Router>
  );

}

export default App;
