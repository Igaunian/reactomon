import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 100,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      paddingTop: 20,
    },
    control: {
      padding: theme.spacing(2),
    },
}));

const useStylesPagination = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const linkStyle = {
    textDecoration: 'none'
}

function PokemonList(props) {
    const [spacing, setSpacing] = useState(2);
    const classes = useStyles();
    const classesPagination = useStylesPagination();
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${offset}`)
          .then(res => setPokemons(res.data.results));
    }, [offset])

    const handleChange = (event, value) => {
        setOffset((value * 50) - 50);
    };

 
    return (
        <>
            <p></p>
            <Grid container justify="center" className={classes.root} spacing={2}>
                <div className={classesPagination.root}>
                    <Pagination count={6} onChange={handleChange} />
                </div>
                <p></p>
                <Grid item xs={10}>
                    <Grid container justify="center" spacing={spacing}>
                        {pokemons.map(function(pokemon, i) {
                            return <Grid key={i + offset} item>
                                <Link style={linkStyle} to={`/pokemon/${(i + offset) + 1}`}>
                                    <Paper key={i} className={classes.paper}>
                                        {pokemon.name}
                                        <img style={{width: 80, height: 80, mode: 'fit'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(i + offset) + 1}.png`}/>
                                    </Paper>
                                </Link>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
                <p></p>
                <div className={classesPagination.root}>
                    <Pagination count={6} onChange={handleChange} />
                </div>
            </Grid>
        </>
    )
}


export default PokemonList;
