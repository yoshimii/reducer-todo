import React, { useState } from 'react';

const TodoForm = (props) => {
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
            placeholder='Enter a name'
            onChange={handleChanges}
            value={todo}
            />
            <input
            type='text'
            name='partysize'
            placeholder='Enter party size'
            onChange={handlePartyChanges}
            value={party}
            />
            <button type='submit'>Add Todo</button>
            <button onClick={handleClear}>Clear Completed Todos</button>
        </form>
    )
}

export default TodoForm;