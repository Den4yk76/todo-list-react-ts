import React from "react";
import styles from "./TodoItem.module.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  isLastItem: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  isLastItem,
}) => {
  return (
    <li className={`${styles.listItem} ${isLastItem ? styles.lastItem : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className={styles.checkbox}
      />
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
