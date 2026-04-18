import React, { useState, useEffect } from "react";
import socket from "../services/socket";

function Editor() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("update_text", (data) => {
      setText(data);
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    socket.emit("text_change", value);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      style={{
        width: "90%",
        height: "500px",
        padding: "20px",
        fontSize: "16px",
        borderRadius: "10px",
      }}
      placeholder="Start typing..."
    />
  );
}

export default Editor;