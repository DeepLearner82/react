// import React, { useState } from "react";

// import ToDoList from "./components/ToDoList/ToDoList";
// import NewItem from "./components/NewItem/NewItem";
// import "./App.css";

// const App = () => {
//   const [list, setToDoList] = useState([
//     { id: "item1", text: "Finish ReactJS" },
//     { id: "item2", text: "Learn new technologies" },
//     { id: "item3", text: "Attend meeting" },
//   ]);

//   const addNewItemHandler = (newItem) => {
//     // setToDoList(list.concat(newItem));
//     setToDoList((prevList) => prevList.concat(newItem));
//   };

//   return (
//     <div className="todo-list">
//       <h2>To Do List</h2>
//       <NewItem onAddItem={addNewItemHandler} />
//       <ToDoList list={list} />
//     </div>
//   );
// };

import Counter from "./Counter";
const App = () => {
  return <Counter />;
};

export default App;
