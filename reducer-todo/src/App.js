import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/reducer';

import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("state", state);

  const addTodo = (item, party) => {
    dispatch({ type: "ADD_TODO", payload: item, payload2: party });
  };

  const clearDone = () => {
    dispatch({ type: "CLEAR_DONE" });
  };
  const toggleDone = (id) => {
    dispatch({ type: "TOGGLE_DONE", payload: id});
  };

  const toggleKids = (id) => {
    dispatch({ type: "TOGGLE_KIDS", payload: id});
  };

  return (
    <div className="App">
      <header className="App-header">
  <ToDoList  state={state.todos} toggleDone={toggleDone} toggleKids={toggleKids}/>
  <TodoForm addTodo={addTodo} clearDone={clearDone}/>
  </header>
    </div>
  );
}

export default App;
