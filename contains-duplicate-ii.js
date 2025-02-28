// Problem: Contains Duplicate II
// Given an array of integers nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * Determines if there are any duplicates within k distance in the array.
 * @param {number[]} nums - The array of integers.
 * @param {number} k - The maximum distance between duplicate indices.
 * @return {boolean} - True if such duplicates exist, otherwise false.
 */
function containsNearbyDuplicate(nums, k) {
    const indexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (indexMap.hasOwnProperty(num) && i - indexMap[num] <= k) {
            return true;
        }
        indexMap[num] = i;
    }

    return false;
}

// Example usage:
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false

// Explanation:
// The solution uses a hash map to store the last seen index of each number.
// It checks if a duplicate number exists within the specified distance k.
