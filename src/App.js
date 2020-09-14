import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";
import db from "./configs/firebase";
import firebase from "firebase";
import EditModal from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const editModalRef = useRef()

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setTodos(snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()

          }
        }));
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>
        Hello Clever programmers
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <FormControl>
        {/* eslint-disable-next-line */}
        <InputLabel>✍ Write A Todo</InputLabel>
        <Input value={input} onChange={(event) => setInput(event.target.value)} />
      </FormControl>
      <Button
        disabled={!input}
        type="submit"
        color="primary"
        variant="contained"
        style={{ marginLeft: "1rem" }}
        onClick={addTodo}
      >
        Add todo
      </Button>
      <ul>
        {todos.map((record) => (
          <Todo key={record.id} data={record} openModal={editModalRef} />
        ))}
      </ul>
      <EditModal ref={editModalRef} />
    </div>
  );
}

export default App;
