import React, {useState} from 'react';
import Task from '../../components/Task/Task';
import './App.css';

function App() {

  const [todo, setTodo] = useState([
    {}
  ])

  return (
    <div className="App">
      <header className="header">
        <h1>Todos list</h1>
      </header>
      <form className="form__add">
        <input type="text" placeholder="Ajouter une tâche" />
        <button type="submit">Ajouter</button>
      </form>
      <div className="task__list">
        <Task name="Faire du React" />
        <Task name="Nourrir le chat" />
        <Task name="Faire les courses" />
      </div>
    </div>
  );
}

export default App;
