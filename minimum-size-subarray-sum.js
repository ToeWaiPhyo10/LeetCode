// Problem: Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a contiguous subarray of which the sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.

function minSubArrayLen(target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
const target1 = 7;
const nums1 = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target1, nums1)); // Output: 2

const target2 = 4;
const nums2 = [1, 4, 4];
console.log(minSubArrayLen(target2, nums2)); // Output: 1

const target3 = 11;
const nums3 = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target3, nums3)); // Output: 0

// Explanation:
// The solution uses a sliding window approach to find the minimal length of a subarray with a sum >= target.
// It expands the window by moving the right pointer and shrinks it by moving the left pointer.
