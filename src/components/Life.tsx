import React from 'react';
import { LifeMatrix } from '../service/LifeMatrix';
import { getRandomMatrix } from '../utils/random';
import { Matrix } from './Matrix';
type Props = {
  dim: number;
  ticInterval: number;
};
export const Life: React.FC<Props> = ({ dim: dimentions, ticInterval }) => {
  const lifeMatrix = React.useRef<LifeMatrix>();
  const [numbers, setNumbers] = React.useState<number[][]>([]);
  function tic() {
    if (lifeMatrix.current == null) {
      lifeMatrix.current = new LifeMatrix(
        getRandomMatrix(dimentions, dimentions, 0, 1)
      );
      //lifeMatrix.current = new LifeMatrix(matrix5);
    }
    setNumbers(lifeMatrix.current.nextStep());
  }
  React.useEffect(() => {
    const interval = setInterval(tic, ticInterval);
    return () => clearInterval(interval);
  }, [ticInterval]);

  return (
    <div>
      <Matrix numbers={numbers} />
    </div>
  );
};
