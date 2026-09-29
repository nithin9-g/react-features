import React from "react";
import ClassCounter from "./components/class";
import FunctionalCounter from "./components/fun";

function App() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>React Components Demo</h1>
      <FunctionalCounter initialCount={5} />
      <ClassCounter initialCount={10} />
    </div>
  );
}

export default App;
