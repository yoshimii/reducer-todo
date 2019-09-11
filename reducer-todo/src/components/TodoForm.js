import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

const TodoForm = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    });
  
  

    const [todo, setTodo] = useState('');
    const [party, setParty] = useState('');
    const { addTodo, clearDone } = props;

    const handleChanges = e => {
        e.preventDefault();
        setTodo(e.target.value);
    };

    const handlePartyChanges = e => {
        e.preventDefault();
        setParty(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo, party);
        setTodo('');
        setParty('');
    }

    const handleClear = e => {
        e.preventDefault();
        clearDone();
    }
    return (
        <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
            <TextField
            type='text'
            name='newtodo'
            placeholder='Enter a name'
            onChange={handleChanges}
            value={todo}
            />
            <TextField
            type='text'
            name='partysize'
            placeholder='Enter party size'
            onChange={handlePartyChanges}
            value={party}
            />
            <Grid item>
              <ButtonGroup color='primary' size="small" aria-label="small outlined button group">
              <Button type='submit'>Add Guests</Button>
              <Button onClick={handleClear}>Clear Seated Guests</Button>
              </ButtonGroup>
             </Grid>
            {/* <button type='submit'>Add Guests</button>
            <button onClick={handleClear}>Clear Seated Guests</button> */}
        </form>
    )
}

export default TodoForm;