import "./App.css";
import React from "react";
import { useState } from "react";

import ValueDisplay from "./components/valueDisplay";

function App() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    if (e.key === "Enter") {
      setValue(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className="app_container">
      <h1 className="app_heading">Type the value and press "Enter"</h1>
      <input type="text" className="app_input" onKeyDown={handleChange} />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
