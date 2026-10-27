// returns a color according to the task status
const getColor = (done) => (done ? 'green' : 'red');

function TodoItem({ title, done }) {
  return <li style={{ color: getColor(done) }}>{title}</li>;
}

export default TodoItem;