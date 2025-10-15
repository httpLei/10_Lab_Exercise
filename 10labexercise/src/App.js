import React from "react";
import Assignments from "./components/Assignments";
import Chats from "./components/Chats";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>EchoLearn</h1>
      <Assignments />
      <hr />
      <Chats />
    </div>
  );
}

export default App;
