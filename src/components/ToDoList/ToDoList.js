import React from "react";

import "./ToDoList.css";

const ToDoList = (props) => {
  return (
    <ul className="todo-list">
      {props.list.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
