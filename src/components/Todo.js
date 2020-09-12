import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";

const Todo = ({ text }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={text} secondary=" ⏰ Dummy deadline" />
      </ListItem>
    </List>
  );
};

export default Todo;
