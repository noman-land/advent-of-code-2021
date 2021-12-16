import axios from 'axios';

export const get = url =>
  axios.get(url, {
    headers: {
      Cookie: `session=${process.env.ADVENT_OF_CODE_2021_SESSION_TOKEN}`,
    },
  });
