// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // Set can only contain unique values, you can simply iterate through array A, adding the values into a Set until the size of Set equals the integer X, at which point that array key is the solution.
  let holdValues = new Set();
  for (i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if (holdValues.size == X) return i;
  }

  return -1;
}
