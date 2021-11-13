import React, {useState} from 'react';
import Task from '../../components/Task/Task';
import './App.css';

function App() {
  // States
  const [tasks, setTasks] = useState([
    { done: true, text: "Nourrir le chat" },
    { done: true, text: "Faire du ReactJs" },
    { done: false, text: "Aller faire du jogging" },
  ]);
  const [valueInput, setValueInput] = useState('');

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

  const handleSubmitTask = e => {
    e.preventDefault();
    const addTodo = {
      done: false,
      text: valueInput
    }
    setTasks([...tasks, addTodo])
    setValueInput('');
  }

  const handleChange = e => {
    setValueInput(e.target.value);
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
  )).reverse();

  return (
    <div className="App">
      <header className="header">
        <h1>Todos list</h1>
      </header>
      <form className="form__add" onSubmit={(e) => handleSubmitTask(e)}>
        <input type="text" placeholder="Ajouter une tâche" value={valueInput} onChange={(e) => handleChange(e) } />
        <button type="submit">Ajouter</button>
      </form>
      <div className="task__list">
        { listTasks }
      </div>
    </div>
  )
}

export default App;