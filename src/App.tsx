import React from 'react';
import {
  getRandomNumber,
  getRandomMatrix,
  getRandomArrayElement,
} from './utils/random';
function App() {
  console.log(getRandomNumber(0, 22, true, true));
  console.log(getRandomMatrix(25, 25, 1, 25));
  console.log(getRandomArrayElement([1, 10, 200, 1500, 87]));
  return <div></div>;
}
export default App;
