import React, { useState, useEffect } from "react";
import Todo from "./Todo";

function Todolist({ todos, setTodos }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (activeFilter === "Completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (activeFilter === "Active") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    } else {
      setFilteredTodos(todos);
    }
  }, [activeFilter, todos]);

  const showCompletedTasks = () => {
    setActiveFilter("Completed");
  };

  const showActiveTasks = () => {
    setActiveFilter("Active");
  };

  const showAllTasks = () => {
    setActiveFilter("All");
  };

  const remainingTodosCount = todos.filter((todo) => !todo.completed).length;

  const clearCompletedTasks = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  };

  return (
    <div>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>{remainingTodosCount}</strong> item
          {remainingTodosCount !== 1 ? "s" : ""} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={activeFilter === "All" ? "selected" : ""}
              onClick={showAllTasks}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "Active" ? "selected" : ""}
              onClick={showActiveTasks}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeFilter === "Completed" ? "selected" : ""}
              onClick={showCompletedTasks}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearCompletedTasks}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Todolist;
