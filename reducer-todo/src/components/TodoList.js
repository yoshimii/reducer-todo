import React from 'react';

const TodoList = (props) => {
    const { toggleDone, toggleKids } = props;
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
                    <td><button onClick={() => toggleKids(item.id)}>Kids</button></td>
                    <td className={`todo-${item.completed ? 'completed' : ''}`}>{item.time}</td>
                    <td><button onClick={() => toggleDone(item.id)}>Seated</button></td>
                    </tr>
                    </>
                })}
            </table>

        )
    }

export default TodoList;
