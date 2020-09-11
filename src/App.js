import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Hello Clever programmers{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>
      <input />
      <button style={{ marginLeft: "1rem" }}>Add todo</button>
      <ul>
        <li>Take dogs for a walk</li>
        <li>Take the rubust out</li>
      </ul>
    </div>
  );
}

export default App;
