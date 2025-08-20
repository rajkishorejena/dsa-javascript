/*
 Linear Search
 This function performs a linear search on an array to find the index of a target value.
*/
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}
linearSearch([1, 2, 3, 4, 5], 3); // Returns 2
// This approach has a time complexity of O(n) and a space complexity of O(1) since it uses only a few variables for indexing.

/*
Binary Search
 This function performs a binary search on a sorted array to find the index of a target value.
 https://leetcode.com/problems/binary-search/description/
 
 Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((right + left) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) right = middle - 1;
    else {
      left = middle + 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));

// The function uses a while loop to repeatedly divide the search space in half until the target is found or the search space is empty.
// It calculates the middle index and compares the target with the value at that index.
// If the target is found, it returns the index; if the target is less than the middle value, it narrows the search to the left half; otherwise, it narrows to the right half.
// The function returns -1 if the target is not found in the array.
// This approach has a time complexity of O(log n) and a space complexity of O(1) since it uses only a few variables for indexing.
