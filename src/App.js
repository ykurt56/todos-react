import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import React, { useState, useEffect } from "react";

function App() {
  const getTodosFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      return localTodos;
    }
  };
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
      console.log(localTodos);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  return (
    <div className="App todoapp ">
      <header className="header">
        <h1>todos</h1>
      </header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />

      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
