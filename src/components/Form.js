import React from 'react';
import styled from 'styled-components';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <FormBox>
      <Input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <PlusButton onClick={onCreate}>
        추가하기
      </PlusButton>
    </FormBox>
  );
};

export default Form;

const FormBox = styled.div`
  display: flex;
`
const Input = styled.input`
  flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid indianred;
`

const PlusButton = styled.button`
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