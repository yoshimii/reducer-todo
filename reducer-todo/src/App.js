import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/reducer';
import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
  <ToDoList  state={state}/>
  <TodoForm />
  </header>
    </div>
  );
}

export default App;
