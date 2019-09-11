import React from 'react';

const TodoList = (props) => {
    const { toggleDone } = props;
        return (
            <div>
                <h3>Waiting List</h3>
                {props.state.map(item => {
                    return <><h3 className={`todo-${item.completed ? 'completed' : ''}`}>Name: {item.item}</h3> <p className={`todo-${item.completed ? 'completed' : ''}`}>Time: {item.time} Party size: {item.party}</p>
                    <button onClick={() => toggleDone(item.id)}>Seated</button></>
                })}
            </div>

        )
    }

export default TodoList;
