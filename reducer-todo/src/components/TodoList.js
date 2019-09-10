import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: props.todos
        };
    }
    render() {
        return (
            <div> {
                this.props.todos.map((todo, index) => {
                    return <TodoItem task={todo.task} key={
                            todo.id
                        }
                        id={
                            todo.id
                        }
                        completed={
                            todo.completed
                        }
                        number={
                            index + 1
                        }
                        writeTodo={
                            this.props.handleNewTask
                        }
                        toggleItem={
                            this.props.toggleItem
                        }
                        clearTodo={
                            this.props.clearTodo
                        }/>

                })
            } </div>

        )
    }
}

export default TodoList;
