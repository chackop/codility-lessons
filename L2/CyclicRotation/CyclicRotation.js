// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  //   The first array of the last K items was created by preceding the value with ‘-’ sign. If an index is a negative integer, an array’s length is added to the number in order to get the resulting index. If the second index is not specified, an array’s length is taken by default.
  // The second array contained the elements that had to be shifted right. It was computed as the source collection without the trailing K items.
  // Finally, the rotated array was computed based on the two collections by moving elements of the second array to the end and placing the first array’s item at the beginning. The arrays were concatenated with the aid of spread operator.

  const rotateArray = (arr, shiftCount) => [
    ...arr.slice(-shiftCount),
    ...arr.slice(0, -shiftCount),
  ];
  const shiftCount = K % A.length;

  return shiftCount ? rotateArray(A, shiftCount) : A; // If the array length and input it will lead to the same array
}
