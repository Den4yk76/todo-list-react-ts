import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// Mock TodoList to avoid rendering the entire component tree
jest.mock("./components/TodoList/TodoList", () => () => (
  <div>TodoList Component</div>
));

test("renders App component", () => {
  render(<App />);
  expect(screen.getByText("TodoList Component")).toBeInTheDocument();
});
