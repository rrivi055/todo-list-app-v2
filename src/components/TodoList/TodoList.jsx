import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

const initialTasks = [
  { id: 1, title: 'לקנות חלב', done: true },
  { id: 2, title: 'להכין שיעורי בית', done: false },
  { id: 3, title: 'לסדר את החדר', done: false },
];

function TodoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTitle, setNewTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (title === '') return;

    setTasks([...tasks, { id: Date.now(), title, done: false }]);
    setNewTitle('');
  };

  return (
    <div>
      <h2>רשימת משימות</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="משימה חדשה"
        />
        <button type="submit">אישור</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} title={task.title} done={task.done} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;