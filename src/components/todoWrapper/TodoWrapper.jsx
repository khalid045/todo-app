import React from "react";
import { useState } from "react";
import "./todoWrapper.css";
import { TodoForm } from "../todoForm/TodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //function to add items
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      complete: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // function to delect an item
  function removeTodoById(id) {
    const todoItems = todos.filter((todo) => todo.id !== id);
    setTodos(todoItems);
  }
  // function to set status of the do list

  const toggleTodoStatus = (id) => {
    //the id in the parameter signify the id of each individaul item
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  };
  // adding a edit function
  return (
    <div className="todoWrapper">
      <TodoForm
        addHandler={addTodo}
        todos={todos}
        //the delete function has been pass to the TodForm component so it can be assed in the Todo component
        deleteItem={removeTodoById}
        status1={toggleTodoStatus}
        // passing the toggle function to the TodoForm.jsx so it can be useed
      />
    </div>
  );
};
