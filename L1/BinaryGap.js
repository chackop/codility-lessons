// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 6.4.0)
  let maxGap = 0;
  let curMaxGap = 0;
  let binStr = N.toString(2); // convert to binary
  let startIndexFromEnd = binStr.length - 1; // Start from the end
  // Start going through the characters from the righ
  for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
    // Find the first occurence of 1
    if (binStr.charAt(startIndexFromEnd) != "0") {
      break;
    }
  }
  // From the occurence of 1
  for (let i = startIndexFromEnd - 1; i >= 0; i--) {
    if (binStr.charAt(i) == "0") {
      curMaxGap = curMaxGap + 1; // Add onto the binary gap
    } else {
      if (curMaxGap > maxGap) {
        maxGap = curMaxGap; // Max gap check
      }
      curMaxGap = 0;
    }
  }
  return maxGap;
}

console.log("Max", solution(1041));
