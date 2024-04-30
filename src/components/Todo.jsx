import React from "react";

function Todo({ text, todos, setTodos, todo }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <li className={` ${todo.completed ? "completed" : ""}`}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={completeHandler} />
          <label>{text}</label>

          <button className="destroy" onClick={deleteHandler}></button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
