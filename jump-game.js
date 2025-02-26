// Problem: Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

function canJump(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}

// Example usage:
const nums1 = [2, 3, 1, 1, 4];
console.log(canJump(nums1)); // Output: true

const nums2 = [3, 2, 1, 0, 4];
console.log(canJump(nums2)); // Output: false

// Explanation:
// The solution uses a greedy approach to track the farthest index that can be reached.
// If at any point the current index is greater than the maximum reachable index, return false.
// Otherwise, update the maximum reachable index and continue.
// If the loop completes, return true as the last index is reachable.
