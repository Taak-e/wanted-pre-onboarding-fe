import React, {useState} from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { signUp } from "../apis/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp (props) {
  const navigate = useNavigate();
  
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

// 회원가입 post 요청
  const submit = async (e) => {
    const data = {
      email: userId,
      password: userPwd,
    };
    e.preventDefault();
    signUp(data).then((res) => {
      navigate("/");
    });
  };

  return (
    <SignUpBox>
      <Grid padding="16px">
        <Grid textAlign="center" width="200px" margin="auto" >
          <Text size="32px" bold>
            회원가입
          </Text>
        </Grid>
      
      <Grid textAlign="center">
        <Text size="15px" bold>
          <Grid padding="16px 0px 10px" margin="0px 0px 0px 7px" >
            E-mail :
            <input style={{marginLeft:"17px", border:"2px solid indianred"}}
              name="userId"
              type="text"
              onChange={handleInput}
              value={userId}
              placeholder="@를 포함시켜주세요."
            />
          </Grid>
        </Text>

        <Text size="15px" bold>
          <Grid padding="0px">
            Password :
            <input style={{marginLeft:"10px", border:"2px solid indianred"}}
              name="userPwd"
              type="password"
              onChange={handleInput}
              value={userPwd}
              placeholder="8자리 이상 작성해주세요."
            />
          </Grid>
        </Text>  
      </Grid>

        <Grid textAlign="center">
          <Button
            onClick={submit}
            // 버튼 비활성화를 통한 유효성 검사 
            disabled={userId.includes("@") !== true || userPwd.length < 8 }>
            가입하기
          </Button>
          <Text size="12px">
            👉아이디와 비밀번호의 기준을 충족 할 시 버튼이 활성화됩니다. 
          </Text>
        </Grid>
      </Grid>
    </SignUpBox>
  )
}

const SignUpBox = styled.main`
  background: white;
  width: 512px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
  margin: 0 auto;
  margin-top: 4rem;
`

const Button = styled.button`
  border: 2px solid indianred;
  border-radius: 5%;
  background-color: indianred;
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  :hover{
    background-color: lightsalmon;
  }
  :disabled {
    border: 2px solid grey;
    background-color: grey;
  }
  
`