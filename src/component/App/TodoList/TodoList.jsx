import "./TodoList.css";

export default function TodoList({ todo, onDeleteTodo }) {
  return (
    <ul className="TodoList__list">
      {todo.map(
        ({ id, text, completed }) =>
          completed && (
            <li className="TodoList__item" key={id}>
              {text}{" "}
              <button
                className="TodoList__button"
                type="button"
                onClick={() => onDeleteTodo(id)}
              >
                Delete
              </button>
            </li>
          )
      )}
    </ul>
  );
}
