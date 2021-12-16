import { get } from '../utils/ajax.js';

get('https://adventofcode.com/2021/day/1/input')
  .then(({ data }) =>
    data.split('\n').reduce((total, curr, i, list) => {
      if (i > 0 && parseInt(curr, 10) > parseInt(list[i - 1], 10)) {
        return total + 1;
      }

      return total;
    }, 0)
  )
  .then(console.log);
