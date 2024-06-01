import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "./TodoItem";

const mockToggleTodo = jest.fn();
const mockDeleteTodo = jest.fn();

const todo = {
  id: 1,
  text: "Test Todo Item",
  completed: false,
};

test("renders TodoItem component", () => {
  render(
    <TodoItem
      todo={todo}
      toggleTodo={mockToggleTodo}
      deleteTodo={mockDeleteTodo}
      isLastItem={false}
    />
  );
  expect(screen.getByText("Test Todo Item")).toBeInTheDocument();
});

test("can toggle a todo item", () => {
  render(
    <TodoItem
      todo={todo}
      toggleTodo={mockToggleTodo}
      deleteTodo={mockDeleteTodo}
      isLastItem={false}
    />
  );
  fireEvent.click(screen.getByRole("checkbox"));
  expect(mockToggleTodo).toHaveBeenCalledWith(todo.id);
});

test("can delete a todo item", () => {
  render(
    <TodoItem
      todo={todo}
      toggleTodo={mockToggleTodo}
      deleteTodo={mockDeleteTodo}
      isLastItem={false}
    />
  );
  fireEvent.click(screen.getByText("Delete"));
  expect(mockDeleteTodo).toHaveBeenCalledWith(todo.id);
});

test("shows completed style for completed todo item", () => {
  const completedTodo = { ...todo, completed: true };
  render(
    <TodoItem
      todo={completedTodo}
      toggleTodo={mockToggleTodo}
      deleteTodo={mockDeleteTodo}
      isLastItem={false}
    />
  );
  expect(screen.getByText("Test Todo Item")).toHaveClass("completed");
});
