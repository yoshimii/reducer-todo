import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/reducer';

const TodoList = (props) => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);


        return (
            <div>
                Todo List:
                {props.state.todos.map(item => {
                    return <h1>{item.item}</h1>
                })}
            </div>

        )
    }

export default TodoList;
