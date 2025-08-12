/*
Problem1 - Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
// Two pointers approach is used to solve this problem efficiently.
// The first pointer `i` iterates through the array, while the second pointer `x` keeps track of the last unique number found.
// Solved in O(n) time complexity and O(1) space complexity
// The function iterates through the array, checking if the current number is greater than the last unique number found. If it is,
//  it increments the index of the last unique number and updates it with the current number.
//  The function returns the count of unique numbers found, which is `x + 1` since `x` is zero-based index. The rest of the array can be ignored

/*
Problem2 - Remove Element
https://leetcode.com/problems/remove-element/description/
Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    // shift element to the left if it is not equal to val
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};
// Two pointers approach is used to solve this problem efficiently.
// The first pointer `i` iterates through the array, while the second pointer `x` keeps track of the last unique number found that is not equal to `val`.
// The function iterates through the array, checking if the current number is not equal to `val`. If it is not, it updates the position of the last unique number found and increments the index.
// The function returns the count of unique numbers found that are not equal to `val`, which is `x`.
// The rest of the array can be ignored.
// Solved in O(n) time complexity and O(1) space complexity
