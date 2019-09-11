import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const TodoList = (props) => {
    const { toggleDone, toggleKids } = props;
    const classes = useStyles();
        return (
            <table>
                <h2>Waiting List</h2>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Kids</th>
                    <th>Time</th>
                    <th>Seated</th>
                </tr>
                {props.state.map(item => {

                    return <>
                    <tr>
                    <td className={`todo-${item.completed ? 'completed' : ''}`}>{item.item}<span className={`present-${item.kids ? '' : 'true'}`}> 👶</span></td>
                    <td className={`todo-${item.completed ? 'completed' : ''}`}>{item.party}</td>
                    <td><Button variant="outlined" color='primary' className={classes.margin} size='small' onClick={() => toggleKids(item.id)}>Kids</Button></td>
                    <td className={`todo-${item.completed ? 'completed' : ''}`}>{item.time}</td>
                    <td><Button variant="outlined" color='primary' className={classes.margin} size='small' onClick={() => toggleDone(item.id)}>Seated</Button></td>
                    </tr>
                    </>
                })}
            </table>

        )
    }

export default TodoList;
