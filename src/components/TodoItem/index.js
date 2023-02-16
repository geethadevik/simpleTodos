import './index.css'

const TodoItem = props => {
  const {Todo, deleteTodo} = props
  const {id, title} = Todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="todo">{title}</p>
      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
