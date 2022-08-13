import React, {useState} from "react";

export default function Todo (props) {

  function showTodo (todo) {
    console.log(todo);
  }
  


  return (
    <>
      <h1>This is TodoList Page.</h1>
      <input type="text" 
        onChange={e => {
          const todo = e.target.value;
            
        }} 
      />
      <button onClick={showTodo()}>추가하기</button>
    </>
  )
}