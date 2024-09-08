import React from "react";
import DynamicForm from "./components/dynamicForm";
import "./App.css";

function App() {
  return (
    <div className="form_container">
      <h2 className="form_heading">One after another</h2>
      <DynamicForm />
    </div>
  );
}

export default App;
