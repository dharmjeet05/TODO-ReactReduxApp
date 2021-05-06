import { Checkbox } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import "./TodoItem.css";
import { setCheck } from "../redux/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
