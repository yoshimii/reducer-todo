import React, {useState, useReducer} from 'react';
import { initialState, todoReducer } from '../reducers/reducer';

const TodoForm = () => {
    const [todo, setTodo] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        e.preventDefault();
        setTodo(e.target.value);
    };
    console.log(state.todos)
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: todo});
        console.log(state.todos)
        setTodo('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='newtodo'
            placeholder='Enter a todo'
            onChange={handleChanges}
            value={todo}
            >
            </input>
            <button type='submit'>Add Todo</button>
            <button>Remove Todo</button>
        </form>
    )
}

export default TodoForm;