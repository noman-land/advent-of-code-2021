import { exec } from 'child_process';

const dayNum = process.argv[2];

exec(`node js/day${dayNum}/day${dayNum}.js`, (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
