import './App.css';
import { useEffect, useState } from 'react';

import TodoTask from './components/todoTask';

function App() {
  const [todoTasks, setTodoTasks] = useState(null);

  useEffect(() => {
    console.log(" Hey, I've loaded up");
    if (!todoTasks) {
      fetch("http://localhost:8080/api/todoTasks")
        .then((response) => response.json())
        .then((dataTodoTasks) => {
          console.log(" Todo items list: ", dataTodoTasks);
          setTodoTasks(dataTodoTasks);
        });
    }
  }, [todoTasks]);
  return (
    <div>
      { todoTasks ? todoTasks.map((todoTask) => {
        return (
          <TodoTask key={todoTask.id} data={todoTask}/>
          );
      }) : "loading data..."}
    </div>
  );
}
export default App;