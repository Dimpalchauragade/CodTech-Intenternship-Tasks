import React from "react";
import CodeEditor from "./components/editor";
import Navbar from "./components/navbar";
import "./styles/app.css";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="editor-container">
        <CodeEditor/>
      </div>
    </div>
  );
}

export default App;