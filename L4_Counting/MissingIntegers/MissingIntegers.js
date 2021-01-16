// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      holdValues.add(A[i]);
    }
  }
  for (let i = 1; i < A.length + 1; i++) {
    if (i in holdValues) {
      return i;
    }
  }
}
