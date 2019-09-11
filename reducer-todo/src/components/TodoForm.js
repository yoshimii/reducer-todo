import React, { useState } from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = useState('');
    const { addTodo, clearDone } = props;

    const handleChanges = e => {
        e.preventDefault();
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    const handleClear = e => {
        e.preventDefault();
        clearDone();
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
            <button onClick={handleClear}>Clear Completed Todos</button>
        </form>
    )
}

export default TodoForm;