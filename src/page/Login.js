import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { signIn } from "../apis/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login (props) {
  
  const navigate = useNavigate();
  
  useEffect(() => {
   if(localStorage.getItem("JWT") !== null)
    return navigate("/todo");
  }, []);
  
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
      localStorage.setItem("JWT", res.data.access_token)
      navigate("/todo");
    });
  };


  return (
  <LoginBox>
    
    <Grid padding="16px">
      <Grid textAlign="center" width="200px" margin="auto" >
        <Text size="32px" bold>
          Todo-List WebApp
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
        />
      </Grid>
    </Text>  
  </Grid>
  
    <Grid textAlign="center">
      <Button 
        onClick={submit}>
          로그인
      </Button>
     
      <Grid margin="0 10px 0 0">
        <Text size="15px">
          아직 회원이 아니시라면..?
        </Text>
      </Grid>
       
        <Link to = "/signup">
          <Text size="15px" bold>
            회원가입하러가기
          </Text>
        </Link>
      </Grid>
    </Grid>
  </LoginBox>
  );
};

const LoginBox = styled.main`
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
  :hover {
    background-color: lightsalmon;
  }
`
 