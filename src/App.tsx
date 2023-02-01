import React from 'react';
import { Life } from './components/Life';
import lifeConfig from './config/life-game.json';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Life
        dim={lifeConfig.dimentions}
        ticInterval={lifeConfig.ticInterval}
      ></Life>
    </div>
  );
}

export default App;
