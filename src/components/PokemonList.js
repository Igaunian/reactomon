import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PokemonProvider, ReactomonContext } from '../ReactomonContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function PokemonList(props) {
    const classes = useStyles();
    const [pokemons, setPokemons] = useContext(ReactomonContext);
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {pokemons.map((pokemon, i) => (
                    <Grid item xs>
                        <Link style={linkStyle} to={`/pokemon/${i + 1}`}><Paper className={classes.paper}>{pokemon.name}</Paper></Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
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
