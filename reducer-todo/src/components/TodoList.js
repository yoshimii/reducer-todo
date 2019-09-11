import React from 'react';

const TodoList = (props) => {
    const { toggleDone } = props;
        return (
            <div>
                Waiting List
                {props.state.map(item => {
                    return <><h1 className={`todo-${item.completed ? 'completed' : ''}`}>{item.item}</h1>
                    <button onClick={() => toggleDone(item.id)}>Seated</button></>
                })}
            </div>

        )
    }

export default TodoList;
