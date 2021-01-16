// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let holdValues = new Set();
  let maxEle = 0;
  for (let index = 0; index < A.length; index++) {
    holdValues.add(A[index]);
    if (A[index] > maxEle) {
      maxEle = A[index];
    }
  }
  if (maxEle != A.length) {
    return false;
  }
  if (holdValues.size == A.length) {
    return true;
  }
  return false;
}
