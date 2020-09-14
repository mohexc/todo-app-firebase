import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { RiDeleteBin2Fill } from "react-icons/ri";
import db from "../configs/firebase.js";
import "./Todo.css";

const Todo = ({ data }) => {

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete()
  }
  return (
    <List>
      <ListItem>
        <ListItemText primary={data.todo} secondary=" ⏰ Dummy deadline" />
      </ListItem>
      <RiDeleteBin2Fill style={{ fontSize: "1rem" }} onClick={() => deleteTodo(data.id)} />
    </List>
  );
};

export default Todo;
