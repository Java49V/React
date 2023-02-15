export function getRandomNumber(
  minValue: number,
  maxValue: number,
  isMinInclusive: boolean = true,
  isMaxInclusive: boolean = false
): number {
  if (!isMinInclusive) {
    minValue += 1;
  }
  if (isMaxInclusive) {
    maxValue += 1;
  }
  if (minValue == maxValue) {
    throw 'min may not be equaled to max';
  }
  if (minValue > maxValue) {
    [minValue, maxValue] = [maxValue, minValue];
  }
  return minValue + Math.trunc(Math.random() * (maxValue - minValue));
}

export function getRandomMatrix(
  rows: number,
  columns: number,
  min: number,
  max: number
): number[][] {
  const resMatrix: number[][] = [[]];
  for (let i = 0; i < rows; i++) {
    resMatrix[i] = [];
    for (let j = 0; j < columns; j++) {
      resMatrix[i][j] = getRandomNumber(min, max, true, true);
    }
  }
  return resMatrix;
}
export function getRandomArrayElement<T>(array: T[]): T {
  return array[getRandomNumber(0, array.length)];
}
export function getRandomDate(minYear: number, maxYear: number) {
  const year: number = getRandomNumber(minYear, maxYear);
  const month: number = getRandomNumber(0, 12);
  const day: number = getRandomNumber(0, 32);
  return new Date(year, month, day);
}
