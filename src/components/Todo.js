import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, Modal } from "@material-ui/core";
import { RiDeleteBin2Fill, } from "react-icons/ri";
import db from "../configs/firebase.js";
import "./Todo.css";

const Todo = ({ data }) => {


  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete()
  }

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText primary={data.todo} secondary=" ⏰ Dummy deadline" />
        </ListItem>
        <RiDeleteBin2Fill style={{ fontSize: "2rem" }} onClick={() => deleteTodo(data.id)} />
        {/*  eslint-disable-next-line */}
        <Button onClick={handleOpen}>📝</Button>
      </List>
    </React.Fragment>
  );
};

export default Todo;
