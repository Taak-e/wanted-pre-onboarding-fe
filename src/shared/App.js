import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Todo from "../page/Todo";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
