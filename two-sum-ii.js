// Problem: Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

// Example usage:
const numbers1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(numbers1, target1)); // Output: [1, 2]

const numbers2 = [2, 3, 4];
const target2 = 6;
console.log(twoSum(numbers2, target2)); // Output: [1, 3]

const numbers3 = [-1, 0];
const target3 = -1;
console.log(twoSum(numbers3, target3)); // Output: [1, 2]

// Explanation:
// The solution uses a two-pointer approach to find the two numbers that add up to the target.
// It returns the indices of these numbers in a 1-indexed format.
