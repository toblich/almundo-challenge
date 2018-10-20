module.exports = almundo;

function almundo(t) {
  // The timer starts at 3, then at 6, then at 12, etc...
  // All the starting times are 3 * 2^x, where x increases by one each time
  // Given that 2^n - 1 = sum(2^i, for i < n), I'll find out which pow2 * 3 the timer is currently looping from,
  // and how long has it been since it last looped from 0

  const x = Math.ceil(Math.log2(t / 3 + 1))
  return 3 * Math.pow(2, x) - t - 2;
};

/**
 * The following is a test code that outputs:
 *
 * 3, 2, 1
 * 6, 5, 4, 3, 2, 1
 * 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 * 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 *
 */
let t = 0;
for (let n = 0; n < 4; n++){
  let results = [];
  for (let i = 1; i <= 3*Math.pow(2, n); i++) {
    t++;
    // console.log(t)
    results.push(almundo(t))
  }
  console.log(results.join(', '));
}


