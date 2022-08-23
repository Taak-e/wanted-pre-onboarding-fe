import React from 'react';
import styled from 'styled-components';

const TodoListTemplate = ({form, children}) => {
  return (
    <TodoTempliate>
      <Title>
        Todo - List
      </Title>
      <FormWrapper>
        {form}
      </FormWrapper>
      <TodosWrapper>
        { children }
      </TodosWrapper>
    </TodoTempliate>
  );
};

export default TodoListTemplate;

const TodoTempliate = styled.main`
  background: white;
  width: 512px;
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
  min-height: 5rem;
`