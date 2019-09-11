import React from 'react';

const TodoList = (props) => {
    const { toggleDone } = props;
        return (
            <div>
                Todo List:
                {props.state.map(item => {
                    return <><h1 className={`todo-${item.completed ? 'completed' : ''}`}>{item.item}</h1>
                    <button onClick={() => toggleDone(item.id)}>Done</button></>
                })}
            </div>

        )
    }

export default TodoList;
