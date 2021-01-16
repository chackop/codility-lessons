// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unpairedSolution = true; // to return and properly break if not possible
  // run for all ints
  for (let index = 0; index < A.length; index++) {
    unpairedSolution = true; // set  true, in case last one failed
    // take all ints again (to compare to the rest
    for (let index2 = 0; index2 < A.length; index2++) {
      // note i escape comparing to itself
      if (A[index] == A[index2] && index != index2) {
        unpairedSolution = false;
        break;
      }
    }
    if (unpairedSolution) {
      return A[index]; //  (from the initial array as that is the reference number and the 2nd is for comparing)
    }
  }

  return 0;
}
