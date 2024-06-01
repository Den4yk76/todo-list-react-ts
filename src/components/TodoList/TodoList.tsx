import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const isLocalStorageAvailable = () => {
  try {
    const test = "__localStorage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (isLocalStorageAvailable()) {
      const savedTodoList = localStorage.getItem("todos");
      return savedTodoList ? JSON.parse(savedTodoList) : [];
    } else {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo.trim()) {
      setError("Todo item cannot be empty");
      return;
    }
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    setError(null);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Todo List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.button}>
          Add Todo
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.filterButtons}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.filterButton} ${
              filter === "all" ? styles.active : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`${styles.filterButton} ${
              filter === "active" ? styles.active : ""
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${styles.filterButton} ${
              filter === "completed" ? styles.active : ""
            }`}
          >
            Completed
          </button>
        </div>
        <ul className={styles.list}>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              isLastItem={index === filteredTodos.length - 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
