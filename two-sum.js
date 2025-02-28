// Problem: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/**
 * Finds two numbers that add up to a specific target and returns their indices.
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum.
 * @return {number[]} - The indices of the two numbers.
 */
function twoSum(nums, target) {
    const numToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }

        numToIndex[nums[i]] = i;
    }

    return []; // If no solution is found
}

// Example usage:
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Explanation:
// The solution uses a hash map to store the indices of numbers as we iterate through the array.
// It checks if the complement of the current number has already been seen to find the pair.
