import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
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
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const classesPagination = useStylesPagination();
    const [pokemons, setPokemons, sprites, setSprites] = useContext(ReactomonContext);
    
    return (
        <>
            <p></p>
            <Grid container justify="center" className={classes.root} spacing={2}>
                <div className={classesPagination.root}>
                    <Pagination count={10} />
                    {/* <Pagination count={10} disabled /> */}
                </div>
                <p></p>
                <Grid item xs={10}>
                    <Grid container justify="center" spacing={spacing}>
                        {pokemons.map((pokemon, i) => (
                            <Grid key={i} item>
                                <Link style={linkStyle} to={`/pokemon/${i + 1}`}>
                                    <Paper key={i} className={classes.paper}>
                                        {pokemon.name}
                                        <img style={{width: 80, height: 80, mode: 'fit'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
                                    </Paper>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <p></p>
                <div className={classesPagination.root}>
                    <Pagination count={10} />
                    {/* <Pagination count={10} disabled /> */}
                </div>
            </Grid>
        </>
    )
}


export default PokemonList;
