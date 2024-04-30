import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHanler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandle = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random(),
      },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form className="todoapp" onSubmit={submitTodoHandle}>
        <input
          className="new-todo"
          onChange={inputTextHanler}
          placeholder="What needs to be done?"
          value={inputText}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Form;
