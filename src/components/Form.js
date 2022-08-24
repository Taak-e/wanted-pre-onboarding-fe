import React, { useRef, useState }from 'react';
import styled from 'styled-components';
import { createTodo } from '../apis/todo';

const Form = ({word, setWord}) => {

  const inputRef = useRef();

  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  // 할 일 생성 post 요청
  const onSubmit = (e) => {
    inputRef.current.focus();
    e.preventDefault();

    const data = {
      todo: todoInput,
    };
    console.log(data)
    createTodo(data).then((res) => {
      setWord(!word);
      setTodoInput("");
    });
  };

  return (
    <FormBox onChange={handleChange}>
      <Input 
        value={todoInput}
        onChange={handleChange}
        ref={inputRef}
        placeholder="할 일을 입력해주세요!"/>
      <Button onClick={onSubmit}>
        추가하기
      </Button>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.form`
  display: flex;
`
const Input = styled.input`
  flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid indianred;
`

const Button = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: indianred;
  border: 1px solid indianred;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: lightsalmon;
  }
`