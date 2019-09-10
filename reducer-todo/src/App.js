import React from 'react';
import ToDoList from './components/TodoList';
import AddItem from './components/AddItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <ToDoList />
  {/* <AddItem /> */}
  </header>
    </div>
  );
}

export default App;
