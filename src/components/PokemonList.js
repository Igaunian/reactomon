import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ReactomonContext } from '../ReactomonContext';

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

const linkStyle = {
    textDecoration: 'none'
}

function PokemonList(props) {
    const [spacing, setSpacing] = React.useState(1);
    const classes = useStyles();
    const [pokemons, setPokemons] = useContext(ReactomonContext);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <div className={classes.root}>
            <Grid container justify="center" spacing={spacing}>
                {pokemons.map((pokemon, i) => (
                    <Grid item xs>
                        <Link style={linkStyle} to={`/pokemon/${i + 1}`}><Paper className={classes.paper}>{pokemon.name}</Paper></Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}


export default PokemonList;
