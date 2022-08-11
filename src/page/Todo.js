import React from "react";

export default function Todo (props) {

  function showTodo (todoList) {
    console.log(todoList);
  }

  return (
    <>
      <h1>This is TodoList Page.</h1>
      <input type="text" 
        onChange={e => {
          const todoList = e.target.value;
            showTodo(todoList);
        }} 
      />
    </>
  )
}