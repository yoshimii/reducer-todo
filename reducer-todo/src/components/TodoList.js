import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer';

const TodoList = () => {
    const [todo, setTodo] = useState({});
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        setTodo(e.target.value);
    };

        return (
            <div>
                Todo List:
                <h1>{state.todos.map(item => {
                    return item.item;
                })}</h1>
            </div>

        )
    }

export default TodoList;
