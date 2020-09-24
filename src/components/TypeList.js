import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ReactomonContext } from '../ReactomonContext';


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

function TypeList(props) {
    const classes = useStyles();
    const [types, setTypes] = useContext(ReactomonContext);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {types.map((type, i) => (                
                    <Grid item xs>
                        <Paper className={classes.paper}>{type.name}</Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

// PropTypes
TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList;
