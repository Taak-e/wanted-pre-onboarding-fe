import axios from "axios";
import React from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { instance } from "../apis";

export default function Login (props) {

  axios({
    method: 'post',
    url: `${instance}/auth/signup`,
    headers: { "Content-Type" : "applocation/json"},
    body: {
      email: 'Fred',
      password: 'Flintstone'
    }
  });

  return (
    <>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          아이디
          <input type="text"></input>
        </Grid>

        <Grid padding="16px 0px">
          비밀번호
          <input type="password"></input>
        </Grid>

        <Button>
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
 