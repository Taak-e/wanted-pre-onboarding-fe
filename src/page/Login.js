import React, {useState} from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { signIn } from "../apis/auth";

export default function Login (props) {

       const [input, setInput] = useState({
    userId: "",
    userPwd: "",
  });
  const { userId, userPwd } = input;
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submit = async (e) => {
    const data = {
      email: userId,
      password: userPwd,
    };
    e.preventDefault();
    signIn(data).then((res) => {

      console.log(res.data);
      localStorage.setItem("JWT", res.data.access_token)
    });
  };

  return (
    <>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          E-mail 
          <input
            name="userId"
            type="text"
            onChange={handleInput}
            value={userId}
          />
        </Grid>

        <Grid padding="16px 0px">
          비밀번호  
          <input
            name="userPwd"
            type="password"
            onChange={handleInput}
            value={userPwd}
          />
        </Grid>


        <Button 
          onClick={submit}>
          로그인하기
        </Button>
      </Grid>

    </>
  );
};

const Button = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 40px;
`
 