/*The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different. */
/**
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);
  const len = y.length - x.length;
  if (len > 0) {
    x = '0'.repeat(len) + x;
  } else {
    y = '0'.repeat(-len) + y;
  }
  let count = 0;
  for (let i = 0; i < y.length; i++) {
    if (y[i] !== x[i]) {
      count++;
    }
  }
  return count;
}
console.log(hammingDistance(1, 5)); // 1
// x: 0 0 0 1
// y: 0 1 0 1
// 1, 5 => 1
console.log(hammingDistance(0, 5)); // 2
// x: 0 0 0 0
// y: 0 1 0 1
// 0, 5 => 2
console.log(hammingDistance(1, 4)); // 2
console.log(hammingDistance(4, 1)); // 2
// 1, 4 => 2
console.log(hammingDistance(0, 4)); // 1
// 0, 4 => 1
console.log(hammingDistance(4, 2)); // 2
// x: 0 0 0 1
// y: 0 0 1 0
console.log(hammingDistance(3, 5)); // 2