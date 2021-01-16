// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let sum = A.reduce((total, value) => total + value, 0);
  let min = Number.POSITIVE_INFINITY;
  let cumulativeSum = 0;
  for (let i = 0; i < A.length - 1; ++i) {
    cumulativeSum = cumulativeSum + A[i];
    sum = sum - A[i];
    diff = Math.abs(sum - cumulativeSum);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}
