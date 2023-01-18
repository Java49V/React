import React from "react";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Timer cityOrCountry={"Kiev"}></Timer>
        <Timer cityOrCountry={"United Kingdom"}></Timer>
        <Timer cityOrCountry={"Prague"}></Timer>
        <Timer cityOrCountry={"United States"}></Timer>
        <Timer cityOrCountry={"Israel"}></Timer>
      </div>
    </div>
  );
}

export default App;
