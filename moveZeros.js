/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations. */
/**
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place
 */
const moveZeros = (nums) => {
  let start = 0;
  let pointer = 0;
  while (pointer < nums.length) {
    let curr = nums[start];
    let currPointer = nums[pointer];
    if (currPointer === 0) {
      pointer++;
    } else if (curr === 0) {
      // swap with it's neighbor that's not 0
      nums[start] = currPointer;
      nums[pointer] = 0;
      start++;
      pointer++;
    } else {
      start++;
      pointer++;
    }
  }
  return nums;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
// 1 0 0 3 12
// 1 3 0 0 12
//
console.log(moveZeros([1, 2, 3]));
console.log(moveZeros([0, 0, 0]));
console.log(moveZeros([0, 1, 0]));
console.log(moveZeros([0, 1, 2]));
console.log(moveZeros([2, 1, 0]));
console.log(moveZeros([1, 0, 1]));
console.log(moveZeros([1]));
console.log(moveZeros([]));
console.log(moveZeros([0]));