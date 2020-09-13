import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";
import db from "./configs/firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snap) => {
      setTodos(snap.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      times: firebase.firestore.FieldValue.serverTimestamp(),
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
        {todos.map((todo) => (
          <Todo key={uuidv4()} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
