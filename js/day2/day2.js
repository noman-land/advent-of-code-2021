import { get } from '../utils/ajax.js';

const calculate = coord => ({
  up: value => {
    coord[0] -= value;
    return coord;
  },
  down: value => {
    coord[0] += value;
    return coord;
  },
  forward: value => {
    coord[1] += value;
    return coord;
  },
});

const data = await get('https://adventofcode.com/2021/day/2/input').then(
  ({ data }) => data.split('\n')
);

const part1 = data
  .filter(n => n)
  .reduce(
    (coord, curr) => {
      const [direction, value] = curr.split(' ');
      const calc = calculate(coord);
      return calc[direction](parseInt(value, 10));
    },
    [0, 0]
  );

const calculate2 = coord => ({
  up: value => {
    coord[2] -= value;
    return coord;
  },
  down: value => {
    coord[2] += value;
    return coord;
  },
  forward: value => {
    coord[0] += value;
    coord[1] += coord[2] * value;
    return coord;
  },
});

const part2 = data
  .filter(n => n)
  .reduce(
    (coord, curr) => {
      const [direction, value] = curr.split(' ');
      const calc = calculate2(coord);
      return calc[direction](parseInt(value, 10));
    },
    [0, 0, 0]
  );

console.log('part 1:', part1[0] * part1[1]);
console.log('part 2:', part2[0] * part2[1]);
