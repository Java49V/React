import React from 'react';
import { Timer } from './components/Timer';


function App() {
  const flexColumn : React.CSSProperties = {display: 'flex', flexDirection: 'column'};
  const flexRow: React.CSSProperties = {display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '80vw',
  margin: '2vw'};

  return <div style={flexColumn}>
      <div style={flexRow}>
        <Timer cityOrCountry=''></Timer>
        <Timer cityOrCountry=''></Timer>
      </div>
      <div style={flexRow}>
        <Timer cityOrCountry=''></Timer>
        <Timer cityOrCountry=''></Timer>
      </div>
    </div>
}

export default App;
