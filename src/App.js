import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./redux/todoSlice";

const App = () => {
  const todoList = useSelector(selectTodoList);
  console.log(typeof todoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="todo__container">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
