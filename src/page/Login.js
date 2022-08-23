import React from "react";
import styled from "styled-components";
import {Grid, Text} from "../elements/index";

export default function Login (props) {

  return (
    <>
      {/* <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          아이디
          <input
            type="text"
            onChange={inputData}
            placeholder="e-mail"
            value={userId}
          />
        </Grid>

        <Grid padding="16px 0px">
          비밀번호
          <input
            type="password"
            onChange={inputData}
            placeholder="e-mail"
            value={userPwd}
          />
        </Grid>

        <Button>
          가입하기
        </Button>
      </Grid> */}
    </>
  );
};

const Button = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 40px;
`
 