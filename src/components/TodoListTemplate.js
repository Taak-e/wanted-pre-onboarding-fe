import React, { useState ,useEffect } from 'react';
import styled from 'styled-components';
import { getTodos } from '../apis/todo';
import Form from '../components/Form';
import TodoItemList from './TodoItemList';

const TodoListTemplate = () => {
  
  const [todos, setTodos] = useState([]);
  const [word, setWord] = useState(true);
  
  //get 요청
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  }, [word]);

  return (
    <TodoTempliate>
      <Title>
        Todo - List
      </Title>
      <FormWrapper>
        <Form word = {word} setWord = {setWord}/>
      </FormWrapper>
      <TodosWrapper>
        {todos.map((list) => (
          <TodoItemList key={list.id} list={list}/>
        ))}
      </TodosWrapper>
    </TodoTempliate>
  );
};

export default TodoListTemplate;

const TodoTempliate = styled.main`
  background: white;
  width: 600px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
  margin: 0 auto;
  margin-top: 4rem;
`

const Title = styled.div`
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 100;
  background: indianred;
  color: white;
`

const FormWrapper = styled.section`
  padding: 1rem;
  border-bottom: 1px solid indianred;
`

const TodosWrapper = styled.section`
  padding-bottom: 3px;
  min-height: 5rem;
`