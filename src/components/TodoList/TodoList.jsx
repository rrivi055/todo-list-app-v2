import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';

const initialTasks = [
  { id: 1, title: 'לקנות חלב', done: true },
  { id: 2, title: 'להכין שיעורי בית', done: false },
  { id: 3, title: 'לסדר את החדר', done: false },
];

function TodoList() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
  };

  return (
    <div>
      <h2>רשימת משימות</h2>
      <TodoForm onAdd={addTask} />
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} title={task.title} done={task.done} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;