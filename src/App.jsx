import React, { useState } from "react";
import Addition from './Addition.jsx'
import ToDoList from "./ToDoList.jsx";

function App() {
  const [list, setList] = useState([]);

  return (
    <>
      <Addition list = {list} setList = {setList}/>
      <ToDoList list = {list} setList = {setList}/>
    </>
  );
}

export default App
