import React from 'react';
import { Timer } from './components/Timer';


function App() {
  const flexColumn: React.CSSProperties = { display: "flex", flexDirection: "column" }
  const flexRow: React.CSSProperties = { display: "flex", flexDirection: "row" , 
  justifyContent: "space-around", width: "50vw", marginTop: "4vh"}
  return <div style={flexColumn}>
    <div style={flexRow}>
      <Timer cityOrCountry="London"></Timer>
      <Timer cityOrCountry="Paris"></Timer>
    </div>
    <div style={flexRow}>
      <Timer cityOrCountry="India "></Timer>
      <Timer cityOrCountry="Cuba"></Timer>
    </div>

  </div>

}

export default App;
