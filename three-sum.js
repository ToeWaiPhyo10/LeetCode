// Problem: 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// The solution set must not contain duplicate triplets.

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Example usage:
const nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1)); // Output: [[-1, -1, 2], [-1, 0, 1]]

const nums2 = [0, 1, 1];
console.log(threeSum(nums2)); // Output: []

const nums3 = [0, 0, 0];
console.log(threeSum(nums3)); // Output: [[0, 0, 0]]

// Explanation:
// The solution sorts the array and uses a two-pointer approach to find all unique triplets that sum up to zero.
