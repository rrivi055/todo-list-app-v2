// returns a color according to the task status
const getColor = (done) => (done ? 'green' : 'red');

function TodoItem({ id, title, done, onDone }) {
  return (
    <li style={{ color: getColor(done) }}>
      {title}
      {!done && <button onClick={() => onDone(id)}>המשימה בוצעה</button>}
    </li>
  );
}

export default TodoItem;