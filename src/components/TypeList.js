import React, {useContext} from 'react';
import { ReactomonContext } from '../ReactomonContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 100,
      width: 100,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      paddingTop: 10,
    },
    control: {
      padding: theme.spacing(2),
    },
}));

function TypeList(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [types, setTypes] = useContext(ReactomonContext);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {types.map((type, i) => (
            <Grid key={i} item>
              <Paper className={classes.paper}>{type.name}</Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>      
    </Grid>
  );
}


export default TypeList;
