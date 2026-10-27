import TodoItem from '../TodoItem/TodoItem';
const tasks = [
  { id: 1, title: 'לקנות חלב', done: true },
  { id: 2, title: 'להכין שיעורי בית', done: false },
  { id: 3, title: 'לסדר את החדר', done: false },
];

function TodoList() {
  return (
    <div>
      <h2>רשימת משימות</h2>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} title={task.title} done={task.done} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;