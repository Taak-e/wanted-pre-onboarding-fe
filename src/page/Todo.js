import React from "react";
import Form from "../components/Form";
import TodoListTemplate from "../components/TodoListTemplate";

export default function Todo (props) {


  return (
    <>
      <TodoListTemplate form={<Form/>}>
        템플릿 완성      
      </TodoListTemplate>
    </>
  )
}