import React, { useRef } from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { RiDeleteBin2Fill, } from "react-icons/ri";
import db from "../configs/firebase.js";
import "./Todo.css";
import EditModal from "./EditModal.js";

const Todo = ({ data }) => {
  const editModalRef = useRef()
  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete()
  }

  return (
    <React.Fragment>
      <EditModal ref={editModalRef} />
      <List>
        <ListItem>
          <ListItemText primary={data.todo} secondary=" ⏰ Dummy deadline" />
        </ListItem>
        <RiDeleteBin2Fill style={{ fontSize: "2rem" }} onClick={() => deleteTodo(data.id)} />
        {/*  eslint-disable-next-line */}
        <Button onClick={() => editModalRef.current.showModal(data)}>📝</Button>
      </List>

    </React.Fragment>
  );
};

export default Todo;
