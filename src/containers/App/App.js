// Librairies
import React, {useState, useRef, useEffect} from 'react';
import axiosTodo from '../../conf/firebase';

// Composants
import Task from '../../components/Task/Task';
import Spinner from '../../components/Ui/Spinner/Spinner';

// Css
import './App.css';

function App() {
  // States
  const [tasks, setTasks] = useState([]);
  const [valueInput, setValueInput] = useState('');
  const [loading, setLoading] = useState(false)

  // Ref
  const refInput = useRef(null);

  // Methodes
  const deleteTodoHandler = index => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
    axiosTodo.delete(`/todos/${tasks[index].id}.json`)
              .then(response => {
                console.log(response);
              })
              .catch(err => console.log(err))
  }
  
  const doneTodoHandler = index => {
    const newTodos = [...tasks];
    newTodos[index].done = !newTodos[index].done;
    setTasks(newTodos)
    axiosTodo.put(`/todos/${tasks[index].id}.json`, newTodos[index])
              .then(response => {
                console.log(response);
              })
              .catch(err => console.log(err))
  }

  const handleSubmitTask = e => {
    e.preventDefault();
    const addTodo = {
      done: false,
      text: valueInput
    }

    axiosTodo.post('/todos.json', addTodo)
              .then(response => {
                console.log(response);
                fetchTodos();
                setValueInput('');
              })
              .catch(err => console.log(err));
    // setTasks([...tasks, addTodo])
  }

  const handleChange = e => {
    setValueInput(e.target.value);
  }

  const fetchTodos = () => {
    setLoading(true);
    axiosTodo.get('/todos.json')
              .then(response => {
                let todos = [];
                for (const key in response.data) {
                  todos.push({
                    ...response.data[key],
                    id: key,
                  })
                }
                console.log(todos);
                setTasks(todos);
                setTimeout(() => {
                  setLoading(false);
                }, 900)
              })
              .catch(err => console.log(err))
  }

  // Etats
  useEffect(() => {
    refInput.current.focus()
    fetchTodos();
  }, [])

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
        <input ref={refInput} type="text" placeholder="Ajouter une tâche" value={valueInput} onChange={(e) => handleChange(e) } />
        <button type="submit">Ajouter</button>
      </form>
      <div className="task__list">
        { loading ? <Spinner /> : listTasks }
      </div>
    </div>
  )
}

export default App;