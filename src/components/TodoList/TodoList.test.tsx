import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "./TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("can add a new todo item", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a new task..."), {
    target: { value: "Test Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("can toggle a todo item", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Add a new task..."), {
    target: { value: "Test Todo" },
  });
  fireEvent.click(screen.getByText("Add Todo"));
  fireEvent.click(screen.getAllByRole("checkbox")[0]);
  expect(
    screen.getByText("Test Todo", { selector: ".completed" })
  ).toBeInTheDocument();
});
