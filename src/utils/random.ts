export function getRandomNumber(
  min: number,
  max: number,
  isMinInc: boolean = true,
  isMaxInc: boolean = false
): number {
  if (min === max) {
    console.log('min != max');
  }

  if (min > max) {
    [min, max] = [max, min];
  }
  min = isMinInc ? min : min + 1;
  max = isMaxInc ? max : max - 1;
  return min + Math.random() * (max - min);
}

export function getRandomMatrix(
  rows: number,
  columns: number,
  min: number,
  max: number
): number[][] {
  let matrix = [];
  for (let y = 0; y < rows; y++) {
    matrix[y] = new Array<number>(columns);
    for (let x = 0; x < columns; x++) {
      matrix[y][x] = getRandomNumber(min, max, true, true);
    }
  }
  return matrix;
}

export function getRandomArrayElement(array: any[]): any {
  return array[getRandomNumber(0, array.length, true, false)];
}
const nDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function getRandomDate(minYear: number, maxYear: number): Date {
  const minMonth: number = 0;
  const maxMonth: number = 11;
  const minDay: number = 1;

  const newYear: number = getRandomNumber(minYear, maxYear, true, true);
  const newMonth: number = getRandomNumber(minMonth, maxMonth, true, true);
  let maxDay: number =
    newYear % 4 === 0 ? nDays[newMonth] + 1 : nDays[newMonth];
  const newDay: number = getRandomNumber(minDay, maxDay, true, true);
  return new Date(newYear, newMonth, newDay);
}
