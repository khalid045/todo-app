import React from "react";
import "./todoForm.css";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { Todo } from "../todo/Todo";

export const TodoForm = ({ addHandler, todos, deleteItem, status1 }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addHandler(userInput);

    // this is clear the input feild for the user to type again
    setUserInput("");
  };
  return (
    <>
      <form className="todoForm" onSubmit={handleSubmit}>
        <h1 className="todoTitle">TO DO APP</h1>
        <div className="inputCont">
          <Search />
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            placeholder="What is the Task for the Day"
            className="todoInput"
          />
        </div>

        <button type="submit" className="todoBTN">
          Add Task
        </button>

        {todos.map((todo) => (
          // this is Todo.jsx component is called
          <Todo
            key={todo.id}
            itemData={todo}
            //this is where a new variable is decleard to send the function to the Todo.jsx
            deleteIT={deleteItem}
            // this is where status1 was called by status2 to be used in the Todo.jsx
            status2={status1}
          />
        ))}
      </form>
    </>
  );
};
