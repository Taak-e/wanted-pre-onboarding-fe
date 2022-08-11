import React from "react";

export default function Login (props) {
  return (
    <>
      <div>
      This is Login Page.
      <p>email</p>
      <p>password</p>
      <p>submit</p>

      {/* 
        1. 올바른 리스폰스 시 /todo 경로로 이동 
        2. JWT는 로컬 스토리지에 저장  
      */}

      {/* 
        1. 스토리지에 토큰이 있는 상태라면 /todo 로 리다이렉트
        2. 토큰이 없이 /todo 에 접속시 / 경로로 리다이렉트
      */}

      </div>
    </>
  )
}