import React, {useState} from 'react';
import Task from '../../components/Task/Task';
import './App.css';

function App() {
  // States
  const [tasks, setTasks] = useState([
    { done: true, text: "Nourrir le chat" },
    { done: false, text: "Faire du ReactJs" },
    { done: false, text: "Aller faire du jogging" },
  ]);

  // Methodes
  const deleteTodoHandler = index => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
    // console.log(index);
  }
  
  const doneTodoHandler = index => {
    const newTodos = [...tasks];
    newTodos[index].done = !newTodos[index].done;
    setTasks(newTodos)
  }

  // Variables
  let listTasks = tasks.map((task, index) => (
    <Task
      key={ index }
      done={ task.done }
      name={ task.text }
      deleteTodo={() => deleteTodoHandler(index)}
      doneTodo={() => doneTodoHandler(index)}
    />
  ))

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
        { listTasks }
      </div>
    </div>
  )
}

export default App;