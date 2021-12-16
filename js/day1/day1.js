import { get } from '../utils/ajax.js';

const data = await get('https://adventofcode.com/2021/day/1/input').then(
  ({ data }) => data.split('\n').map(number => parseInt(number, 10))
);

const part1 = data.reduce((total, curr, i, list) => {
  if (i > 0 && curr > list[i - 1]) {
    return total + 1;
  }

  return total;
}, 0);

const part2 = data.reduce((total, curr, i, list) => {
  const now = curr + list[i - 1] + list[i - 2];
  const before = list[i - 1] + list[i - 2] + list[i - 3];
  if (i > 2 && now > before) {
    return total + 1;
  }

  return total;
}, 0);

console.log('part 1:', part1);
console.log('part 2:', part2);
