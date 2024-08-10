import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const setTask = () => {
    setTodos((prev) => [...prev, todo]);
    console.log("Tasks clicked", todos);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };

  useEffect(() => {
    console.log("Updated tasks:", todos);
  }, [todos]);
  return (
    <>
      <h1>ToDo List Project</h1>
      <div>
        <input
          type="text"
          placeholder="settodo"
          className="input-box"
          value={todo}
          onChange={handleTodoChange}
        />
        <button className="sbt-btn" onClick={setTask}>
          SetTodo
        </button>
      </div>
      {todos.map((to, index) => (
        <div key={index}>
          <p>{to}</p>
          <button
            onClick={() => {
              deleteTodo(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="image-container">
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="testimg"
          className="image-test"
        />
      </div>
      <div className="line-input"></div>
    </>
  );
}

export default App;
